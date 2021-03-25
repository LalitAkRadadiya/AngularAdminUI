import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './sharedservice.service';

import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';
export const environment = {
  production: true
};
if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    AddEditCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
