import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Band } from '../models/bands';
import { Root, Item } from 'src/app/models/posts';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  currentBand?: Band;
  locale: string = 'ko_KR';
  curlEndpoint: string = '/api/curl.php';
  openAPIHost: string = 'https://openapi.band.us';
  clientInfo = {
    ClientID: '389546070',
    ClientSecret: 'kij4FjyQxxWoNgp3I5i1Z7J0p27HREQg',
    AccessToken:
      'ZQAAAfMbgUYGqQbow-3GyPRObjK4AxF7KWXPB_0qIjwMruleHVAxzWSOpHt7aQOdrxjuOxPKVuaRXIlKMInoOJOF_IK5-4hEcJlys8W1XqIKfov0',
  };
  parser = new DOMParser();
  bandSelected: EventEmitter<Band> = new EventEmitter();
  constructor(private http: HttpClient) {}
  getBands() {
    let endpoint: string = this.openAPIHost + '/v2.1/bands';
    return this.http.get(this.curlEndpoint, {
      params: {
        uri: endpoint + '?access_token=' + this.clientInfo.AccessToken,
      },
    });
  }

  setCurrentBand(band: Band) {
    this.currentBand = band;
    this.bandSelected.emit(band);
  }

  getPosts(bandKey: string) {
    let endpoint: string = this.openAPIHost + '/v2/band/posts';
    return this.http.get(this.curlEndpoint, {
      params: {
        uri:
          endpoint +
          '?access_token=' +
          this.clientInfo.AccessToken +
          '&band_key=' +
          bandKey +
          '&locale=' +
          this.locale,
      },
    });
  }

  getPost(bandKey: string, postId: string) {
    let endpoint: string = this.openAPIHost + '/v2.1/band/post';
    let requri =
      endpoint +
      '?access_token=' +
      this.clientInfo.AccessToken +
      '&band_key=' +
      bandKey +
      '&post_key=' +
      postId;
    return this.http.get(this.curlEndpoint, { params: { uri: requri } });
  }

  getAlbums(bandKey: string) {
    let endpoint: string = this.openAPIHost + '/v2/band/albums';
    let requri =
      endpoint +
      '?access_token=' +
      this.clientInfo.AccessToken +
      '&band_key=' +
      bandKey;
    return this.http.get(this.curlEndpoint, { params: { uri: requri } });
  }

  getPhotos(bandKey: string, photo_album_key: string) {
    let endpoint: string = this.openAPIHost + '/v2/band/album/photos';
    let requri =
      endpoint +
      '?access_token=' +
      this.clientInfo.AccessToken +
      '&band_key=' +
      bandKey +
      '&photo_album_key=' +
      photo_album_key;
    return this.http.get(this.curlEndpoint, { params: { uri: requri } });
  }
}
