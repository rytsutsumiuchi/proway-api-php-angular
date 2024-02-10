import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //Vetor de cursos
  vetor: Curso[] = [];

  //Objeto da classe curso
  curso: Curso = {
    nomeCurso: '',
    valorCurso: 0
  }

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    //Ao iniciar o sustema, deverá listar os cursos
    this.selecao();
  }

  teste() {
    console.log(this.curso);
  }

  //Cadastro
  cadastro() {
    if(this.curso.nomeCurso == '') { return ;}
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        //Adicionando dados ao vetos
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualizar a listagem
        this.selecao();
      }
    )

  }

  //Selecao
  selecao() {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //Alterar
  alterar() {
    this.cursoService.atualizarCurso(this.curso).subscribe(
      (res) => {
        //Atualizar vetor
        this.vetor = res;

        //Limpar os valores do objeto
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualiza a listagem
        this.selecao();
      }
    )
  }

  //Remover
  remover() {
    this.cursoService.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;
      }
    )
  }

  

  //Selecionar curso específico
  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
