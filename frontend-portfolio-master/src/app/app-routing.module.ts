import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactmeComponent} from './contactme/contactme.component';
import {WorkComponent} from './work/work.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BlogpostComponent} from './blogpost/blogpost.component';


const routes: Routes = [
  {path: 'portfolio' , component: PortfolioComponent},
  {
    path: 'contactme', component: ContactmeComponent},
  { path: 'work' , component: WorkComponent} ,
  { path: 'header', component: HeaderComponent},
  { path: 'blogpost', component: BlogpostComponent}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
