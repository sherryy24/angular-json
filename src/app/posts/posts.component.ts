import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  userId : number;

  posts;
  



 
  constructor(private userService :UsersService , private route : ActivatedRoute){}

  
      
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.userId = +params['userId'];
        // console.log(this.userId)
        this.userService.getPosts().subscribe(posts => {
          
          this.posts = Object.values(posts).filter((post: any) => post.userId === this.userId);
          console.log(this.posts);
        });
        
    })

   
  }
}