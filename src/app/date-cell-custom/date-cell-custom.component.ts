import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-cell-custom',
  templateUrl: './date-cell-custom.component.html',
  styleUrls: ['./date-cell-custom.component.css']
})
export class DateCellCustomComponent implements OnInit {

  data: any;
  constructor() { }

  agInit(params) {
    this.data = params.value;
  }

  ngOnInit() {
  }

}
