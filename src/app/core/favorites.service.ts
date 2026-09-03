import { Injectable, signal } from '@angular/core';
import { Movie } from './movie.service';
@Injectable({providedIn:'root'}) export class FavoritesService {
  private readonly key='moviebox-favorites';
  readonly movies=signal<Movie[]>(this.read());
  toggle(movie:Movie){const next=this.movies().some(x=>x.id===movie.id)?this.movies().filter(x=>x.id!==movie.id):[movie,...this.movies()];this.movies.set(next);localStorage.setItem(this.key,JSON.stringify(next));}
  has(id:number){return this.movies().some(x=>x.id===id)}
  private read():Movie[]{try{return JSON.parse(localStorage.getItem(this.key)||'[]')}catch{return []}}
}
