import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from "./components/movies-list/movies-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  upcomingMovies: any;
  inTheaterMovies: any;

  constructor(){
    setTimeout(() => {
      this.upcomingMovies = [{
        title: 'Sonic 3',
        releasedDate: new Date(),
        price: 99000,
        poster: 'https://preview.redd.it/sonic-the-hedgehog-3-2024-poster-v0-vxcxhchro7gc1.jpeg?auto=webp&s=a12dcb870fbbe49518ce77e43fbf3a98f9d33865'
      },
      {
        title: 'Avengers Doomsday',
        releasedDate: new Date(),
        price: 99000,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGNiN2RlZTMtMTkyZC00YjkwLTgyY2QtMDg1ZDNhODQwNWM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
      }]

      this.inTheaterMovies = [{
        title: 'Avengers: End Game',
        releasedDate: new Date(),
        price: 150000,
        poster: 'https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg'
      },
      {
        title: 'Avengers Infinity War',
        releasedDate: new Date(),
        price: 150000,
        poster: 'https://play-lh.googleusercontent.com/m8oCdMmUY6qvQQmB1H6aVf1CX9CmMqQdMXD_QHk1NTV48nagvcXpkSTSLmUsfhyr_uM'
      }]
    }, 1000);
  }
}
