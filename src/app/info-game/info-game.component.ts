import { Component, Input, OnChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-info-game',
  templateUrl: 'info-game.component.html',
  styleUrls: ['info-game.component.css']
})

export class InfoGameComponent implements OnChanges {
  @Input() getFirstMove!: boolean;
  @Input() getAttempts: number = 0;
  @Input() getIsMatched: number = 0;
  @Input() getArrayLength: number = 0;
  @Output() sendLoseGame = new EventEmitter<boolean>();
  @Input() sendShowChooseLevel: any;

  @ViewChild('showTime') showTime!: ElementRef;

  seconds: number = 59;
  showSeconds: string = 'TIME: 01:00';
  countdown: any;

  constructor() { }

  ngOnChanges() {
    if(this.getFirstMove == true) {
      this.getFirstMove = false;

      this.countdown = setInterval(() => {
        if (this.getIsMatched == this.getArrayLength) {
          this.seconds++;
          clearInterval(this.countdown);
          document.getElementById('showTime')!.style.backgroundColor = 'lawngreen';
          document.getElementById('showTime')!.style.textAlign = 'center';
          document.getElementById('attempts')!.style.backgroundColor = 'lawngreen';
          document.getElementById('matched')!.style.backgroundColor = 'lawngreen';
          this.showSeconds = 'WINNER!';
        } else if (this.seconds == -1) {
          this.seconds++;
          clearInterval(this.countdown);
          document.getElementById('showTime')!.style.backgroundColor = 'red';
          document.getElementById('showTime')!.style.textAlign = 'center';
          document.getElementById('attempts')!.style.backgroundColor = 'red';
          document.getElementById('matched')!.style.backgroundColor = 'red';
          this.sendLoseGame.emit(true);
          this.showSeconds = 'LOSER!';
        } else if (this.seconds < 10) {
          this.showSeconds = 'TIME: 00:0' + this.seconds--;
        } else {
          this.showSeconds = 'TIME: 00:' + this.seconds--;
        }
      }, 1000);
    }
  }

  setShowChooseLevel() {
    this.sendShowChooseLevel.emit(true);
    clearInterval(this.countdown);
  }
}