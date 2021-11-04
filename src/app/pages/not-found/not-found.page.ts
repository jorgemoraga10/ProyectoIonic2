import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})


export class NotFoundPage implements OnInit {

  constructor(private router: Router, private userData: UserDataService) { }

  ngOnInit() {}
  

  //Redireciona a la pagina principal y la recarga para borrar los datos
  async volver(){

    const users = await this.userData.loadUser()        //cargo los users del storage
    const activo  = users.filter( u => u.active === true ) //busco al que este activo

    if ( activo.length !== 0 ){

      const { nombre } = activo[0];
      this.userData.userInactivo( nombre );   //metodo para poner inactiva la cuenta
      
      this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
      })

    } else {

      this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
      })
    }  
  }
}
