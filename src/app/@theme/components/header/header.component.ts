import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../../../@core/data/users.service';
import { ListnerService } from '../../../@core/services/listner.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ModalCategoryComponent } from './modal-category/modal-category.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  @ViewChild('area') modalArea;
  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private modalService: NgbModal,
              private listnerService: ListnerService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  showCategoryLargeModal() {
    const activeModal = this.modalService.open(ModalCategoryComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch(event) {
    this.analyticsService.trackEvent('startSearch');
  }
}
