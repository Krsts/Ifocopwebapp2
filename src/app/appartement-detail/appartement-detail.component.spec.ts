import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementDetailComponent } from './appartement-detail.component';

describe('AppartementDetailComponent', () => {
  let component: AppartementDetailComponent;
  let fixture: ComponentFixture<AppartementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
