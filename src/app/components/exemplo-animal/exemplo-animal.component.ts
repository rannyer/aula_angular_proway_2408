import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exemplo-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exemplo-animal.component.html',
  styleUrl: './exemplo-animal.component.css'
})
export class ExemploAnimalComponent {
  animais:string[] = ["Cachorro","Gato","Pato","Lebre"]
  class:string = "teste"
  isActive:boolean = true

  onClick(){
    this.isActive = !this.isActive
    
  }

}
