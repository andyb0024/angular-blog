import { BannerModule } from './../../cards/banner/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './sport.component';
import { CardsModule } from 'src/app/components/cards/cards/cards.module';


@NgModule({
  declarations: [
    SportComponent
  ],
  imports: [
    CommonModule,
    SportRoutingModule,
    CardsModule,
    BannerModule
  ]
})
export class SportModule { }
