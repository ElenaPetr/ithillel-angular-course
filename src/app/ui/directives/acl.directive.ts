import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  public constructor(
    private _el: ElementRef
  ) {}

  @HostListener('click', ['$event'])
  public myClick(event: MouseEvent): void {
    console.log(event.clientX);
  }

  @HostListener('mouseenter', ['$event'])
  public hightlish(_event: MouseEvent): void {
    this._el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave', ['$event'])
  public deleteHighlight(_event: MouseEvent): void {
    this._el.nativeElement.style.backgroundColor = null;
  }

}
