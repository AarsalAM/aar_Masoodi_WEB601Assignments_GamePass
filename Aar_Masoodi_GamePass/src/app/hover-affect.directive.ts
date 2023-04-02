import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() styleType: string|undefined;

  constructor(private elm: ElementRef) {
   }

   private underLineMe() {
    this.elm.nativeElement.style.textDecoration = "underline";
   }
   private boldMe() {
    this.elm.nativeElement.style.fontWeight = "bold";
   }
   private removeDecoration() {
    this.elm.nativeElement.style.textDecoration = "none";
   }
   private removeFontWeight() {
    this.elm.nativeElement.style.fontWeight = "normal";
   }

   @HostListener('mouseenter') onMouseEnter() {
    if (this.styleType == "underline") {
      this.underLineMe();
    }
    if (this.styleType == "bold") {
      this.boldMe();
    }

    

   }
   @HostListener('mouseleave') onMouseLeave() {
      this.removeDecoration();
      this.removeFontWeight();

   }
   

}
