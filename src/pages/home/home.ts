import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AlertController} from'ionic-angular';
import{AboutPage} from '../about/about';
import{ContactPage} from '../contact/contact';
import{RecPage} from '../rec/rec';
import{AchPage} from '../ach/ach';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  aboutus()
  {
    this.navCtrl.push(AboutPage);
  }
  contactus()
  {
    this.navCtrl.push(ContactPage);
  }
  rec17()
  {
    this.navCtrl.push(RecPage);
  }
  achi()
  {
    this.navCtrl.push(AchPage);
  }
}
