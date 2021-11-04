import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})



export class RestablecerPage implements OnInit {

  //Algunas declaraciones
  ionicForm: FormGroup;
  isSubmitted = false;
  user: any;

  constructor( private router: Router,
               public formBuilder: FormBuilder,
               public toastController: ToastController ) {

  }

  ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
          user: ['', [Validators.required, Validators.minLength(3)]],
        });
  }
  

  async presentToast1(){
    const toast = await this.toastController.create({

      message: 'Se mando un Email a su cuenta.',
      duration: 3000,
      position: "bottom"
    });
    toast.present()

  }


  siguiente(){
    this.router.navigate(['/login']);
    this.presentToast1();
  }



  //Metodos para controlar validaciones del form
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingrese todos los valores requeridos!!')
      return false;
    } else {
      this.siguiente();
    }
  }



}

