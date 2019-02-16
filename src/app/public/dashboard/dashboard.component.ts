import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/module/menu/menu.module';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-system',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items = Menu;
  constructor(private menuService: NbMenuService) { }

  ngOnInit() {
  }

}
