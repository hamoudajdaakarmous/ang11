import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  template: `
        <div #myDiv>Some text</div>
    `,
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  mouseDown1() {
  let a =(<HTMLInputElement>document.getElementById("lbl")).style.color='red';
   
  }
  
  mouseUp1() {
 let b = (<HTMLInputElement>document.getElementById("lbl")).style.color='blue';
  }


  big(img:any){
    img.style.height=120;
     img.style.width=120;

  }
  small(img:any)
  {
    img.style.height=90;
    img.style.width=90;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
