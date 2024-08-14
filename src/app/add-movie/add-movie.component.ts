import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  constructor(private httpClient:HttpClient){}

  student = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    age: new FormControl(),
    dept: new FormControl()
  });

  handleSubmit() {
    const url = "http://localhost:8080/api/v1/movie/saveMovie"
    console.log(this.student.value);
    this.httpClient.post(url,this.student.value).subscribe((response)=>{
      console.log(response);
    },error=> {
      console.log("error for adding student" + error);
    })
  }
}
