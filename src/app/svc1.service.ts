import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  public showFbNotifications(){
    return ["new Friend request",
    "Your post was liked by 1000 friends",
    "you friend posted for first time"];
  }
  public showtweet(){
    return ["follow me",
    "Your tweet was liked by 1000 followers",
    "you friend tweeted for first time"];
  }

  public getCommentsforPost(postId : number){

  }

  constructor() { }
}
