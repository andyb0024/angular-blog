import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

import { CardsModule } from 'src/app/components/cards/cards/cards.module';



@NgModule({
  declarations: [
    PostComponent,



  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CardsModule
  ]
})
export class PostModule { }
