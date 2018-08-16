import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { JsonmockService } from '../jsonmock.service';
import JSONMock from '../jsonmock';

@Injectable()
@Component({
  selector: 'app-jsonmocklist',
  templateUrl: './jsonmocklist.component.html',
  styleUrls: ['./jsonmocklist.component.scss']
})
export class JsonmocklistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'created_timestamp'];
  jsonmocks: MatTableDataSource<JSONMock> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonMockService: JsonmockService) { }

  ngOnInit() {
    this.getMocks();
  }

  getMocks() {
    this.jsonMockService.getMocks()
      .subscribe(mocks => {
        this.jsonmocks = new MatTableDataSource<JSONMock>(mocks);
      });
  }
}
