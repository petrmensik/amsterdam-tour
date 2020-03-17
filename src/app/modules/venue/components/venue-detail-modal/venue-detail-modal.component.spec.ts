import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailModalComponent } from './venue-detail-modal.component';

describe('VenueDetailModalComponent', () => {
  let component: VenueDetailModalComponent;
  let fixture: ComponentFixture<VenueDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
