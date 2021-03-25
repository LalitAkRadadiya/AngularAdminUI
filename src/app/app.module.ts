import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './sharedservice.service';

import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';
import { ShowCompanyComponent } from './show-company/show-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
export const environment = {
  production: true
};
if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    AddEditCompanyComponent,
    ShowCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
     ToastrModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
