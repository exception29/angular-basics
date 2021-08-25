import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FchildcomponentComponent } from './firstcomponent/fchildcomponent/fchildcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';
import { CustompipecomponentPipe } from './custompipecomponent.pipe';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { EmplistComponent } from './emplist/emplist.component';

import { EmphttpComponent } from './emphttp/emphttp.component';
import { APIserviceComponent } from './apiservice/apiservice.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingcompComponent } from './routingcomp/routingcomp.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { ReachoutComponent } from './reachout/reachout.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    FchildcomponentComponent,
    SecondcomponentComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    LoginComponent,
    DirectivesComponent,
    CustomdirectiveDirective,
    PipecomponentComponent,
    CustompipecomponentPipe,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    EmplistComponent,

    EmphttpComponent,
     APIserviceComponent,
     HomeComponent,
     AboutusComponent,
     ContactusComponent,
     RoutingcompComponent,
     ContactComponent,
     EmailComponent,
     ReachoutComponent,
     TemplatedrivenformComponent,
     ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
