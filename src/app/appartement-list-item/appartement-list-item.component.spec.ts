import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementListItemComponent } from './appartement-list-item.component';

describe('AppartementListItemComponent', () => {
  let component: AppartementListItemComponent;
  let fixture: ComponentFixture<AppartementListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
