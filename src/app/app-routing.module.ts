import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMovieComponent } from './components/post-movie/post-movie.component';
import { GetAllMoviesComponent } from './components/get-all-movies/get-all-movies.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

const routes: Routes = [
  {path:"post-movie", component:PostMovieComponent},
  {path:"update-movie", component:UpdateMovieComponent},
  {path:"get-all-movies", component:GetAllMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }