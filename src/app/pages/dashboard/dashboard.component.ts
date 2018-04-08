import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../../@core/services/dashboard.service';
import { ListnerService } from '../../@core/services/listner.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  tenders;
  public noMoreContent = false;
  public selectedItem:any;
  public isSelected = false;

  constructor(private dashboardService: DashboardService,
    private listnerService: ListnerService,
    private router: Router){}

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories() {
    this.listnerService.dataList.subscribe(res => {
      this.tenders = res;
    });
    if (!this.tenders) {
      this.dashboardService.getAllTenders(1, 10).subscribe(res => {
        this.tenders = res;
      }, err => {
        //
      });
    }
  }

  selectItem(event){
    this.dashboardService.setTenderData(event);
    this.router.navigate(['/pages/dashboard/selected']);
  }
}
