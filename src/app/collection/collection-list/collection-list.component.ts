import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'created_timestamp', 'actions'];
  dataSource = null;

  constructor(private service: CollectionService) {
    this.service.changed$.subscribe( changed => {
      this.getCollections();
    });
  }

  ngOnInit() {
    this.getCollections();
  }

  getCollections() {
    this.service.get()
      .subscribe(collections => {
        this.dataSource = new MatTableDataSource<Collection>(collections.contents);
      });
  }

  deleteCollection(id: string) {
    this.service.delete(id)
      .subscribe(x => {
        this.getCollections();
      });
  }

  selectForEdit(id: string) {
    this.service.selectForEdit(id);
  }
}
