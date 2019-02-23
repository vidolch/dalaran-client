import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  @Input() collectionId: string;
  @Input() resourceId: string;

  constructor() { }

  ngOnInit() {
  }

}
