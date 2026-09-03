import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FavoritesService } from './core/favorites.service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly favorites = inject(FavoritesService);
  readonly favoriteCount = computed(() => this.favorites.movies().length);
  readonly menuOpen = signal(false);
  closeMenu() { this.menuOpen.set(false); }
}
