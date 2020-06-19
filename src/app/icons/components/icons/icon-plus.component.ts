import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-plus',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconPlusComponent implements OnInit {

  public myIcon = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
