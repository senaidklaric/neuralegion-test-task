import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';

@Directive({
  selector: '[customTooltipTrigger]',
})
export class CustomTooltipTriggerDirective {
  constructor() {}

  @Input('customTooltipTrigger') tooltip: CustomTooltipComponent;

  @HostListener('click', ['$event']) onClick(evt) {
    var elemPosition = evt.target.getBoundingClientRect();
    evt.stopPropagation();
    evt.preventDefault();
    this.tooltip.toggleTooltip(elemPosition.y);
  }
}
