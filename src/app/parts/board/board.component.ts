import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/bands';
import { HttpService } from 'src/app/services/http.service';
import { Root, Item } from 'src/app/models/posts';
import { PostRoot } from 'src/app/models/post';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  band?: Band;
  posts?: Item[];
  post?: any;
  responsiveOptions: any[] = [];
  cols = [
    { field: 'author', header: '작성자' },
    { field: 'content', header: '내용' },
    { field: 'created_at', header: '작성일시' },
    { field: 'comment_count', header: '댓글' }
  ];


  constructor(private http: HttpService) {

  }

  getPost(post_key: string) {
    this.http.getPost(this.band?.band_key!, post_key).subscribe(p => {
      let root = <PostRoot>p;
      this.post = root.result_data.post;
      if(this.post.photo != null) {
        this.post.photos = Object.entries(this.post.photo).map(i => i[1]);
      }
      console.log(this.post);
    });
  }

  ngOnInit(): void {
    this.http.bandSelected.subscribe(b => {
      console.log("band", b);
      this.band = b;
      this.http.getPosts(b.band_key).subscribe(res => {
        let root = <Root>res;
        console.log(root);
        this.posts = root.result_data.items;
      });
    });
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
