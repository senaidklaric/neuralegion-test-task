import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css'],
})
export class CustomTooltipComponent {
  constructor(private el: ElementRef) {}

  show: boolean = false;

  public toggleTooltip(): void {
    this.show = !this.show;
  }
  showTooltip(): void {
    this.show = true;
  }
  hideTooltip(): void {
    this.show = false;
  }
}
