import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { OpinionsApiService } from 'src/app/services/opinions-api.service';


@Component({
  selector: 'app-editable',
  templateUrl: './editable.page.html',
  styleUrls: ['./editable.page.scss'],
})



export class EditablePage implements OnInit {

  posts: any;
  post: any = { userId: null, id: null, title: "", body: "" }
  ionicForm: FormGroup;
  isSubmitted = false;


  constructor( private api: OpinionsApiService,
               private activateroute: ActivatedRoute,
               private router: Router,
               public formBuilder: FormBuilder) {

    //aqui llamo a los datos que obtuve de la navegacion anterior
    this.activateroute.queryParams.subscribe( params =>{

      if( this.router.getCurrentNavigation().extras.state ) {
        this.post  = this.router.getCurrentNavigation().extras.state.post;
      };
    });
  }



  ngOnInit() {
    //Validaciones del form
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      opinion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }




  updatePost( post ) {
    console.log( post );

    this.api.updatePost( this.post.id, post ).subscribe( () =>{
      console.log('Actualizado Correctamente');    
    }, (error ) => console.log('Error' + error ) );

    this.router.navigate(['/opinions'])
  }


  limpiar() {
    this.post.title = "";
    this.post.body = "";
  }

  volver(){
    this.router.navigate(['/opinions'] )
  }





  
  //Metodos para controlar validaciones del form
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm( post ) {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingrese todos los valores requeridos!!');
      return false;
    } else {
      this.updatePost(post); 
    }
  }

}
