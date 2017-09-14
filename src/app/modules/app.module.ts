import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from '../components/app.component';
import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroesComponent }     from '../components/heroes.component';
import { HeroService }         from '../services/hero.service';
import {DashboardComponent} from '../components/dashboard.component';
import { InMemoryDataService }  from '../services/in-memory-data.service';
import {HeroSearchComponent} from '../components/hero-search.component';


import { AppRoutingModule }     from '../modules/app-routing.module';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
