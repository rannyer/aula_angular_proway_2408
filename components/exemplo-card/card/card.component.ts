import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() produto = {
    nome: '',
    preco: 0,
    descricao: '',
    url: ''
  }
}

//Criar 2 novos componentes:
//1ºMusica: img, titulo, artista e genero

//2º lista-musica: Vai renderizar uma lsita de musicas usando
//ngFor de um vetor de musicas.

