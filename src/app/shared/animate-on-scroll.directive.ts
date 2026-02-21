import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {

  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const isMobile = window.innerWidth < 851;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.renderer.addClass(this.el.nativeElement, 'animate');
          observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: isMobile ? 0.5 : 0.8
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
