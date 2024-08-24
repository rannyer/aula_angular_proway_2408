import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/exemplo-card/card/card.component';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from "./components/exemplo-card/list-card/list-card.component";
import { ListMusicaComponent } from "./components/exercicio-musica/list-musica/list-musica.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, ListCardComponent, ListMusicaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abc';
 
  nomes = ["Pedro","Sylvana", "Jaina","Anduim","José","Maria"]
  filmes = ["Filme 1","Filme 2", "Filme 3","Filme 4"]
  frutas = ["Mamão","Maçã","Manga","Maracujá"]

  url = "https://pbs.twimg.com/media/CsUzcXqWYAARYZm.jpg"

  rodarAlerta(){
    if(this.url == "https://pbs.twimg.com/media/CsUzcXqWYAARYZm.jpg"){
      this.url = "https://pbs.twimg.com/media/EjNC9LJXsAA87Dh?format=jpg&name=large"
    }else{
      this.url = "https://pbs.twimg.com/media/CsUzcXqWYAARYZm.jpg"
    }
  }
}
