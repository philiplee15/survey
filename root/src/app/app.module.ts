import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RootService } from './root.service';
import { CreateService } from './poll/create/create.service';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './poll/create/create.component';
import { ShowComponent } from './poll/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    CreateComponent,
    ShowComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [RootService, CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
