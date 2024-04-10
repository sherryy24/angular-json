import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users ;
  



 
  constructor(private userService :UsersService){}

  ngOnInit(): void {
      
  
    this.userService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });

  }
}
