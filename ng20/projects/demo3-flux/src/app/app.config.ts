import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import es from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'es' },
    // {provide: DateService, useFactory: () => new DateService('dd/MM/yyyy') }
    // {provide: DateService, useExisting: DateService }
    // { provide: DateService, useClass: DateService }
    // DateService = provideIn: root en el servicio
  ]
};
