import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {HeroesComponent } from './components/heroes/heroes.component';
import {HeroeComponent } from './components/heroe/heroe.component';
import {AboutComponent } from './components/about/about.component';
import {BusquedaComponent } from './components/busqueda/busqueda.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
