import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  userId : number;

  albums;
  



 
  constructor(private userService :UsersService , private route : ActivatedRoute){}

  
      
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.userId = +params['userId'];
        // console.log(this.userId)
        this.userService.getAlbums().subscribe(albums => {
          
          this.albums = Object.values(albums).filter((album: any) => album.userId === this.userId);
          console.log(this.albums);
        });
        
    })

   
  }
}

