import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BteacherPageRoutingModule } from './bteacher-routing.module';

import { BteacherPage } from './bteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BteacherPageRoutingModule
  ],
  declarations: [BteacherPage]
})
export class BteacherPageModule {}
