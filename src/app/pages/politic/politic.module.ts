import { BannerModule } from './../../cards/banner/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticRoutingModule } from './politic-routing.module';
import { PoliticComponent } from './politic.component';
import { CardsModule } from 'src/app/components/cards/cards/cards.module';


@NgModule({
  declarations: [
    PoliticComponent

  ],
  imports: [
    CommonModule,
    PoliticRoutingModule,
    CardsModule,
    BannerModule
  ]
})
export class PoliticModule { }
