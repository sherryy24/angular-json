import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  albumId : number;

  photos;
  



 
  constructor(private userService :UsersService , private route : ActivatedRoute){}

  
      
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.albumId = +params['albumId'];
        // console.log(this.userId)
        this.userService.getPhotos().subscribe(photos => {
          
          this.photos = Object.values(photos).filter((photo: any) => photo.albumId === this.albumId);
          console.log(this.photos);
        });
        
    })

   
  }
}
