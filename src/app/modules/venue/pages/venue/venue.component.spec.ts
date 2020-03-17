import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { EstablishmentService } from '@amst/core';
import { VenueComponent } from './venue.component';

describe('VenueComponent', () => {
  let component: VenueComponent;
  let fixture: ComponentFixture<VenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VenueComponent],
      providers: [
        {
          provide: EstablishmentService,
          useValue: {
            getAllEstablishments: () => of([]),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
