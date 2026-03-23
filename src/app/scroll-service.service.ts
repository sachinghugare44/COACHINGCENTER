import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }
  private scrollSubject = new Subject<string>();
  scrollAction$ = this.scrollSubject.asObservable();

  triggerScroll(section: string) {
    this.scrollSubject.next(section);
  }
}
