import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    youtubeLink = 'https://www.youtube.com/embed/';
    youtubeLinkId;

    trustedVideoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer,
              public navParams: NavParams,
              public modalCtrl: ModalController) { }

  async ngOnInit() {
      if (this.navParams.get('link')) this.youtubeLinkId = this.navParams.get('link');
      console.log('youtubeLinkId', this.youtubeLinkId);
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.youtubeLink + this.youtubeLinkId);
  }

    closeModal() {
        this.modalCtrl.dismiss();
    }

}
