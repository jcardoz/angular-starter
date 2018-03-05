import {
  Component,
  OnInit
} from '@angular/core';

import { ResponseHandler } from './core/services/response-handler.service';
import { BookResponse } from './core/interfaces/response.interface';

import { Book } from './core/interfaces/response.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Starter Kit';
  books: (Book)[];
  constructor(private responseHandler: ResponseHandler) {}
  ngOnInit() {
    this.responseHandler.makeRequest('get', 'http://localhost:3004/getBooks').subscribe (
      (result: BookResponse) => {
        this.books = result.response.books;
      });
  }
}
