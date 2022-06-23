import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ReminderComponent } from './reminder/reminder.component';
import { NotesComponent } from './notes/notes.component';
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { FinishedTextPipe } from './finished-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ReminderComponent,
    NotesComponent,
    FinishedTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
