import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';

@Directive({
  selector: '[customTooltipTrigger]',
})
export class CustomTooltipTriggerDirective {
  constructor() {}

  @Input('customTooltipTrigger') tooltip: CustomTooltipComponent;

  @HostListener('click', ['$event']) onClick(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.toggleTooltip();
  }

  toggleTooltip() {
    if (this.tooltip) {
      this.tooltip.toggleTooltip();
    }
  }
}
