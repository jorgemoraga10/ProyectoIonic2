import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { UserDataService } from '../../services/user-data.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';



 declare var google;


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})


export class ViajeComponent implements OnInit {

  //Haciendo referencia al elemento HTML
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @ViewChild('map', { read: ElementRef }) mapRef: ElementRef;


  //Declaro unas variables
  ionicForm: FormGroup;
  isSubmitted = false;
  dest:any;
  ori:any;
  user:any;
  map: any;
  marker: any;


  constructor( private router: Router,
               private animationCtrl: AnimationController,
               public formBuilder: FormBuilder,
               private userData: UserDataService,
               public geolocation : Geolocation) {    
  }


  async ionViewWillEnter(){

    const users = await this.userData.loadUser()                      //cargo los users del storage
    const { nombre }  = users.filter( u => u.active === true )[0]    //busco al que este activo

    this.user = nombre; 

    await this.showMap();
  }



  ngOnInit() {
    //validaciones del form
    this.ionicForm = this.formBuilder.group({
      origen: ['', [Validators.required, Validators.minLength(3)]],
      destino: ['', [Validators.required, Validators.minLength(3)]],
    });
  };




  //Animacion de ionic/angular
  startLoad () {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(3)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    loadingAnimation.play();
    
    //Programo que dentro de 3 segundo rediriga a la ruta
    setTimeout(() => {
      this.siguiente();
    }, 3000);   
  };



  //Redireciona a la pagina principal y la recarga para borrar los datos
  async salir(){

    const users = await this.userData.loadUser()        //cargo los users del storage
    const { nombre }  = users.filter( u => u.active === true )[0] //busco al que este activo

    this.userData.userInactivo( nombre );   //metodo para poner inactiva la cuenta
    
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    })
  };



  //Funcion que direciona a ruta y manda origen y destino
  siguiente(){
    let nav: NavigationExtras={
      state: { ori: this.ori, dest: this.dest, user: this.user }
    };
    this.router.navigate(['/ruta'], nav );
  };





  //Metodos para controlar validaciones del form
  get errorControl() {
    return this.ionicForm.controls;
  };

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingrese todos los valores requeridos!!')
      return false;
    } else {
      this.startLoad();
    }
  };



  async showMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
      
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      console.log( ' las coord son:', resp.coords.latitude, resp.coords.longitude )
     
      const options = {
        center: latLng,
        zoom: 15,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map( this.mapRef.nativeElement, options );

      this.marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        draggable: true
      });

      this.marker.setPosition(latLng);

    } ).catch((error) => {
      console.log('Error getting location', error);
    });

  }



}
