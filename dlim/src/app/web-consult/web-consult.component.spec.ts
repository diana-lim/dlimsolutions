import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebConsultComponent } from './web-consult.component';

describe('WebConsultComponent', () => {
  let component: WebConsultComponent;
  let fixture: ComponentFixture<WebConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
