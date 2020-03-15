import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class LangService {

  constructor(private translate: TranslateService) { }

  isTranslationAvailable(key: string): boolean {
    return this.translate.instant(key, {}) !== key;
  }

  getInstant(key: string | string[], params?: any, fallback?: string): string {
    const translation = this.translate.instant(key, params);
    return !isEqual(translation, key) ? translation : this.getFallbackVal(fallback, key);
  }

  get(key: string | string[], params?: any, fallback?: string): Observable<string> {
    return this.translate.get(key, params).pipe(
      map((translation) => {
        return !isEqual(translation, key) ? translation : this.getFallbackVal(fallback, key);
      }),
    );
  }

  private getFallbackVal(fallback: string, key: string | string[]): string | string[] {
    return fallback === '' ? fallback : (fallback || key);
  }
}
