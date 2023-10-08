import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import{ HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SiderbardComponent } from './shared/siderbard/siderbard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AutodetallesComponent } from './pages/autodetalles/autodetalles.component';


import { AddAutosComponent } from './pages/add-autos/add-autos.component';
import { ListaAutosAdmComponent } from './pages/lista-autos-adm/lista-autos-adm.component';
import { EditAutosComponent } from './pages/edit-autos/edit-autos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,

    BreadcrumbsComponent,
    SiderbardComponent,
    HeaderComponent,
    BannerComponent,


    InicioComponent,
    CatalogoComponent,
    NosotrosComponent,
    ContactoComponent,
    AutodetallesComponent,
     AddAutosComponent,
     ListaAutosAdmComponent,
     EditAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
