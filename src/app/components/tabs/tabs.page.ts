import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    files = [
        {name: 'Christmas Bells', src: 'https://firebasestorage.googleapis.com/v0/b/rdward-21692.appspot.com/o/Christmas18%2F2002-01-0520-christmas-bells-words-and-music-192k-eng.mp3?alt=media&token=2015b813-956f-4639-8a05-0d2c0069df3c', order: 1},
        {name: 'Picture A Christmas', src: 'https://firebasestorage.googleapis.com/v0/b/rdward-21692.appspot.com/o/Christmas18%2F2002-01-0490-picture-a-christmas-words-and-music-192k-eng.mp3?alt=media&token=b6095ae7-93ce-4e68-9b5a-07eb9b5049c6', order: 2},
        {name: 'Hark The Herald Angels Sing', src: 'https://firebasestorage.googleapis.com/v0/b/rdward-21692.appspot.com/o/Christmas18%2F2001-01-2090-hark-the-herald-angels-sing-vocal-and-instrumental-192k-eng.mp3?alt=media&token=7a7878a2-8911-4813-a9f2-11c2c70fc6c3', order: 3},
        {name: 'Could I Hold The Baby', src: 'https://firebasestorage.googleapis.com/v0/b/rdward-21692.appspot.com/o/Christmas18%2FCould_I_Hold-PV.mp3?alt=media&token=c4d7e14b-0043-4f62-a68e-6ae2c4baf4cd', order: 4},
    ];

// Current index of the files array
    current = 0;

    // @State() currentSong;
    currentSong = this.files[this.current];

// Get the audio element
    playlistPlayer;
    isPlaying = false;

  constructor() {

  }

  ngOnInit() {
      this.initAudioPlayer();
  }

// function that will be call at the end of the previous
    next() {
        // Check for last media in the playlist
        console.log('this.files', this.files);
        if (this.files.length > 0 && this.current === this.files.length - 1) {
            this.current = 0;
        } else {
            this.current++;
        }

        // Change the audio element source
        console.log('this.current', this.current);
        this.playlistPlayer.src = this.files[this.current].src;
        this.currentSong = this.files[this.current];
        this.playlistPlayer.play();
    }

    previous() {
        // Check for last media in the playlist
        console.log('this.files', this.files);
        if (this.files.length > 0 && this.current === 0) {
            this.current = this.files.length - 1;
        } else {
            this.current--;
        }

        // Change the audio element source
        console.log('this.current', this.current);
        this.playlistPlayer.src = this.files[this.current].src;
        this.currentSong = this.files[this.current];
        this.playlistPlayer.play();
    }

    initAudioPlayer() {
        this.playlistPlayer = document.querySelector('#playlist audio');
        console.log('this.files', this.files);
// Check if the player is in the DOM
        if (this.playlistPlayer === null) {
            throw 'Playlist Player does not exists ...';
        } else {
            // Start the player
            this.playlistPlayer.src = this.files[this.current].src;
            this.currentSong = this.files[this.current];
            // Listen for the playback ended event, to play the next media
            this.playlistPlayer.addEventListener('ended', () => this.next(), false);
        }
    }

    // setAudio(file) {
    //     this.playlistPlayer.src = file.src;
    //     this.currentSong = file;
    //     this.current = file.order - 1;
    //     this.playlistPlayer.play();
    // }

  play() {
      console.log('hit play');
      if (this.playlistPlayer.paused === false) {
          this.playlistPlayer.pause();
          this.isPlaying = false;
      } else {
          this.playlistPlayer.play();
          this.isPlaying = true;
      }
  }

  back() {
      console.log('back hit');
      this.previous();
  }

  forward() {
      console.log('forward hit');
      this.next();
  }
}
