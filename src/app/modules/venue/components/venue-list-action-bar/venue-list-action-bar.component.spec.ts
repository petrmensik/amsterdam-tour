import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListActionBarComponent } from './venue-list-action-bar.component';

describe('VenueListActionBarComponent', () => {
  let component: VenueListActionBarComponent;
  let fixture: ComponentFixture<VenueListActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
