import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { CardsModule } from 'src/app/components/cards/cards/cards.module';
import { BannerModule } from 'src/app/cards/banner/banner.module';


@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    CardsModule,
    BannerModule,
  ]
})
export class BusinessModule { }
