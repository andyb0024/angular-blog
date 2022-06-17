import { BannerModule } from 'src/app/cards/banner/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CultureRoutingModule } from './culture-routing.module';
import { CultureComponent } from './culture.component';

import { CardsModule } from 'src/app/components/cards/cards/cards.module';




@NgModule({
  declarations: [
    CultureComponent,
  ],
  imports: [
    CommonModule,
    CultureRoutingModule,
    CardsModule,
    BannerModule
  ],

})
export class CultureModule { }
