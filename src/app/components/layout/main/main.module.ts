import { BannerModule } from './../../../cards/banner/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BannerModule
  ]
})
export class MainModule { }
