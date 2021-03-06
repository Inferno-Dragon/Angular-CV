import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [{
  path: 'contact-me',
  component: ContactMeComponent
},{
  path: '', 
  component: CvComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
