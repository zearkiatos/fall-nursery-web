import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantModule } from './plant/plant.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
