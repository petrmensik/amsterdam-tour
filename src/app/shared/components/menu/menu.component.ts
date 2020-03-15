import { Component, OnInit } from '@angular/core';
import { MENU_ITEM_LIST } from '@amst/shared';

@Component({
  selector: 'amst-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItemList = MENU_ITEM_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
