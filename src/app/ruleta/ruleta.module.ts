import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuletaPageRoutingModule } from './ruleta-routing.module';

import { RuletaPage } from './ruleta.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuletaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RuletaPage]
})
export class RuletaPageModule {}
