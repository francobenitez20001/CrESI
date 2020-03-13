import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntaPageRoutingModule } from './pregunta-routing.module';

import { PreguntaPage } from './pregunta.page';

import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreguntaPage]
})
export class PreguntaPageModule {}
