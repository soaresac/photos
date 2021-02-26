import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  isShowing = false;

  toggle() { 
      this.isShowing = !this.isShowing;
  }

}
