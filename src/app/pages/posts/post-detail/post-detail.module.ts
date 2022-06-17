import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';
import { CardsModule } from 'src/app/components/cards/cards/cards.module';


@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    CardsModule
  ]
})
export class PostDetailModule { }
