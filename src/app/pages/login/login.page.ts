
import { Component, OnInit }                  from '@angular/core';
import { NavigationExtras, Router }           from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingController }                  from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  //Algunas declaraciones
  ionicForm: FormGroup;
  isSubmitted = false;
  user:string;
  pass:string;

  constructor( private router:Router,
               public formBuilder: FormBuilder,
               public loadingCtrl: LoadingController,
               private userService: UserDataService) {     
  }


  ngOnInit() {
    //Validaciones del form
    this.ionicForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }



  //Funcion que direciona al home y almacena  el nombre y password
  siguiente(){
    this.router.navigate(['/home'])
  };


  //Funcion que direciona al restablecer
  restablecer(){
    this.router.navigate(['/restablecer'])
  }


  //Funcion que direciona al restablecer
  registro(){
    this.router.navigate(['/registro'])
  }
  




  //Metodos para controlar validaciones del form
  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingrese todos los valores requeridos!!');
      return false;
    } else {
      await this.verificar( this.user, this.pass );
      this.siguiente(); 
    }
  }




  //Autentico el usuario entregado, y activo su cuenta
  async verificar( user: string, contra: string ) {

    const existe = this.userService.existe( user, contra );

    if ( existe ){

      console.log(' el usuario si existe :)');
      await this.userService.userActivo( user );   //Este metodo activa el usuario 

    } else {

      console.log('el usuario no existe :(');
    }
  }
}

