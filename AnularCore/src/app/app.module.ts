import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageUploadModule } from "angular2-image-upload";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { OrdersComponent } from './orders/orders.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailsComponent } from './clients/clientsDetails.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CustomersComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrdersComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    CarsComponent
    
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'cars/:id', component: CarsComponent},
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'clientDetails/:id', component: ClientsDetailsComponent },
      //{ path: 'cars/:id', component: ClientsDetailsComponent }
    ]),
    ModalModule.forRoot()
  ],
  providers: [JwtHelper, AuthGuard, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
