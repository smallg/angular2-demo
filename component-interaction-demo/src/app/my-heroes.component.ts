import { Component } from '@angular/core';
import {HEROES} from "./hero";

@Component({
  selector: 'my-heroes',
  templateUrl: './my-heroes.component.html',
})
export class MyHeroesComponent {
  heroes = HEROES;
  master = 'Master';
}
