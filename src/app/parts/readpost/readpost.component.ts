import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Band } from 'src/app/models/bands';
import { Post } from 'src/app/models/post';
import { Photo } from 'src/app/models/posts';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})

export class ReadpostComponent implements OnInit, OnChanges {
  visible: boolean = false;
  responsiveOptions: any[] = [];
  @Input() post?: Post;
  constructor(private http: HttpService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.visible = this.post != null;
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
 