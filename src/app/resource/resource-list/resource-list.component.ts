import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Resource } from '../Resource';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ResourceService } from '../resource.service';
import { ResourceCreateComponent } from '../resource-create/resource-create.component';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit, OnChanges {
  @Input() collectionId: string;
  @Output() resourceId: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['name', 'path', 'created_timestamp', 'actions'];
  dataSource = null;

  constructor(
    private service: ResourceService,
    public dialog: MatDialog) {
    this.service.changed$.subscribe( changed => {
      this.getResources();
    });
  }

  ngOnInit() {
    this.service.collectionId = this.collectionId;
    this.getResources();
  }

  ngOnChanges() {
    this.service.collectionId = this.collectionId;
    this.getResources();
  }

  getResources() {
    this.service.get().subscribe(resources => {
      this.dataSource = new MatTableDataSource<Resource>(resources.contents);
    });
  }

  deleteResource(id: string) {
    this.service.delete(id)
      .subscribe(x => {
        this.getResources();
      });
  }

  selectForEdit(id: string) {
    this.dialog.open(ResourceCreateComponent, {
      data: {
        CollectionId: this.collectionId,
        Id: id
      }
    });
  }

  selectForDetails(id: string) {
    this.resourceId.emit(id);
  }
}
