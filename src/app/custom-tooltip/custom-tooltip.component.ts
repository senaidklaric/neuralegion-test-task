import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTooltipComponent implements OnInit {
  constructor(private el: ElementRef, private ref: ChangeDetectorRef) {
    this.ref.detach();
  }
  show: boolean = false;
  tooltipYPosition: number;

  obsTimer: Observable<number> = timer(0, 1000);
  formattedTime: string;

  public toggleTooltip(elemPosition: number): void {
    this.show = !this.show;

    //positioning tooltip vertically relative to the info icon
    //default value matches top element's
    this.tooltipYPosition = elemPosition;

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
