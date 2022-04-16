import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import HighlightDirective from './highlight.directive';

@Directive({
  selector: '[appHighlightButton]',
})
export default class HighlightButtonDirective implements OnInit {
  @Input('appHighlightButton') public diffDay!: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private highlightDirective: HighlightDirective,
  ) {}

  public ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.highlightDirective.setStatusDate(),
    );
  }
}
