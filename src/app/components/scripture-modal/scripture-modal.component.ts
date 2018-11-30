import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-scripture-modal',
  templateUrl: './scripture-modal.component.html',
  styleUrls: ['./scripture-modal.component.scss']
})
export class ScriptureModalComponent implements OnInit {

  scriptureText;

  constructor(public navParams: NavParams,
              public modalCtrl: ModalController,
              ) { }

  ngOnInit() {
    if (this.navParams.get('text')) this.scriptureText = this.navParams.get('text');
      console.log('scriptureText', this.scriptureText);
  }

    closeModal() {
      this.modalCtrl.dismiss();
    }

}
