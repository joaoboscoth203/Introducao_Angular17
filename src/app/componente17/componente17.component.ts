import { Component } from '@angular/core';

@Component({
  selector: 'app-componente17',
  standalone: true,
  imports: [],
  templateUrl: './componente17.component.html',
  styleUrl: './componente17.component.css'
})
export class Componente17Component {

  // variavel de nome
  nome:string = 'Ralf';

  // variavel media
  media:number = 0;

  // função para calcular a média
  calculo(n1:number, n2:number){
    return (n1+n2)/2;
  }

}
