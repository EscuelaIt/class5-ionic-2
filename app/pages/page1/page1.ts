import { Component } from '@angular/core';
import { NavController, Alert, Loading } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  time;

  constructor(
    private navCtrl: NavController
  ) {
  }

  showLoad(){
    let load = Loading.create({
      content: 'Cargando'
    });
    this.navCtrl.present( load );
    setTimeout(()=>{
      load.dismiss();
    }, 5000);
  }

  showAlert(): void{
    let alert = Alert.create({
      title: 'Hola',
      subTitle: 'Hola',
      buttons: ['Aceptar']
    });
    this.navCtrl.present( alert );
  }

  showConfirm(): void{
    let confirm = Alert.create({
      title: 'realmente de eliminar',
      message: 'lorem ksjdhfksdf skjdfhsdf hjdsfkdsf jkdfh',
      buttons: [
        {
          text: 'Aceptar',
          handler: () =>{
            this.someRest();
          }
        },
        {
          text: 'Cancel',
          handler: () =>{
            console.log('cancel');
          }
        }
      ]
    });
    this.navCtrl.present( confirm );
  }

  someRest(){

  }
}
