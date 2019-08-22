import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './components/components.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.services';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ComponentsComponent,
    UsersComponent,
    FooterComponent,
    HeaderComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class AppModule { }
