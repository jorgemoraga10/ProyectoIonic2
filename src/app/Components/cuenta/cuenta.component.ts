import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})


export class CuentaComponent implements OnInit {


  user:any;


  constructor( private router: Router, private userData: UserDataService ) {}

  ngOnInit() {}



  async ionViewWillEnter(){
    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { nombre }  = users.filter( u => u.active === true )[0]    //busco al que este activo

    this.user = nombre; 
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
