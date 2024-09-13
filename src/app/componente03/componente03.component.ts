import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // variável de imagem
  imagem:string = 'assets/dia.jpeg';

  // função para alterar a imagem
  alteraImagem(){
    if(this.imagem === 'assets/dia.jpeg') {
      this.imagem = 'assets/noite.jpeg';
    } else {
      this.imagem = 'assets/dia.jpeg';
    }
  }

}
