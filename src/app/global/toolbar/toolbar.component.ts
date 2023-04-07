import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpService } from 'src/app/services/http.service';
import { Bands, Band } from 'src/app/models/bands';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private http: HttpService) {

  }
  currentBand?: Band;
  bands: Band[] = [];
  menus: any[] = [];
  ngOnInit() {
    this.http.getBands().subscribe(c => {
      let res: Bands = <any>c;
      this.bands = res.result_data.bands;
    });
    this.menus = [
      {
        label: '밴드',
        icon: 'pi pi-fw pi-book'
      },
      {
        label: '게시글',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: '사진첩',
        icon: 'pi pi-fw pi-images',
      },
      {
        label: '일정',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: '멤버',
        icon: 'pi pi-fw pi-users',
      }
    ];
  }
  gotoBand() {
    console.log(this.currentBand);
    let bandKey: string = this.currentBand?.band_key!;
    this.http.setCurrentBand(this.currentBand!);
  }
}
