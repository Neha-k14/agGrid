import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllModules } from "@ag-grid-enterprise/all-modules";
// import { AllModules } from "@ag-grid-community/all-modules"
import { ImgCellCustomComponent } from './img-cell-custom/img-cell-custom.component';
import { DateCellCustomComponent } from './date-cell-custom/date-cell-custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private gridApi;
  private gridColumnApi;
  public modules = AllModules;

  private columnDefs;
  private getRes;
  private resdata = [];
  private rowHeight;
  private rowSelection;
  private frameworkComponents;
  private statusBar;
  private defaultColDef;


  data: any = [{
    items: null

  }]

  constructor(private http: HttpClient) {

    //columns headers

    this.columnDefs = [
      {
        headerName: "",
        field: "checkbox",
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        width: 30,
        menuTabs: []
      },
      {
        headerName: "",
        field: "image",
        cellRendererFramework: ImgCellCustomComponent,
        width: 210,
        menuTabs: []
      },
      {
        headerName: "Published on",
        field: "publishedon",
        cellRendererFramework: DateCellCustomComponent,
        width: 200,
        menuTabs: []
      },
      {
        headerName: "Video Title",
        field: "videotitle",
        width: 320,
        menuTabs: []

      },
      {
        headerName: "Description",
        field: "description",
        width: 350,
        cellStyle: { "white-space": "normal" },
        menuTabs: []
      }
    ];

    this.defaultColDef = {
      resizable: true,
      width: 100
    };
    this.rowSelection = "multiple";

    this.statusBar = {
      statusPanels: [
        {
          statusPanel: "agTotalAndFilteredRowCountComponent",
          align: "left"
        },
        {
          statusPanel: "agTotalRowCountComponent",
          align: "center"
        },
        { statusPanel: "agFilteredRowCountComponent" },
        { statusPanel: "agSelectedRowCountComponent" },
        { statusPanel: "agAggregationComponent" }
      ]
    };

    this.rowHeight = 120;

  }

  //resize column height
  onColumnResized() {
    this.gridApi.resetRowHeights();
  }

  //toggle for checkbox 
  toggleselection() {

    if (this.gridColumnApi.getColumn("checkbox").visible == true) {
      this.gridColumnApi.setColumnVisible('checkbox', false);
    } else {
      this.gridColumnApi.setColumnVisible('checkbox', true);
    }
  }

  //grid ready function
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john').subscribe(data => {
      this.data = data;
      for (var i = 0; i < this.data.items.length; i++) {
        this.getRes = {
          "image": this.data.items[i].snippet.thumbnails.default.url,
          "publishedon": this.data.items[i].snippet.publishedAt,
          "videotitle": "https://www.youtube.com/watch?v=" + this.data.items[i].id.videoId,
          "description": this.data.items[i].snippet.description
        };
        this.resdata.push(this.getRes);
      }

      params.api.setRowData(this.resdata);
    });
  }

  //context menu
  getContextMenuItems(params) {

    if (params.column.getId() == "videotitle") {
      var result = ["copy", "copyWithHeaders"];
    }

    return result;
  }
}
