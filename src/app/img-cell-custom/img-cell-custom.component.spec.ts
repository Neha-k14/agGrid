import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCellCustomComponent } from './img-cell-custom.component';

describe('ImgCellCustomComponent', () => {
  let component: ImgCellCustomComponent;
  let fixture: ComponentFixture<ImgCellCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCellCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
