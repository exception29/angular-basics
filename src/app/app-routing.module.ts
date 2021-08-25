import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { ReachoutComponent } from './reachout/reachout.component';


const routes: Routes = [
  {
    path: 'home',
   component:HomeComponent
  }, //no '/' required in path in .ts
  {
    path: 'aboutus',
     component:AboutusComponent
  },
  {
    path: 'contactus',
     component:ContactusComponent, children:[
                             {
                               path: 'contact', 
                               component:ContactComponent
                              },
                              {
                                path: 'email', 
                                component:EmailComponent
                              },
                              {
                                path: 'reachout', 
                                component:ReachoutComponent
                              }
                          ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
