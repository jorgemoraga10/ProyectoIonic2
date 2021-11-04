import { Injectable } from '@angular/core';
import  {  HttpClient,  HttpHeaders,  HttpErrorResponse  }  from  '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})


export class OpinionsApiService {

  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' :'*' 
    }) 
  }

  // user: {
  //   userId: null,
  //   nombre: null,
  //   email: null
  // }

  // Se establece la base url del API a consumir 
  //apiURL = 'https://jsonplaceholder.typicode.com'; 
  apiURL = 'http://192.168.1.86:3000';     //Siempre Verificar la ip para que corra


  constructor( private http:HttpClient ) { }


  //METODOS PARA EL POSTEO DE LA OPINION DEL VIAJE XD
  getPosts(): Observable<any> { 
    return this.http.get(this.apiURL+'/posts/')
      .pipe( retry(3) ); 
  }
  
  
  getPostbyUserId( userId ): Observable<any> {
    return this.http.get(this.apiURL+'/posts/?userId='+userId)
    .pipe( retry(3) ); 
  }



  getPost( id ): Observable<any> { 
    return this.http.get(this.apiURL+'/posts/'+id)
      .pipe( retry(3) ); 
  }


  createPost( post ): Observable<any> { 
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions) 
      .pipe( retry(3) ); 
  } 


  updatePost( id, post ): Observable<any> { 
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions)
      .pipe( retry(3) ); 
  } 

  deletePost( id ): Observable<any> { 
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  } 

}
