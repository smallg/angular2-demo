import {Directive, ElementRef, HostBinding, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[add-active-class]'
})
export class AddActiveClassDirective {

  @Input('add-active-class')
  set condition(newCondition: boolean) {
    console.log(newCondition)
    if (newCondition) {
      this.renderer.addClass(this.hostElement.nativeElement, 'active');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'inactive');
    }
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

}
