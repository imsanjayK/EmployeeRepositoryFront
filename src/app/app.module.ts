import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Forms module
import { FormsModule } from '@angular/forms';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Component
import { EmployeeCreateComponent } from './employee-create/employee-create.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
