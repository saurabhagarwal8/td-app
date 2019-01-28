import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import{AlertController} from'ionic-angular';

/**
 * Generated class for the RecformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recform',
  templateUrl: 'recform.html',
})
export class RecformPage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecformPage');
  }

  submit() {
    let alert = this.alertCtrl.create({
      title: 'Registration Successful!',
      subTitle: 'Thank You for showing interest in Think-Digital.',
      buttons : ['OK']
    });
    alert.present();
  }

}
