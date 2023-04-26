import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpService } from 'src/app/services/http.service';
import { Bands, Band } from 'src/app/models/bands';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private http: HttpService) {}
  currentBand?: Band;
  bands: Band[] = [];
  items: MenuItem[] = [];
  ngOnInit() {
    this.http.getBands().subscribe((c) => {
      let res: Bands = <any>c;
      this.bands = res.result_data.bands;
    });
    this.http.bandSelected.subscribe((b) => {
      this.currentBand = b;
      this.setMenu();
    });
  }

  setMenu() {
    this.items = [
      {
        label: '밴드',
        icon: 'pi pi-fw pi-book',
      },
      {
        label: '게시글',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/board'],
        queryParams: { band_key: this.currentBand?.band_key },
      },
      {
        label: '사진첩',
        icon: 'pi pi-fw pi-images',
        routerLink: ['/albums'],
        queryParams: { band_key: this.currentBand?.band_key },
      },
      {
        label: '일정',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['/calendar'],
        queryParams: { band_key: this.currentBand?.band_key },
      },
      {
        label: '멤버',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/members'],
        queryParams: { band_key: this.currentBand?.band_key },
      },
    ];
    console.log(this.items);
  }
  gotoBand() {
    console.log(this.currentBand);
    let bandKey: string = this.currentBand?.band_key!;
    this.http.setCurrentBand(this.currentBand!);
  }
}
