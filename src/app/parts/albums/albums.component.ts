import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { AlbumRoot, Album } from 'src/app/models/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums?: Album[];
  responsiveOptions?: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.http.bandSelected.subscribe((b) => {
      this.initAlbums({ params: b.band_key });
    });
    this.route.queryParams.subscribe((params) => {
      this.initAlbums(params);
    });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  initAlbums(params: any) {
    console.log('params', params);
    this.http.getAlbums(params['band_key']).subscribe((res) => {
      let response = <AlbumRoot>res;
      this.albums = response.result_data.items;
      console.log('albums', this.albums);
      this.albums.forEach((i) =>
        this.http
          .getPhotos(params['band_key'], i.photo_album_key)
          .subscribe((res) => {
            let response: any = res;
            i.photos = response.result_data.items;
          })
      );
    });
  }
}
