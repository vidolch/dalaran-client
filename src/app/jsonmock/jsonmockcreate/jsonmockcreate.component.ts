import { Component, OnInit } from '@angular/core';
import { JsonmockService } from '../jsonmock.service';
import JSONMock from '../jsonmock';

@Component({
  selector: 'app-jsonmockcreate',
  templateUrl: './jsonmockcreate.component.html',
  styleUrls: ['./jsonmockcreate.component.css']
})
export class JsonmockcreateComponent implements OnInit {
  mockName = '';
  mock = new JSONMock();

  constructor(private mockService: JsonmockService) { }

  ngOnInit() {
  }

  saveMock() {
    this.mockService.createMock(this.mock)
    .subscribe(res => {
      this.mock = new JSONMock();
    });
  }
}
