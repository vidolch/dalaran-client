import { Component, OnInit, Injectable } from '@angular/core';
import { JsonmockService } from '../jsonmock.service';
import JSONMock from '../jsonmock';

@Injectable()
@Component({
  selector: 'app-jsonmocklist',
  templateUrl: './jsonmocklist.component.html',
  styleUrls: ['./jsonmocklist.component.css']
})
export class JsonmocklistComponent implements OnInit {
  jsonmocks: JSONMock[];
  constructor(private jsonMockService: JsonmockService) { }

  ngOnInit() {
    this.getMocks();
  }

  getMocks() {
    this.jsonMockService.getMocks()
      .subscribe(mocks => this.jsonmocks = mocks);
  }
}
