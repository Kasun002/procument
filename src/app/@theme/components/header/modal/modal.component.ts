import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '../../../../@core/services/dashboard.service';
import { ListnerService } from '../../../../@core/services/listner.service';
import { Router } from '@angular/router';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  public district = [{ value: 'Ampara', key: 'Ampara' },
  { value: 'Anuradhapura', key: 'Anuradhapura' },
  { value: 'Badulla', key: 'Badulla' },
  { value: 'Batticaloa', key: 'Batticaloa' },
  { value: 'Colombo', key: 'Colombo' },
  { value: 'Galle', key: 'Galle' },
  { value: 'Gampaha', key: 'Gampaha' },
  { value: 'Hambanthota', key: 'Hambanthota' },
  { value: 'Jaffna', key: 'Jaffna' },
  { value: 'Kalutara', key: 'Kalutara' },
  { value: 'Kandy', key: 'Kandy' },
  { value: 'Kegalle', key: 'Kegalle' },
  { value: 'Kilinochchi', key: 'Kilinochchi' },
  { value: 'Kurunegala', key: 'Kurunegala' },
  { value: 'Mannar', key: 'Mannar' },
  { value: 'Matale', key: 'Matale' },
  { value: 'Matara', key: 'Matara' },
  { value: 'Moneragala', key: 'Monaragala' },
  { value: 'Mullaitivu', key: 'Mullaitivu' },
  { value: 'Nuwara Eliya', key: 'Nuwara_Eliya' },
  { value: ' Polonnaruwa', key: 'Polonnaruwa' },
  { value: 'Puttalam', key: 'Puttalam' },
  { value: 'Ratnapura', key: 'Ratnapura' },
  { value: 'Trincomalee', key: 'Trincomalee' },
  { value: 'Vavuniya', key: 'Vavuniya' }];

  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'HI there!';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'warning';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(private activeModal: NgbActiveModal,
    private dashboardService: DashboardService,
    private listnerService: ListnerService,
    private toasterService: ToasterService,
    private router: Router) { }
  closeModal() {
    this.activeModal.close();
  }

  serchFunction(key) {
    this.dashboardService.getTendersbyArea(key, 1, 10).subscribe(res => {
      this.activeModal.close();
      if (res && res.length > 0) {
        this.listnerService.updateDataList(res);
      } else {
        this.showToast(this.type, this.title, this.content);
        this.listnerService.updateDataList([]);
      }
      this.router.navigate(['dashboard'], { queryParams: { area: key } });
    }, err => {
      this.activeModal.close();
      //console.log(err);
    })
    //
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }
}

