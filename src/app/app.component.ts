import {Component, OnDestroy} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {DatePipe} from "@angular/common";
import {IReminder} from "./interfaces/IReminder";
import {DataService} from "./data.service";
import {Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  searchText: string = "";
  displayList: Array<IReminder> = []
  reminderListSub: Subscription;

  constructor(private datePipe: DatePipe, private dataService: DataService) {
    this.displayList = [...this.dataService.reminderList]
    this.reminderListSub = dataService.reminderList$.subscribe(
      (newList) => this.displayList = newList
    )
  }

  ngOnDestroy() {
    this.reminderListSub.unsubscribe();
  }

  createMemo() {
    this.dataService.createMemo()
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
  }


  // buildDisplayList(): void {
  //   this.displayList = this.reminderList.filter(
  //     (reminder) => {
  //       const dateString = this.datePipe.transform(reminder.date);
  //       return reminder.text.includes(this.searchText) || dateString?.toUpperCase().includes(this.searchText.toUpperCase())
  //     }
  //   )
  // }
}
