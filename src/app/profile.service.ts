import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid='62882327';
  private clientsecret='';

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Maureen435';

  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?clientid=" + this.clientid + "&client_secret=")
    ;
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?clientid=" + this.clientid + "&client_secret=")
    ;
    
  }
}
