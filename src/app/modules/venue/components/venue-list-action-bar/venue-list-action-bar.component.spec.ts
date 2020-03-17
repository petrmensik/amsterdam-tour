import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { TranslateMockPipe } from '@amst/testing';
import { EstablishmentService } from '@amst/core';
import { VenueListActionBarComponent } from './venue-list-action-bar.component';

describe('VenueListActionBarComponent', () => {
  let component: VenueListActionBarComponent;
  let fixture: ComponentFixture<VenueListActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VenueListActionBarComponent,
        TranslateMockPipe,
      ],
      imports: [
        NgbModule,
      ],
      providers: [
        {
          provide: EstablishmentService,
          useValue: {
            getAvailableCities: () => of([]),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
