import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
Property:any={
  'Id':1,
  'ImageSrc':'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'Name':'Birla House',
  'Type':'House1',
  'Price':500
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
