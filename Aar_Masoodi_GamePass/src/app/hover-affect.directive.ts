import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) {
   }


   @HostListener('mouseenter') onMouseEnter() {
    this.underLineMe();

   }
   @HostListener('mouseleave') onMouseLeave() {
      this.removeDecoration();

   }
   private underLineMe() {
    this.elm.nativeElement.style.textDecoration = "underline";
   }
   private removeDecoration() {
    this.elm.nativeElement.style.textDecoration = "none";
   }

}
