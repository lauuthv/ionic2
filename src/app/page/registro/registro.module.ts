// registro.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistroPage,
      },
    ]),
    FormsModule, 
  ],
  declarations: [RegistroPage],
})
export class RegistroPageModule {}
