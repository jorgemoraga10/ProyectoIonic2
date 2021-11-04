import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, }  from '@angular/router';

import { ToastController } from '@ionic/angular';
import { UserDataService } from '../services/user-data.service';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})


export class PruebaGuard implements CanActivate {

  user: any;
  users: Usuario[] = [];
  pass: any;
  usuario: any;

  constructor(private router:Router,
              private userData: UserDataService, 
              private activateroute: ActivatedRoute,
              public toastController: ToastController){
 
    //aqui llamo a los datos que obtuve del formulario del login
    this.activateroute.queryParams.subscribe( params =>{

      if( this.router.getCurrentNavigation().extras.state ) {
        this.user  = this.router.getCurrentNavigation().extras.state.user;
        this.pass  = this.router.getCurrentNavigation().extras.state.pass;
      };
    });
  }

  
  async toastError(){
    const toast = await this.toastController.create({

      message: 'Credenciales Incorrectas',
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }
  

  async canActivate(): Promise<boolean> {

    const users = await this.userData.loadUser()    //Obtengo los usuarios del storage    
    const activos   = users.filter( u => u.active === true )  //Filtro al usuario activo

    if( activos.length != 0 ){

      const { nombre, password } = activos[0];      //Capturo el nombre y password del usuario activo

      const valido = this.userData.existe( nombre , password );  //Metodo que autentica

      
      if( !valido ) {

        this.toastError();  //Que me muestre el toast antes de dar reload

        setTimeout(() => {

          this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });

        }, 1500);
        
        return false;
      }

    } else {

      this.toastError();  //Que me muestre el toast antes de dar reload

      setTimeout(() => {

        this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });

      }, 1500);
      
      return false;
    }
    
    return true;
  }
}


