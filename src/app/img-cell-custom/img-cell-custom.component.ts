import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-cell-custom',
  templateUrl: './img-cell-custom.component.html',
  styleUrls: ['./img-cell-custom.component.css']
})
export class ImgCellCustomComponent implements OnInit {

  data: any;
  constructor() { }

  agInit(params) {
    this.data = params.value;
  }

  ngOnInit() {
  }

}
