import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {

 public users :any;
 public WebApiData : any;


  /*public ShowUsers(){
    var request= this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    request.then((data) => this.users= data);
   }*/

   
  public AccessWebApi(){
    var request= this.http.get("https://localhost:7293/allNames").toPromise();
    request.then((data) => this.WebApiData= data);
   }
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
