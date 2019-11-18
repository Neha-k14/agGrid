import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { AgGridModule } from 'ag-grid-angular/main';*/
import { AgGridModule } from "@ag-grid-community/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgCellCustomComponent } from './img-cell-custom/img-cell-custom.component';
import { DateCellCustomComponent } from './date-cell-custom/date-cell-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCellCustomComponent,
    DateCellCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents()
  ],
  providers: [], entryComponents: [ImgCellCustomComponent, DateCellCustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
