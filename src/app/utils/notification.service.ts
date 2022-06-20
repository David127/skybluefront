import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) {

    this.toastr.toastrConfig.positionClass = "toast-bottom-center";
    this.toastr.toastrConfig.preventDuplicates = true;
    this.toastr.toastrConfig.enableHtml = true;
    this.toastr.toastrConfig.progressBar = true;
    this.toastr.toastrConfig.closeButton = true;
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.countDuplicates = true;
    this.toastr.toastrConfig.timeOut = 2000;
  }

  showSuccess(message, title) {
    this.toastr.success(message, title);
  }

  showError(message, title) {
    this.toastr.error(message, title);
  }

  showInfo(message, title) {
    this.toastr.info(message, title);
  }

  showWarning(message, title) {
    this.toastr.warning(message, title);
  }
}
