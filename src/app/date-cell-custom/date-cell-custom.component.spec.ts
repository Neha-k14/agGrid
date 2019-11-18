import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCellCustomComponent } from './date-cell-custom.component';

describe('DateCellCustomComponent', () => {
  let component: DateCellCustomComponent;
  let fixture: ComponentFixture<DateCellCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCellCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
