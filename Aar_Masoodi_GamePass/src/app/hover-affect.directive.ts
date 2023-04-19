import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() styleType: string|undefined;
  private originalBorder: string;

  constructor(private elm: ElementRef) {
    this.originalBorder = elm.nativeElement.style.borderStyle;
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
   private changeBorder() {
    this.elm.nativeElement.style.border = "solid 2px black";
   }
   private restoreBorder() {
    this.elm.nativeElement.style.border = this.originalBorder;
   }

   @HostListener('mouseenter') onMouseEnter() {
    if (this.styleType == "underline") {
      this.underLineMe();
    }
    if (this.styleType == "bold") {
      this.boldMe();
    }
    if (this.styleType == "border") {
      this.changeBorder();
    }

    

   }
   @HostListener('mouseleave') onMouseLeave() {
    if(this.styleType == "underline") {
      this.removeDecoration();
    }
    if(this.styleType == "bold") {
      this.removeFontWeight();
    } 
    if (this.styleType == "border") {
      this.restoreBorder();
      }

   }
   

}
