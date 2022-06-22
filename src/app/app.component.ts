import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reminders';

  reminderList = [
    {
      date: new Date(),
      text: "take out trash",
      isEditing: false,
      isFinished: true,
    },
    {
      date: new Date(),
      text: "wash car",
      isEditing: true,
      isFinished: false,
    },
    {
      date: new Date(),
      text: "make lunch",
      isEditing: false,
      isFinished: false,
    }
  ]

  constructor() {
  }
}
