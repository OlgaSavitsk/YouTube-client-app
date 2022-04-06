import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { BORDER_COLOR, DateParam } from 'src/app/app.constants';

@Directive({
  selector: '[appHighlight]',
})
export default class HighlightDirective implements OnInit {
  @Input('appHighlight') public diffDay!: number;
  color?: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'border-bottom-color',
      this.setStatusDate(),
    );
  }

  setStatusDate(): string {
    const days7 = DateParam.MS * DateParam.NUMBER_DAYS_WEEK;
    const months6 = DateParam.MS * DateParam.NUMBER_DAYS_MONTH * DateParam.SIX_MONTHS;
    const month1 = DateParam.MS * DateParam.NUMBER_DAYS_MONTH;
    if (this.diffDay < days7) {
      this.color = BORDER_COLOR.blue;
    } else if (this.diffDay < month1) {
      this.color = BORDER_COLOR.green;
    } else if (this.diffDay > month1 && this.diffDay < months6) {
      this.color = BORDER_COLOR.yellow;
    } else {
      this.color = BORDER_COLOR.red;
    }
    return this.color;
  }
}
