import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../@core/services/dashboard.service'
import { MENU_ITEMS } from './pages-menu';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  menuItems: NbMenuItem = {
    title: 'Categories',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: []
  };

  /**
   *
   * @param dashboardService
   */
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    console.log(this.menu);
    this.dashboardService.getAllCategories().subscribe(res => {
      res.map(c => {
        this.menuItems.children.push(
          {
            // id: c.id,
            //description: c.description,
            link: 'dashboard?id='+c.id,
            title: c.name,
            selected: false
            // icon: 'content_paste',
            //class: '',
            //sline_height: '30px'
          });

      });
      console.log(this.menu);
      this.menu[1] = this.menuItems;
      this.dashboardService.setCategoryData(this.menuItems);
    }, err => {
      console.log(err);
    });
  }

  menu = MENU_ITEMS;
}
