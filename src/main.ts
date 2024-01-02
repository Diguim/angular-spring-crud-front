import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatToolbarModule),
        provideAnimations(),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
