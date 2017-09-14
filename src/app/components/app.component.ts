import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HeroesComponent} from './heroes.component';
@Component({
  selector: 'my-app',
  templateUrl: '../../pages/app.component.html',
  styleUrls: [ '../../../assets/css/app.component.css' ],
})
export class AppComponent {
  title = 'ING Heroes';
}

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])
