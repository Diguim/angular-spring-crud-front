import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { CoursesRoutingModule } from './app/courses/courses-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'courses' },
    {
        path: 'courses',
        loadChildren: () => import("./app/courses/courses.module").then(m => m.CoursesModule)
    }
];



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatToolbarModule, CoursesRoutingModule),
        provideAnimations(),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
