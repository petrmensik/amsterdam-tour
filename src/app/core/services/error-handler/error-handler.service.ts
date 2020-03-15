import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '../notification/notification.service';
import { LangService } from '../lang/lang.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {

  constructor(
    private notificationsService: NotificationService,
    private langService: LangService,
  ) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage: string;

    this.langService.get('general.error').subscribe(
      (generalError: string) => {
        if (error instanceof HttpErrorResponse) {
          displayMessage = this.getMessageByHttpCode(error.status);
        }
        this.notificationsService.error(displayMessage || generalError);
      },
    );

    super.handleError(error);
  }

  private getMessageByHttpCode(code: number): string {
    return this.langService.getInstant(`general.http-errors.${code}`, {}, '');
  }
}
