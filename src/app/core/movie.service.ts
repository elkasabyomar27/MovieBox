import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

export interface Movie { id:number; title:string; image:string; year:string; rating:number; genres:string[]; summary:string; runtime?:number; language?:string; }
interface TvMazeShow { id:number; name:string; image?:{medium:string;original:string}; premiered?:string; rating?:{average:number|null}; genres:string[]; summary?:string; runtime?:number; language?:string; }
const toMovie = (s:TvMazeShow):Movie => ({id:s.id,title:s.name,image:s.image?.original || s.image?.medium || 'https://placehold.co/600x900/24232e/ffffff?text=No+Poster',year:s.premiered?.slice(0,4) || 'Upcoming',rating:s.rating?.average || 0,genres:s.genres,summary:(s.summary || 'No description available.').replace(/<[^>]*>/g,''),runtime:s.runtime,language:s.language});
@Injectable({providedIn:'root'}) export class MovieService {
  constructor(private http:HttpClient) {}
  trending() { return this.http.get<TvMazeShow[]>('https://api.tvmaze.com/shows?page=1').pipe(map(x=>x.slice(0,24).map(toMovie))); }
  search(query:string) { return this.http.get<{show:TvMazeShow}[]>(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`).pipe(map(x=>x.map(v=>toMovie(v.show)))); }
  detail(id:string) { return this.http.get<TvMazeShow>(`https://api.tvmaze.com/shows/${id}`).pipe(map(toMovie)); }
}
