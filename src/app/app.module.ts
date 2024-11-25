import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    providers: [],
    declarations: [

    ],
    bootstrap: [
      
    ]
  })
  export class AppModule { }
