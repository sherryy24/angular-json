import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  userId : number;

 todos;
  



 
  constructor(private userService :UsersService , private route : ActivatedRoute){}

  
      
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.userId = +params['userId'];
        // console.log(this.userId)
        this.userService.getTodos().subscribe(todos => {
          
          this.todos = Object.values(todos).filter((todo: any) => todo.userId === this.userId);
          console.log(this.todos);
        });
        
    })

   
  }
}