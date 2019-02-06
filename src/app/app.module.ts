import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { InvitationComponent } from './invitation/invitation.component';
import { WeddingInfoComponent } from './wedding-info/wedding-info.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { RegistryInfoComponent } from './registry-info/registry-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'wedding', component: WeddingInfoComponent },
  { path: 'registry',      component: RegistryInfoComponent },
  { path: 'travel',      component: TravelInfoComponent },
  { path: 'invitation', component: InvitationComponent },
  { path: '',
    redirectTo: 'invitation',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    InvitationComponent,
    WeddingInfoComponent,
    TravelInfoComponent,
    RegistryInfoComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
