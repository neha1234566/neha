import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchSpaceXComponent } from './launch-space-x/launch-space-x.component';
import { LaunchSpaceXDetailsComponent } from './launch-space-x-details/launch-space-x-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchSpaceXComponent,
    LaunchSpaceXDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
