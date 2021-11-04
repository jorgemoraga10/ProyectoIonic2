import { Injectable } from '@angular/core';
import  {  HttpClient,  HttpHeaders,  HttpErrorResponse  }  from  '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})


export class UserApiService {

  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' :'*' 
    }) 
  }

  user: {
    userId: null,
    nombre: null,
    email: null,
    ative: false
  }

  // Se establece la base url del API a consumir 
  //apiURL = 'https://jsonplaceholder.typicode.com'; 
  apiURL = 'http://192.168.1.86:3000';     //Siempre Verificar la ip para que corra


  constructor( private http:HttpClient ) { }


  getUsuarios(): Observable<any> { 
    return this.http.get( this.apiURL+'/users' )
      .pipe( retry(3) ); 
  } 

  getUsuario( userId ): Observable<any> { 
    return this.http.get( this.apiURL+'/users/'+userId ) 
      .pipe( retry(3) ); 
  } 

  createUser( user ): Observable<any> { 
    return this.http.post(this.apiURL+'/users', user, this.httpOptions) 
      .pipe( retry(3) ); 
  } 

  updateUser( id, user ): Observable<any> {   
    return this.http.put(this.apiURL+'/users/'+id, user, this.httpOptions)
      .pipe( retry(3) ); 
  } 


  getActiveUser() : Observable<any> {
    return this.http.get( this.apiURL+'/users/?active=true')
      .pipe( retry(3) )
  };

}
