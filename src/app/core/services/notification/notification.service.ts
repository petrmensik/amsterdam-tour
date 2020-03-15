import { Injectable } from '@angular/core';
import { NotificationsService, NotificationType, Notification, Icons } from 'angular2-notifications';
import { LangService } from '../lang/lang.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  private readonly ICONS: Icons = {
    alert: '<span class="icon-info"></span>',
    error: '<span class="icon-notification"></span>',
    info: '<span class="icon-info"></span>',
    success: '<span class="icon-checkmark"></span>',
    warn: '<span class="icon-warning"></span>',
  };

  constructor(
    private notificationService: NotificationsService,
    private langService: LangService,
  ) { }

  default(message: string, customOptions = {}) {
    this.info(message, customOptions);
  }

  info(infoMessage: string, customOptions = {}) {
    this.show(infoMessage, NotificationType.Info, customOptions);
  }

  success(successMessage: string, customOptions = {}) {
    this.show(successMessage, NotificationType.Success, customOptions);
  }

  warn(warnMessage: string, customOptions = {}) {
    this.show(warnMessage, NotificationType.Warn, customOptions);
  }

  error(errorMessage: string, customOptions = {}) {
    this.show(errorMessage, NotificationType.Error, { ...customOptions, timeOut: 0 });
  }
  
  private show(message: string, type: NotificationType, customOptions: {[key: string]: any}) {
    const options = {
      icons: this.ICONS,
      ...customOptions,
    };
    const translatedMessage = this.getTranslation(message);
    this.notificationService.create('', translatedMessage, type, options);
  }

  private getTranslation(key: string): string {
    return (key.endsWith('.') || !key.includes('.')) ? key : this.langService.getInstant(key, {}, key);
  }
}
