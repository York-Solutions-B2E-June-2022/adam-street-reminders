import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  numberList: any = []

  addNumber() {
    const number = this.numberList.length
    this.numberList.push(number)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
