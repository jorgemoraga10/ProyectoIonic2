import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss'],
})


export class SoporteComponent implements OnInit {

  user: any


  constructor( private router: Router, private userData: UserDataService ) {}

  ngOnInit() {}



  async ionViewWillEnter(){

    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { nombre }  = users.filter( u => u.active === true )[0]    //busco al que este activo

    this.user = nombre; 
  }

  
  nosotros(){
    this.router.navigate(['/nosotros'] )
  }



  ayuda(){
    this.router.navigate(['/ver404']);
  }



  //Redireciona a la pagina principal y la recarga para borrar los datos
  async salir(){

    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { nombre }  = users.filter( u => u.active === true )[0]    //Busco al que este activo

    this.userData.userInactivo( nombre );   //Metodo para poner inactiva la cuenta
    
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    })
  }

}
