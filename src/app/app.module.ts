import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ContactMeFormComponent } from './components/contact-me-form/contact-me-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ContactMeComponent,
    ContactMeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
