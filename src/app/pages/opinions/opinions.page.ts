import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { OpinionsApiService } from 'src/app/services/opinions-api.service';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.page.html',
  styleUrls: ['./opinions.page.scss'],
})


export class OpinionsPage implements OnInit {

  user:any;
  posts: any;
  post: any = { userId: null, id: null, title: "", body: "" }
  ionicForm: FormGroup;
  isSubmitted = false;


  constructor( private api: OpinionsApiService,
               private router: Router,
               private userData: UserDataService,
               public formBuilder: FormBuilder) {

  }
  


  ngOnInit() {
    //Validaciones del form
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      opinion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }



  async ionViewWillEnter(){
    await this.getPosts();
  }

 

  async getPosts(){

    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { userId, nombre }  = users.filter( u => u.active === true )[0]    //busco al que este activo
    this.user = nombre; 

    this.api.getPostbyUserId( userId ).subscribe( data => {
      this.posts = data;
      this.posts.reverse();
    });
  }


  getPost( id ){
    this.api.getPost( id ).subscribe( data => this.post = data );
  }



  async guardarPost(){ 
    
    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { userId, nombre }  = users.filter( u => u.active === true )[0]    //busco al que este activo
    this.user = nombre; 
    
    this.post.userId = userId;

    this.api.createPost( this.post ).subscribe( () => {

      console.log('Creado Correctamente');
      this.getPosts();
      this.limpiar(); 

    }, ( error ) => console.log( 'Error'+ error ) )
  }

  
  deletePost( id ) {
    this.api.deletePost( id ).subscribe( () => {
      console.log('Post '+id+' Borrado Correctamente');
      this.getPosts();
    } , (error ) => console.log('Error' + error ))
  }
  
  
  updatePost( post ) {
    let nav: NavigationExtras={       //declaro elemento navigationExtras
      state: { post: post }
    };
    this.router.navigate(['/editable'], nav )
  }





  limpiar() {
    this.post.title = "";
    this.post.body = "";
  }
  
  volver(){
    this.router.navigate(['/ruta'] )
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
      this.guardarPost(); 
    }
  }



};