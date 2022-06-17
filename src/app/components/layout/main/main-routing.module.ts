import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [

  { path: '', component: MainComponent,
  children:[

    { path: 'post', loadChildren: () => import('../../../pages/posts/post/post.module').then(m => m.PostModule) },

    { path: 'post/:slug', loadChildren: () => import('../../../pages/posts/post-detail/post-detail.module').then(m => m.PostDetailModule) },
    { path: 'business', loadChildren: () => import('../../../pages/business/business.module').then(m => m.BusinessModule) },
    { path: 'sport', loadChildren: () => import('../../../pages/sport/sport.module').then(m => m.SportModule) },
    { path: 'politic', loadChildren: () => import('../../../pages/politic/politic.module').then(m => m.PoliticModule) },
    { path: 'culture', loadChildren: () => import('../../../pages/culture/culture.module').then(m => m.CultureModule) },
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
