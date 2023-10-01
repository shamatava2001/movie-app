import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(): void {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe(movies => {
        this.trendingMovies = movies;
        console.log(this.trendingMovies);
      });
  }

  getTheatreMovies(): void {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe(movies => {
        this.theatreMovies = movies;
        console.log(this.theatreMovies);
      });
  }

  getPopularMovies(): void {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe(movies => {
        this.popularMovies = movies;
        console.log(this.popularMovies);
      });
  }
}
