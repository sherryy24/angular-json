import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:userId', component: PostsComponent },
  { path: 'comments/:postId', component: CommentsComponent },
  { path: 'todos/:userId', component: TodosComponent },
  { path: 'albums/:userId', component: AlbumsComponent },
  { path: 'photos/:albumId', component: PhotosComponent },




  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
