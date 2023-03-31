import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/bands';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})

export class ReadpostComponent implements OnInit {

  @Input() post?:any;
  constructor(private http:HttpService) {

  }

  ngOnInit(): void {
    
  }
}
  