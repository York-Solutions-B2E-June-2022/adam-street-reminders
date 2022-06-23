import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;
  dataServiceName: string = ";"

  onClick() {
    this.count += 1;
  }

  onReset() {
    this.count = 0;
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
