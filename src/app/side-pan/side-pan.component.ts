import { Component, OnInit ,Directive, ElementRef, Renderer2,HostListener} from '@angular/core';

@Component({
  selector: 'app-side-pan',
  templateUrl: './side-pan.component.html',
  styleUrls: ['./side-pan.component.css']
})
export class SidePanComponent implements OnInit {

  constructor(private renderer: Renderer2, private elem: ElementRef) { }
  Kps:string[]=['KP1','KP2','KP3','KP4'];
  linkmouseenter(el: Event)
  {
    if(el!=null)
    {
      //console.log("link entered");
      (el.target as HTMLElement).classList.add('active');
     // console.log('done');
    }
    
  }

  linkmouseleave(el: Event)
  {
    if(el!=null)
    {
      //console.log("link entered");
      (el.target as HTMLElement).classList.remove('active');
     // console.log('done');
    }
    
  }
  ngOnInit(): void {
    
  }
  mouseclick(el: Event){
    // you'll get your through 'elements' below code
    let elements = this.elem.nativeElement.querySelectorAll('.classsideitem');
    
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).classList.add('text-white');
      (el.target as HTMLElement).classList.remove('text-white');
    }
}

}
