import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  comments;
  postId;
  



 
  constructor(private userService :UsersService , private route : ActivatedRoute){}

  
      
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.postId = +params['postId'];
        // console.log(this.userId)
        this.userService.getComments().subscribe(comments => {
          
          this.comments = Object.values(comments).filter((comment: any) => comment.postId === this.postId);
          console.log(this.comments);
        });
        
    })

   
  }
}
