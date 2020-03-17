import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { compact, get } from 'lodash';
import { IEstablishment, LangService, IMedium } from '@amst/core';

@Component({
  selector: 'amst-venue-detail-modal',
  templateUrl: './venue-detail-modal.component.html',
  styleUrls: ['./venue-detail-modal.component.scss'],
})
export class VenueDetailModalComponent implements OnInit {
  @Input() venue: IEstablishment;
  venueImages: IMedium[] = [];
  private currentLocale: string;
  private readonly IMG_EXT = ['.jpg', '.jpeg', '.png'];

  constructor(
    private activeModal: NgbActiveModal,
    private langService: LangService,
  ) { }

  ngOnInit(): void {
    this.currentLocale = this.langService.getCurrentLocalization();
    this.venueImages = (this.venue.media || [])
      .filter(img => this.IMG_EXT.some(ext => img.url.endsWith(ext)))
      .sort((a: IMedium) => a.main ? -1 : 1);
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  urlLabel(url: string) {
    const urlName: string = url.replace(/http(s?):\/\//, '');
    return urlName.substring(0, urlName.indexOf('/') === -1 ? urlName.length : urlName.indexOf('/'));
  }

  get fullAddress(): string {
    return compact([
      this.venue.location?.adress,
      this.venue.location?.city,
    ]).join(', ');
  }

  get fullDescription(): string[] {
    return [
      get(this.venue, ['details', this.currentLocale, 'calendarsummary']),
      get(this.venue, ['details', this.currentLocale, 'shortdescription']),
    ].filter(desc => !!desc);
  }

  get longDescription(): string {
    return get(this.venue, ['details', this.currentLocale, 'longdescription'], '').replace(/h[1-6]>/g, 'h6>');
  }
}
