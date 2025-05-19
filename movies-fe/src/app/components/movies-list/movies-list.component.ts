import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  @Input({ required: true })
  movies!: any[];

  addMovie() {
    this.movies.push({
      title: 'Inception',
      releasedDate: new Date(),
      price: 99000,
      poster: '',
    });
  }

  deleteMovie(movie: any) {
    let index = this.movies.findIndex((m: any) => m.title === movie.title);
    this.movies.splice(index, 1);
  }
}
