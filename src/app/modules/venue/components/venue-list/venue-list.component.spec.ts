import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListComponent } from './venue-list.component';
import { TranslateMockPipe } from '@amst/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EstablishmentService } from '@amst/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('VenueListComponent', () => {
  let component: VenueListComponent;
  let fixture: ComponentFixture<VenueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VenueListComponent,
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
