import { NgModule }           from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HeroRoutingModule }         from './hero-routing.module';
import { HeroComponent }       from './hero.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports: [ CommonModule, FormsModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent
    
  ]
})
export class HeroModule { }
