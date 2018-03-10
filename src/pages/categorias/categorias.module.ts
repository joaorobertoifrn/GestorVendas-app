import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasPage } from './categorias';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    CategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasPage),
  ],
  providers: [
        PedidoService
      ]
})
export class CategoriasPageModule {}
