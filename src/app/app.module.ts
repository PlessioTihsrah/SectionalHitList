import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  IgxButtonGroupModule,
  IgxIconModule,
  IgxCardModule,
  IgxProgressBarModule,
} from 'igniteui-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FetchingComponent } from './fetching/fetching.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    FooterComponent,
    SettingsComponent,
    FetchingComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IgxButtonGroupModule,
    IgxIconModule,
    IgxCardModule,
    IgxProgressBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
