import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-musica',
  standalone: true,
  imports: [MusicaComponent, CommonModule],
  templateUrl: './list-musica.component.html',
  styleUrl: './list-musica.component.css'
})
export class ListMusicaComponent {
  musicas = [
    {
      titulo:"Musica 01",
      genero:"Pop",
      artista:"Fulano",
      image:"https://placehold.co/600x400?text=Musica\n01&font=raleway"
    },
    {
      titulo:"Musica 02",
      genero:"Rock",
      artista:"Ciclano",
      image:"https://placehold.co/600x400?text=Musica\n02&font=raleway"
    },
    {
      titulo:"Musica 03",
      genero:"Sertanejo",
      artista:"Banda do Beltrano",
      image:"https://placehold.co/600x400?text=Musica\n03&font=raleway"
    },
    {
      titulo:"Musica 04",
      genero:"Pop",
      artista:"Fulano feat Cliclano",
      image:"https://placehold.co/600x400?text=Musica\n05&font=raleway"
    },
    {
      titulo:"Musica 05",
      genero:"Indie Rock",
      artista:"The sopranos",
      image:"https://placehold.co/600x400?text=Musica\n06&font=raleway"
    },
    {
      titulo:"Musica 06",
      genero:"Lofi",
      artista:"Reading Fulana",
      image:"https://placehold.co/600x400?text=Musica\n06&font=raleway"
    },
  ]
}
