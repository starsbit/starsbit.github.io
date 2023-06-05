import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnInit {
  @Input() duration!: number;
  @Input() label!: string;
  @Input() showMovingDots!: boolean;
  @Input() color = 'white';
  @Input() displaySeconds = true;
  @Output() countdownFinished = new EventEmitter<void>();

  countdown = 0;
  dots: string = '';

  constructor(private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.startCountdown();
    if (this.showMovingDots) {
      this.startMovingDots();
    }
  }

  startCountdown() {
    const targetTime = new Date().getTime() + this.duration;

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetTime - currentTime;

      this.countdown = Math.floor(timeRemaining / 1000); // Convert to seconds

      if (this.countdown <= 0) {
        this.countdown = 0;
        clearInterval(interval);
        this.countdownFinished.emit();
      }
      this.changeDetectionRef.detectChanges();
    }, 1000); // Update every second
  }

  startMovingDots() {
    setInterval(() => {
      this.dots = this.dots.length < 3 ? this.dots + '.' : '';
      this.changeDetectionRef.detectChanges();
    }, 800);
  }
}
