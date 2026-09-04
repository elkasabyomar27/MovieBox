import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Movie { id:number; title:string; image:string; year:string; rating:number; genres:string[]; genreIds?:number[]; summary:string; runtime?:number; language?:string; }
interface TmdbMovie { id:number; title:string; poster_path:string|null; release_date:string; vote_average:number; genre_ids?:number[]; genres?:{id:number;name:string}[]; overview:string; runtime?:number; original_language?:string; }
interface TmdbPage { page:number; total_pages:number; results:TmdbMovie[]; }
export interface MoviePage { movies:Movie[]; page:number; totalPages:number; }
const poster=(path:string|null)=>path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://placehold.co/600x900/24232e/ffffff?text=No+Poster';
const toMovie=(m:TmdbMovie):Movie=>({id:m.id,title:m.title,image:poster(m.poster_path),year:m.release_date?.slice(0,4)||'Upcoming',rating:Number(m.vote_average.toFixed(1)),genreIds:m.genre_ids,genres:m.genres?.map(g=>g.name)||[],summary:m.overview||'No description available.',runtime:m.runtime,language:m.original_language?.toUpperCase()});
@Injectable({providedIn:'root'}) export class MovieService {
  private readonly base='https://api.themoviedb.org/3';
  constructor(private http:HttpClient) {}
  private getPage(path:string, params:Record<string,string|number>={}) { const query=new HttpParams({fromObject:{api_key:environment.tmdbApiKey,language:'en-US',...params}}); return this.http.get<TmdbPage>(`${this.base}${path}`,{params:query}).pipe(map(x=>({movies:x.results.map(toMovie),page:x.page,totalPages:x.total_pages}))); }
  trending(page=1) { return this.getPage('/trending/movie/week',{page}); }
  popular(page=1) { return this.getPage('/movie/popular',{page}); }
  upcoming(page=1) { return this.getPage('/movie/upcoming',{page}); }
  search(query:string,page=1) { return this.getPage('/search/movie',{query,page,include_adult:'false'}); }
  discover(genreId:number,page=1) { return this.getPage('/discover/movie',{with_genres:genreId,page}); }
  genres() { return this.http.get<{genres:{id:number;name:string}[]}>(`${this.base}/genre/movie/list`,{params:new HttpParams({fromObject:{api_key:environment.tmdbApiKey,language:'en-US'}})}).pipe(map(x=>x.genres)); }
  detail(id:string) { return this.http.get<TmdbMovie>(`${this.base}/movie/${id}`,{params:new HttpParams({fromObject:{api_key:environment.tmdbApiKey,language:'en-US'}})}).pipe(map(toMovie)); }
}
