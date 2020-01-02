import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging/messaging.module';



const firebaseConfig = {
  apiKey: "AIzaSyBS8HV90wlcGQiyLthlx11TUZEZMYsU8bo",
  authDomain: "notification-5f1a4.firebaseapp.com",
  databaseURL: "https://notification-5f1a4.firebaseio.com",
  projectId: "notification-5f1a4",
  storageBucket: "notification-5f1a4.appspot.com",
  messagingSenderId: "455760488717",
  appId: "1:455760488717:web:ecf55dc21afcd630062844",
  measurementId: "G-ZGP6TF4V7P"
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
