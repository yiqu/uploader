import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class ZorroToasterService {

  zorroMsgList: string[] = [];

  constructor(private zs: NzMessageService) {
  }

  /**
   * Store message id if duration is < 1
   * @param message
   * @param duration
   * @returns message id
   */
  openLoadingToast(message: string, duration?: number | undefined): string | null {
    const resultMsg = message + ' Please wait...';
    const messageId: string = this.zs.loading(resultMsg, { nzDuration: duration }).messageId;
    if (!duration) {
      this.zorroMsgList.push(messageId);
    }
    return duration ? null : messageId;
  }

  removeMessagebyId(messageId: string) {
    this.zs.remove(messageId);
    const indexToRemove: number = this.zorroMsgList.findIndex((val) => {
      return val === messageId;
    });
    if (indexToRemove > -1) {
      this.zorroMsgList.splice(indexToRemove, 1);
    }
  }

}
