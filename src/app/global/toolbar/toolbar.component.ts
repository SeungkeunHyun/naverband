import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private http: HttpService) {
    
  }
  items: MenuItem[] = [];
  ngOnInit() {
    this.http.getBands().subscribe(c=> {
      console.log("bands", c);
    });
    this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ];
  }
}
