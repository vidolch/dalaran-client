import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../Resource';
import { MatTableDataSource } from '@angular/material';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  @Input() collectionId: string;
  displayedColumns: string[] = ['name', 'path', 'created_timestamp', 'actions'];
  dataSource = null;

  constructor(private service: ResourceService) {
    this.service.changed$.subscribe( changed => {
      this.getResources();
    });
  }

  ngOnInit() {
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
    this.service.selectForEdit(id);
  }
}
