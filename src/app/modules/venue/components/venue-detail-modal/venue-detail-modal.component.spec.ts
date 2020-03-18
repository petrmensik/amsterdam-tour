import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailModalComponent } from './venue-detail-modal.component';
import { NgbActiveModal, NgbNav, NgbNavItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { LangService, GeoDistService, EventService, MomentService } from '@amst/core';
import { GetFullAddressMockPipe } from '@amst/testing';

describe('VenueDetailModalComponent', () => {
  let component: VenueDetailModalComponent;
  let fixture: ComponentFixture<VenueDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VenueDetailModalComponent,
        GetFullAddressMockPipe,
        NgbNav,
        NgbNavItem,
        NgbNavOutlet,
      ],
      providers: [
        {
          provide: NgbActiveModal,
          useValue: {
            dismiss: () => true,
          },
        },
        {
          provide: LangService,
          useValue: {
            getCurrentLocalization: () => 'en',
          },
        },
        {
          provide: GeoDistService,
          useValue: {
            getCoordinatesFromLocation: () => ({ lat: 1, lon: 0 }),
            getDistance: () => 500,
          },
        },
        {
          provide: EventService,
          useValue: {
            getAllEvents: () => [],
          },
        },
        {
          provide: MomentService,
          useValue: {
            parseDate: () => {},
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailModalComponent);
    component = fixture.componentInstance;
    component.venue = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
