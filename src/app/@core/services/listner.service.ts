import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ListnerService {
  @Output() dataList: EventEmitter<any> = new EventEmitter<any>();
  @Output() areaModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public updateDataList(dataArray) {
    this.dataList.emit(dataArray);
  }

  public updateAreaModal(status){
    this.areaModal.emit(status);
  }

}
