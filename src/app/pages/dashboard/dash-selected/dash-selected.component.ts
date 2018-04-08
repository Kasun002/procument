import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../../@core/services/dashboard.service';
@Component({
  selector: 'dash-selected',
  templateUrl: './dash-selected.component.html',
  styleUrls: ['./dash-selected.component.scss']
})
export class DashSelectedComponent implements OnInit {
  public selectedItem: any;
  constructor(private dashboardService: DashboardService, private router: Router) {
    this.selectedItem = this.dashboardService.getTenderData();
  }

  ngOnInit() {
    if(!this.selectedItem){
      this.router.navigate(['/pages/dashboard']);
    }
  }

}
