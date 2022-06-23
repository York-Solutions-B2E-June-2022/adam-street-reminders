import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IReminder} from "../interfaces/IReminder";
import {DataService} from "../data.service";


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit{

  @Input() reminder!: IReminder;
  displayReminder!: IReminder;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.displayReminder = {...this.reminder};
  }

  onEditClick(): void {
    this.displayReminder.isEditing = true;
  }

  saveEdit(): void{
    this.displayReminder.isEditing = false;
    this.dataService.onUpdate(this.displayReminder);
  }

  onDateChange(date: string): void {
    this.displayReminder.date = new Date(date + " 00:00:00");
  }

  onDelete(): void {
    this.dataService.onDelete(this.reminder);
  }

  cancelEdit() {
    this.displayReminder = {...this.reminder}
  }
}
