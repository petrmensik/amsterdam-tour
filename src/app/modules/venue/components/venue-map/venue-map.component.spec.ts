import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateMockPipe } from '@amst/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { EstablishmentService } from '@amst/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VenueMapComponent } from './venue-map.component';

describe('VenueMapComponent', () => {
  let component: VenueMapComponent;
  let fixture: ComponentFixture<VenueMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VenueMapComponent,
        TranslateMockPipe,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
          },
        },
        {
          provide: EstablishmentService,
          useValue: {
            getEstablishmentById: () => {},
          },
        },
        {
          provide: NgbModal,
          useValue: {
            open: () => ({
              componentInstance: {},
              result: new Promise(resolve => resolve(true)),
            }),
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
