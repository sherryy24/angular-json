import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http : HttpClient) { }
  ngOnInit(): void {
      
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');

  }
  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }
  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');

  }
}
