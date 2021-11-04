import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
 

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})


export class RutaPage implements OnInit {


  ori:any;
  dest:any;
  user: any;

  constructor(private activateroute: ActivatedRoute, private router: Router, ) { 

        //aqui llamo a los datos que obtuve de la navegacion anterior
        this.activateroute.queryParams.subscribe( params =>{

          if( this.router.getCurrentNavigation().extras.state ) {
            this.ori   = this.router.getCurrentNavigation().extras.state.ori;
            this.dest  = this.router.getCurrentNavigation().extras.state.dest;
          };
        });
  }

  ngOnInit() {}


  volver(){
    this.router.navigate(['/home/viaje'])
  }


  opina(){
    this.router.navigate(['/opinions'] )
  }


}
