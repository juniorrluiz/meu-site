import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {


  constructor(
    public rotas: Router
    ){}

    goToPage(pageName:string){
      this.rotas.navigate([`${pageName}`]);
    }

}
