import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {
  @Input() musica = 
    {
      titulo:"",
      genero:"",
      artista:"",
      image:""
    }
  
}
