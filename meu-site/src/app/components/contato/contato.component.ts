import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {



  constructor(
    public rotas: Router
    ){}

    goToPage(pageName:string){
      this.rotas.navigate([`${pageName}`]);
    }

}
