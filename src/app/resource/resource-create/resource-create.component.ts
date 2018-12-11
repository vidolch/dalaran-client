import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit {
  @Input() collectionId: string;
  resource = new Resource();
  createView = false;
  isUpdate = false;

  constructor(private service: ResourceService) {
    this.service.selectedForEdit$.subscribe( id => {
      this.selectForEdit(id);
    });
  }

  ngOnInit() {
    this.service.collectionId = this.collectionId;
  }

  toggleCreateView() {
    this.createView = true;
  }

  submitResource() {
    if (!this.isUpdate) {
      this.service.create(this.resource).subscribe(model => {
        this.resource = new Resource();
        this.service.resourceCreated();
      });
    } else {
      this.service.update(this.resource.id, this.resource).subscribe(model => {
        this.resource = new Resource();
        this.service.resourceCreated();
      });
      this.isUpdate = false;
    }
    this.createView = false;
  }

  cancelCreate(): any {
    this.createView = false;
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.resource = model;
        this.createView = true;
        this.isUpdate = true;
      });
  }
}
