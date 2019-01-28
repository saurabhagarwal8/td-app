import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AlertController} from 'ionic-angular';
import{RecformPage} from '../recform/recform';
import{DomainsPage} from '../domains/domains';

/**
 * Generated class for the RecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rec',
  templateUrl: 'rec.html',
})
export class RecPage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }

 
  recf()
  {
    this.navCtrl.push(RecformPage);

  }
  dom()
  {
    this.navCtrl.push(DomainsPage);

  }

 

}
