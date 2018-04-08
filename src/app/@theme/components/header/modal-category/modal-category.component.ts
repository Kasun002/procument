import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '../../../../@core/services/dashboard.service';

@Component({
  selector: 'modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {

  public categoryData = [];
  constructor(
    private activeModal: NgbActiveModal,
    private dashboardService: DashboardService
  ) {
    this.categoryData = this.dashboardService.getCategoryData();
    console.log(this.categoryData);
  }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close();
  }

  serchFunction() {
    //
  }

}
