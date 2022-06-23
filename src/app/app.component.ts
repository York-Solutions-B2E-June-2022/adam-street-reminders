import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reminders';

  searchText = "";
  reminderList: Array<any> = []
  displayList: Array<any> = []

  createMemo() {
    this.reminderList.push({
      id: uuidv4(),
      date: new Date(),
      text: "",
      isEditing: true,
      isFinished: false,
    })

    this.buildDisplayList();
  }

  onSearch(searchText: string) {
    this.searchText = searchText;
    this.buildDisplayList();
  }

  onDelete(reminderToDelete: any) {
    this.reminderList = this.reminderList.filter(
      (reminder) => { return reminder.id !== reminderToDelete.id }
    )
    this.buildDisplayList();
  }

  buildDisplayList() {
    this.displayList = this.reminderList.filter(
      (reminder) => {
        return reminder.text.includes(this.searchText)
      }
    )
  }


  constructor() {
    // this.createMemo()
    // this.createMemo()
    // this.createMemo()
  }
}
