import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabService {
  private activeTab = new BehaviorSubject<string>('como-usar');

  setActiveTab(tab: string) {
    this.activeTab.next(tab);
  }

  getActiveTab() {
    return this.activeTab.asObservable();
  }
}
