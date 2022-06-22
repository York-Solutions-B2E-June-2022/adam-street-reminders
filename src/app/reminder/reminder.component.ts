import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  @Input() reminder: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onEditClick() {
    this.reminder.isEditing = true;
  }

  saveEdit() {
    this.reminder.isEditing = false;
  }

  onDateChange(date: any) {
    this.reminder.date = new Date(date + " 00:00:00");
  }
}
