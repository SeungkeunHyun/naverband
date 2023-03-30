import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  curlEndpoint:string = "http://localhost/php/curl.php"
  openAPIHost:string = "https://openapi.band.us";
  clientInfo = {"ClientID": "389546070", "ClientSecret":	"kij4FjyQxxWoNgp3I5i1Z7J0p27HREQg", "AccessToken": "ZQAAAfMbgUYGqQbow-3GyPRObjKgHTTYf4DZOcOEOUexONUQAMn-obYTjlxTM7X2ph0SALEwITfB5BNRZySmZg0LNxuuYD5CsjhQa3gxJcauaH4S"};
  parser = new DOMParser();
  constructor(private http: HttpClient) { }
  getBands() {
    let endpoint:string = this.openAPIHost + '/v2.1/bands';
    return this.http.get(endpoint, {params: {"access_token": this.clientInfo.AccessToken}});
  }
}
