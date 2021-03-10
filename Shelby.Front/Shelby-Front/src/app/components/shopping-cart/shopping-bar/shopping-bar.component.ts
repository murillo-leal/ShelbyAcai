import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-bar',
  templateUrl: './shopping-bar.component.html',
  styleUrls: ['./shopping-bar.component.css']
})
export class ShoppingBarComponent implements OnInit {

  sizeChoice: string;
  
  sizes: string[] = ['300ml', '500ml', '700ml', '1L'];
  

  @Input() isAdditional: boolean;

  constructor() { }

  

  ngOnInit(): void {

  }

}
