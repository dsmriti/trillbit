import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

import { CoupongeneratePage } from '../pages/coupongenerate/coupongenerate';


/**
 * Generated class for the CouponPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }
  movetogenerate(){
  this.navCtrl.push(CoupongeneratePage);
  }


}
