import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // vetor
  vetor:Produto[] = [];

  // visibilidade dos botões
  btnCadastrar:boolean = true;

  // objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  // construtor
  constructor(private servico:ProdutoService){}

  // inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  // metodo para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});

  }

  // metodo para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    });
  }

  // metodo para selecionar um produtor especifico
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id : this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });
    this.btnCadastrar = false;
  }

  // metodo para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      // alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      // limpar o formulário
      this.formulario.reset();

      // visibilidade dos botões
      this.btnCadastrar = true;

    });
  }

  // metodo para remover produtos
  remover(){
    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {
      // obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      })

      // remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      // limpar formulario
      this.formulario.reset();

      // visibilidade dos botoes
      this.btnCadastrar = true;

    });
  }

}
