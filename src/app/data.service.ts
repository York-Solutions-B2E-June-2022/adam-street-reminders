import { Injectable } from '@angular/core';
import {IReminder} from "./interfaces/IReminder";
import {v4 as uuidv4} from "uuid";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  reminderList: Array<IReminder> = [];
  reminderList$ = new Subject<Array<IReminder>>();

  constructor() { }

  createMemo(): void {
    this.reminderList.push({
      id: uuidv4(),
      date: new Date(),
      text: "",
      isEditing: true,
      isFinished: false
    })
    this.reminderList$.next(this.reminderList);
  }

  onDelete(reminderToDelete: IReminder): void {
    this.reminderList = this.reminderList.filter(
      (reminder) => { return reminder.id !== reminderToDelete.id }
    )
    this.reminderList$.next(this.reminderList);
  }

  onUpdate(reminderToUpdate: IReminder) {
    this.reminderList = this.reminderList.map(
      (reminder) => {
        if (reminder.id === reminderToUpdate.id) {
          return reminderToUpdate;
        }
        return reminder;
      }
    )
    this.reminderList$.next(this.reminderList);
  }
}
