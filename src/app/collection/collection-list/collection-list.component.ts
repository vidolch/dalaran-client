import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit, OnChanges {
  @Output() collectionId: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['name', 'created_timestamp', 'actions'];
  dataSource = null;

  // MatPaginator Inputs
  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private service: CollectionService) {
    this.service.changed$.subscribe( changed => {
      this.getCollections();
    });
  }

  // MatPaginator Output
  pageEvent: PageEvent;

  setPage(page: PageEvent) {
    this.pageEvent = page;
    this.getCollections();
  }

  ngOnInit() {
    this.getCollections();
  }

  ngOnChanges() {
    this.getCollections();
  }

  getCollections() {
    let paging = null;
    if (this.pageEvent) {
      paging = { page: this.pageEvent.pageIndex + 1, size: this.pageEvent.pageSize };
    }

    this.service.get(paging)
      .subscribe(collections => {
        this.dataSource = new MatTableDataSource<Collection>(collections.contents);
        this.length = collections.total_size;
      });
  }

  deleteCollection(id: string) {
    this.service.delete(id)
      .subscribe(x => {
        this.getCollections();
      });
  }

  downloadApi(id: string) {
    this.service.downloadApi(id)
      .subscribe(x => {
        this.downloadFile(x);
      });
  }

  selectForEdit(id: string) {
    this.service.selectForEdit(id);
  }

  selectForDetails(id: string) {
    this.collectionId.emit(id);
  }

  private downloadFile(data: any) {
    const blob = new Blob([data.body], { type: 'application/zip' });

    // Create a link element, hide it, direct
    // it towards the blob, and then 'click' it programatically
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    // Create a DOMString representing the blob
    // and point the link element towards it
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'collection.zip';
    const contentDisposition = data.headers.get('content-disposition');
    if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(contentDisposition);
      if (matches != null && matches[1]) {
        a.download = matches[1].replace(/['"]/g, '');
      }
    }
    // programatically click the link to trigger the download
    a.click();
    // release the reference to the file by revoking the Object URL
    window.URL.revokeObjectURL(url);
  }
}
