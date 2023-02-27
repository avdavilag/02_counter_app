import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public numero:number;
public  mensaje:string;

  constructor() {
    this.numero=0;
    this.mensaje='00';
  }
  up(){
this.numero=this.numero+1
this.mensaje=' '+this.numero;
  }

  down(){
    this.numero=this.numero-1;
    this.mensaje=' '+this.numero;
  }

}
