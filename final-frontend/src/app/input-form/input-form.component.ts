import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8000/movie/';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  public movieName: string;
  public movieGenre: string;
  public movieRating: number;

  public apiResponse: {name: string, genre: string, rating: number};
  public apiError = '';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  clickHandler(){
    this.apiResponse = null;
    this.apiError = null;
    this.http.post(API_URL, {
      name : this.movieName,
      genre : this.movieGenre,
      rating : this.movieRating
    }).subscribe(
      (result: {name: string, genre: string, rating: number}) => {
        this.apiResponse = result;
      },
      error => {
        console.log(error);
        this.apiError = 'Error Submitting Form';
      }
    );
  }

}
