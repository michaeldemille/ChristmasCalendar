import { Component, OnInit } from '@angular/core';
import { PlaylistService} from '../../services/playlist/playlist.service';
import {NavController} from '@ionic/angular';
import {Param} from '../../services/params/params.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  data;

  date = Date.now();

  MST = 25200000;

  isAvailable = [];

  constructor(
      private plService: PlaylistService,
      private navCtrl: NavController,
      private params: Param,
  ) {
  }

  ngOnInit() {
      this.data = this.plService.playlist;
      console.log('this.data', this.data);
      this.checkAvailabity();
  }

  checkAvailabity() {
      console.log('this.date', this.date);
      for (let i = 0; i < this.plService.timestamps.length; i++) {
          console.log('i', i);
          console.log('this.plService.timestamps[i]', this.plService.timestamps[i]);
          console.log('this.plService.timestamps[i] * 1000 + this.MST', this.plService.timestamps[i] * 1000 + this.MST);
          console.log('this.date > (this.plService.timestamps[i] * 1000 + this.MST)', this.date > (this.plService.timestamps[i] * 1000 + this.MST));
          if (this.date > (this.plService.timestamps[i] * 1000 + this.MST)) {
             this.isAvailable.push(true);
          } else this.isAvailable.push(false);
      }
      console.log('this.isAvailable', this.isAvailable);
  }

  gotoPage(card) {
      if (!this.isAvailable[card.index]) return;
      console.log('day timestamp', this.plService.timestamps[card.index]);
      console.log('this.date', this.date);
      console.log('hit goto page');
      this.params.params = card.index;
      this.navCtrl.navigateForward(`/tabs/(home:about/${card.index})`, true, {});
  }
}
