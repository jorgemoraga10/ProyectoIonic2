import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


import { Usuario } from '../interfaces/usuario';
import { UserApiService } from './user-api.service';


@Injectable({
  providedIn: 'root'
})


export class UserDataService {


  private data: Storage | null = null;
  private estado: Storage | null = null;
  users: Usuario[] = [];
  users2: Usuario[] = [];
  user: {
    userId: null,
    nombre: null,
    email: null,
    active: false
  }


  constructor(private storage: Storage, private api: UserApiService) {
    this.init();
    this.loadUser();
  }


  
  //Metodo para inicializar el storage
  async init() {
    const storage = await this.storage.create();
    this.data = storage;
  }
  
  //Metodo para cargar el usuario
  async loadUser() {
    const user = await this.storage.get('users');
    if ( user ){
      this.users=user; 
    }
    return this.users;
  }


  //Metodo que valida que exista el usuario en el storage
  existe(userName: string, pass: string) {
    const existe = this.users.find( u => u.nombre === userName && u.password === pass );
    if ( existe ){
      return true;
    }else {
      return false;
    }
  }


  
  //Me devuelve el id 
  getIdUser( userName: string ){
    const usuario = this.users.find( u => u.nombre === userName );
    return usuario.userId;
  }



  //Metodo para guardar el usuario en el storage y en la api
  saveUser(userName: string, pass: string, email: string, active: boolean ){

    const existe = this.users.find( u => u.nombre === userName || u.email === email );

    if( !existe ) {

      const userId = this.users.length;

      this.users.push( { userId: userId+1, nombre: userName, password: pass, email: email, active: active } );
      this.data.set( 'users',this.users );
      this.guardarUser( userId + 1 , userName, email, active );
      return true;
    } else {
      return false;
    }
  }

  //Metodo que hace post del user en la api
  guardarUser( userId, nombre , email, active){  
      this.api.createUser( { id: userId, nombre , email, active } ).subscribe( () => {
        console.log('Usuario Creado Correctamente');
      },
      ( error ) => console.log( 'Error'+ error )
      )
  }



  userActivo( userName ){

    const id = this.getIdUser( userName );

    let { nombre, email, password } = this.users.find( u => u.userId === id); 

    this.users.splice( id - 1 , 1, { userId: id, nombre: userName, password , email, active: true })
    this.data.set( 'users',this.users );
    
    const userActive = { id ,nombre, email, active: true };

    this.api.updateUser( id , userActive ).subscribe( () => {
      console.log('Cambio a usuario Activo' );
    });
  }


  userInactivo( userName ){

    const id = this.getIdUser( userName );  

    let { nombre, email, password } = this.users.find( u => u.userId === id );

    this.users.splice( id - 1, 1, { userId: id, nombre: userName, password , email, active: false }) 
    this.data.set( 'users',this.users );

    const userInactive = { id ,nombre, email, active: false };
    
    this.api.updateUser( id , userInactive ).subscribe( () => {
      console.log('Cambio a usuario Inactivo' );
    });
  }


}
