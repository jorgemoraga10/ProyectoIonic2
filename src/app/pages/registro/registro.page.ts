import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})



export class RegistroPage implements OnInit {

  //Algunas declaraciones
  ionicForm: FormGroup;
  isSubmitted = false;
  user:string;
  pass:string;
  email: string;
  

  constructor( private router:Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private userData: UserDataService,
    public toastController: ToastController) { 

  }

  ngOnInit() {
      //Validaciones del form
      this.ionicForm = this.formBuilder.group({
        user: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      });
  }



  async toastRegistro(){
    const toast = await this.toastController.create({

      message: 'Usuario Creado Correctamente',
      duration: 3000,
      position: "bottom"
    });
    toast.present()
  }


  async toastExiste(){
    const toast = await this.toastController.create({

      message: 'Usuario Ya existe, Pruebe otro ',
      duration: 3000,
      position: "bottom"
    });
    toast.present()
  }



  siguiente(){
    this.router.navigate(['/login'])
    this.toastRegistro();
  }


  volver(){
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }



  //Metodo que guarda los valores ingresados en el local storage
  guardar(){
    if ( !this.userData.saveUser( this.user, this.pass, this.email, false ) ) {
      this.toastExiste();
    }  
  }







   //Metodos para controlar validaciones del form
   get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.ionicForm.valid) {
      console.log('Ingrese todos los valores requeridos!!');
      return false;

    } else {

      this.siguiente();
      this.guardar();
    }
  };


}
