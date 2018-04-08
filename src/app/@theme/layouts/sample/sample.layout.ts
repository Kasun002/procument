import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/withLatestFrom';

import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import { Subscription } from 'rxjs/Subscription';

import { StateService } from '../../../@core/data/state.service';
import { DashboardService } from '../../../@core/services/dashboard.service';
import { ListnerService } from '../../../@core/services/listner.service';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
    <nb-layout [center]="layout.id === 'center-column'" (scroll)="onElementScroll($event)" windowMode>
      <nb-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [right]="sidebar.id === 'right'">
        <nb-sidebar-header>
          <a href="#" class="btn btn-hero-success main-btn" style="background: red;">
            <i class="ion nb-grid-a"></i> <span>Features</span>
          </a>
        </nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content scrollable-container fix-height" (scroll)="onElementScroll($event)">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column left class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
        <nb-menu [items]="subMenu"></nb-menu>
      </nb-layout-column>

      <nb-layout-column right class="small" *ngIf="layout.id === 'three-column'">
        <nb-menu [items]="subMenu"></nb-menu>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

      <nb-sidebar class="settings-sidebar"
                   tag="settings-sidebar"
                   state="collapsed"
                   fixed
                   [right]="sidebar.id !== 'right'">
        <ngx-theme-settings></ngx-theme-settings>
      </nb-sidebar>
    </nb-layout>
  `,
})
export class SampleLayoutComponent implements OnDestroy {

  subMenu: NbMenuItem[] = [];
  layout: any = {};
  sidebar: any = {};

  public pageStart = 1;
  public pageEnd = 10;
  public noMoreContent = false;

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;
  protected itemList = [];

  constructor(
    protected stateService: StateService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService,
    protected dashboardService: DashboardService,
    protected listnerService: ListnerService
  ) {
    this.getTendersPagination();
    this.layoutState$ = this.stateService.onLayoutState()
      .subscribe((layout: string) => this.layout = layout);

    this.sidebarState$ = this.stateService.onSidebarState()
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    const isBp = this.bpService.getByName('is');
    this.menuClick$ = this.menuService.onItemSelect()
      .withLatestFrom(this.themeService.onMediaQueryChange())
      .delay(20)
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });
  }

  @HostListener('scroll', ['$event']) host
  onElementScroll($event) {
    console.log($event)

    const top = $event.target.scrollTop;
    const height = $event.target.scrollHeight;
    const offset = $event.target.offsetHeight;
    // console.log(top,height,offset);
    if (top > height - offset - 5) {
      this.loadMore();
    }
  }

  loadMore() {
    if (!this.noMoreContent) {

      this.pageStart = this.pageStart + 1;
      this.pageEnd = this.pageEnd + 8;
      // console.log(this.pageStart, this.pageEnd)
      this.getTendersPagination();
    } else {
      //this.snackBar.open('There is no more content to load', 'info', { duration: 2000});
    }
  }

  getTendersPagination(){
    this.dashboardService.getAllTenders(this.pageStart,10).subscribe(res => {
      //this.tenders = res;
      console.log(this.itemList);
      if (!res.length) {
        this.noMoreContent = true;
      }else{
        this.itemList = this.itemList.concat(res);
        this.listnerService.updateDataList(this.itemList);
      }
      // console.log(res);
    },err => {
      // console.log(err);
    });
  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
