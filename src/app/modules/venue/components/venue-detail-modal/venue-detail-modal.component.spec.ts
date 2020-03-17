import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailModalComponent } from './venue-detail-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LangService } from '@amst/core';

describe('VenueDetailModalComponent', () => {
  let component: VenueDetailModalComponent;
  let fixture: ComponentFixture<VenueDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VenueDetailModalComponent],
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
