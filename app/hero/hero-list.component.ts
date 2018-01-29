import {
  Component,OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


import { Hero,
         HeroService } from './hero.service';

@Component({
  template: `
    <h3 myHighlight>Hero List</h3>
    <div *ngFor='let hero of heroes | async'>
      <a [style.background]="'lime'" routerLink="{{hero.id}}">{{hero.id}} - {{hero.name}}</a>
    </div>
    
   
  `,
  animations: [
      trigger('heroState', [
        state('inactive', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })),
        state('active',   style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
      ])
  ]
})
export class HeroListComponent implements OnInit {
  heroes: Promise<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}