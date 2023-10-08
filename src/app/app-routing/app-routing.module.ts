import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { CatalogoComponent } from '../pages/catalogo/catalogo.component';
import { NosotrosComponent } from '../pages/nosotros/nosotros.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { AutodetallesComponent } from '../pages/autodetalles/autodetalles.component';
import { AddAutosComponent } from '../pages/add-autos/add-autos.component';
import { ListaAutosAdmComponent } from '../pages/lista-autos-adm/lista-autos-adm.component';
import { EditAutosComponent } from '../pages/edit-autos/edit-autos.component';

const router:Routes=[
  { path: '', component: InicioComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'autos/:marca/:modelo', component: CatalogoComponent },
  { path: 'autos/:marca', component: CatalogoComponent },
  { path: 'auto/:id', component: AutodetallesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'add', component: AddAutosComponent },
  { path: 'edit/:id', component: EditAutosComponent },
  { path: 'admi', component: ListaAutosAdmComponent },
{path:"",redirectTo:"/index",pathMatch:"full"},
{path:"**",component:NopagefoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
