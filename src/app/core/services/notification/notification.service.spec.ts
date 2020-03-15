import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { LangService } from '../lang/lang.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let langServiceSpy: any;
  let notificationsSpy: any;

  const message = 'Notification message.';
  const existingTranslationKey = 'category.existing-key';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NotificationsService,
          useValue: {
            create: (title: string, msg: string, type: NotificationType, opt: any) => ({
              type,
              content: msg,
              createdOn: new Date(),
            }),
          },
        },
        {
          provide: LangService,
          useValue: {
            getInstant: key => `translated_${key}`,
          },
        },
      ],
    });
    service = TestBed.inject(NotificationService);
    langServiceSpy = TestBed.inject(LangService);
    notificationsSpy = TestBed.inject(NotificationsService);
    spyOn(notificationsSpy, 'create').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud show info notification by default', () => {
    service.default(message);
    expect(notificationsSpy.create).toHaveBeenCalledWith(
      '',
      message,
      NotificationType.Info,
      jasmine.any(Object),
    );
  });

  it('should show info notification', () => {
    service.info(message);
    expect(notificationsSpy.create).toHaveBeenCalledWith(
      '',
      message,
      NotificationType.Info,
      jasmine.any(Object),
    );
  });

  it('should show success notification', () => {
    service.success(message);
    expect(notificationsSpy.create).toHaveBeenCalledWith(
      '',
      message,
      NotificationType.Success,
      jasmine.any(Object),
    );
  });

  it('should show error notification', () => {
    service.error(message);
    expect(notificationsSpy.create).toHaveBeenCalledWith(
      '',
      message,
      NotificationType.Error,
      jasmine.any(Object),
    );
  });

  it('should show warn notification of existing translated message', () => {
    spyOn(langServiceSpy, 'getInstant').and.callThrough();
    service.default(existingTranslationKey);
    expect(langServiceSpy.getInstant).toHaveBeenCalledWith(
      existingTranslationKey,
      {},
      existingTranslationKey,
    );
  });
});
