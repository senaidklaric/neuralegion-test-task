import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTooltipComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }

  show: boolean = false;

  obsTimer: Observable<number> = timer(0, 1000);
  formattedTime: string;

  public toggleTooltip(): void {
    this.show = !this.show;
    this.ref.detectChanges();
  }

  setClockInterval(): void {
    this.obsTimer.subscribe(() => {
      var current = new Date();
      this.formattedTime =
        current.getHours() +
        ':' +
        (current.getMinutes() >= 10
          ? current.getMinutes()
          : '0' + current.getMinutes()) +
        ':' +
        (current.getSeconds() >= 10
          ? current.getSeconds()
          : '0' + current.getSeconds());
      this.ref.detectChanges();
    });
  }
  ngOnInit(): void {
    this.setClockInterval();
  }
}
