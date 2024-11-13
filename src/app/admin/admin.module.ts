import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    PerfilComponent,
    ProductoComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
