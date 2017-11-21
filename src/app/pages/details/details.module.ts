import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: DetailsComponent,
    },
    {
      path: ':id',
      component: DetailsComponent,
    }])
  ],
  declarations: [ DetailsComponent ],
  exports: [ RouterModule ]
})
export class DetailsModule { }
