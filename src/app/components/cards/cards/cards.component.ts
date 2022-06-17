import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
@Input() title:any
@Input() content:any
@Input() timestamp:any
@Input() image:any
@Input() category:any
@Input() slug:any
  constructor() { }

  ngOnInit(): void {
  }

}
