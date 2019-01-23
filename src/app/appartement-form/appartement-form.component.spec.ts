import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementFormComponent } from './appartement-form.component';

describe('AppartementFormComponent', () => {
  let component: AppartementFormComponent;
  let fixture: ComponentFixture<AppartementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
