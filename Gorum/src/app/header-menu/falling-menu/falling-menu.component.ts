import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-falling-menu',
  templateUrl: './falling-menu.component.html',
  styleUrls: ['./falling-menu.component.css']
})
export class FallingMenuComponent implements OnInit {
  showMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
