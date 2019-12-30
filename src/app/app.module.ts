import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AhorroComponent } from './products/ahorro/ahorro.component';
import {SrvAccountsService} from './Services/srv-accounts.service';
import { CrearCuentaComponent } from './products/ahorro/crear-cuenta.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AhorroComponent,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [SrvAccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
