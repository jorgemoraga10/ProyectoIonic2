import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  implements OnInit {

  dest:any;
  ori:any;


  constructor( private router: Router) {
    this.default();
  }
  

  ngOnInit() {}

  //Funcion que direciona a viaje y manda el nombre (este es el primer segment)
  default(){   
    this.router.navigate(['/home/viaje'] )
  }


  //Funcion que cambia de ruta al activar el evento del segment
  segmentChanged($event){
    let direccion = $event.detail.value;
    this.router.navigate([ 'home/'+ direccion ])
  }

}
