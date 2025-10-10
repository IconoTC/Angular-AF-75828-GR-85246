import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date: Date;
  constructor() {
    this.date = new Date();
  }

  getDate(): Date {
    return this.date;
  }
}
