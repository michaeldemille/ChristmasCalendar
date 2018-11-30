import {Component, OnInit} from '@angular/core';
import {Param} from '../../services/params/params.service';
import {PlaylistService} from '../../services/playlist/playlist.service';
import {ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {ScriptureModalComponent} from '../../components/scripture-modal/scripture-modal.component';
import {VideoComponent} from '../../components/video/video.component';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {


  data;
  title;
  story;
  index;
  routeSub;
  storyId;
  day;
  listen;
  scripture;
  scriptureText;
  imagine;
  subtitle;
  youtubeLink


  constructor(
      private params: Param,
      private plService: PlaylistService,
      private navCtrl: NavController,
      public route: ActivatedRoute,
      public modalCtrl: ModalController,
  ) {
      this.routeSub = this.route.params.subscribe(params => {
          this.storyId = params.storyId;
          console.log('this.storyId', this.storyId);
          this.index = this.storyId;
      })
  }

  ngOnInit() {
    // this.index = this.params.params;
    if (this.plService.playlist[this.index] && this.plService.playlist[this.index].title) this.day = this.plService.playlist[this.index].title;
    if (this.plService.pageContent[this.index] && this.plService.pageContent[this.index].title) this.title = this.plService.pageContent[this.index].title;
    if (this.plService.pageContent[this.index] && this.plService.pageContent[this.index].subtitle) this.subtitle = this.plService.pageContent[this.index].subtitle;
    if (this.plService.pageContent[this.index] && this.plService.pageContent[this.index].listen) this.listen = this.plService.pageContent[this.index].listen;
    if (this.plService.pageContent[this.index] && this.plService.pageContent[this.index].scripture) this.scripture = this.plService.pageContent[this.index].scripture;
    if (this.plService.scripture[this.index] && this.plService.scripture[this.index].text) this.scriptureText = this.plService.scripture[this.index].text;
    if (this.plService.youtube[this.index] && this.plService.youtube[this.index].link) this.youtubeLink = this.plService.youtube[this.index].link;
    if (this.plService.pageContent[this.index] && this.plService.pageContent[this.index].imagine) this.imagine = this.plService.pageContent[this.index].imagine;
    if (this.plService.stories[this.index] && this.plService.stories[this.index].story) this.story = this.plService.stories[this.index].story;
    console.log('this.index', this.index);
  }

    gotoPage() {
        console.log('hit goto page');
        this.navCtrl.navigateForward('/tabs/(home:home)', true, {});
    }

    async presentModal(type) {

      if (type == 'scripture') {
          const modal = await this.modalCtrl.create({
              component: ScriptureModalComponent,
              componentProps: {text: this.scriptureText},
              cssClass: 'modal-css'
          });
          return await modal.present();
      }
        if (type == 'music') {
            const modal = await this.modalCtrl.create({
                component: VideoComponent,
                componentProps: {link: this.youtubeLink},
                cssClass: 'modal-css'
            });
            return await modal.present();
        }

    }
}
