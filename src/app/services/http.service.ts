import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  curlEndpoint:string = "/api/php/util/curl.php"
  openAPIHost:string = "https://openapi.band.us";
  clientInfo = {"ClientID": "389546070", "ClientSecret":	"kij4FjyQxxWoNgp3I5i1Z7J0p27HREQg", "AccessToken": "ZQAAAfMbgUYGqQbow-3GyPRObjK4AxF7KWXPB_0qIjwMruleHVAxzWSOpHt7aQOdrxjuOxPKVuaRXIlKMInoOJOF_IK5-4hEcJlys8W1XqIKfov0"};
  parser = new DOMParser();
  constructor(private http: HttpClient) { }
  getBands() {
    let endpoint:string = this.openAPIHost + '/v2.1/bands';
    return this.http.get(this.curlEndpoint, {params: {"uri": endpoint + '?access_token=' + this.clientInfo.AccessToken}});
  }
}
