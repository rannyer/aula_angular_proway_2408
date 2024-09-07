import { Routes } from '@angular/router';
import { ExemploAnimalComponent } from './components/exemplo-animal/exemplo-animal.component';
import { HomeComponent } from './components/home/home.component';
import { ListCardComponent } from './components/exemplo-card/list-card/list-card.component';
import { ListMusicaComponent } from './components/exercicio-musica/list-musica/list-musica.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'exemploAnimal',
        component: ExemploAnimalComponent
    },
    {
        path: 'listCard',
        component: ListCardComponent
    },
    {
        path: 'listMusica',
        component: ListMusicaComponent
    },
];
