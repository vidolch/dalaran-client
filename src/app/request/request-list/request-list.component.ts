import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  @Input() collectionId: string;
  @Input() resourceId: string;

  constructor() { }

  ngOnInit() {
  }

}
