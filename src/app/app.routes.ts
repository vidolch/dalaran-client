import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';
import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';

export const appRoutes: Routes = [
    {
      path: 'collections',
      component: CollectionComponent,
      data: { title: 'Collections' }
    },
    {
      path: 'collections/:id',
      component: CollectionDetailsComponent,
      data: { title: 'Collection Details' }
    },
    {
      path: 'collections/:collectionId/resources/:id',
      component: ResourceDetailsComponent,
      data: { title: 'Resource details' }
    },
    { path: '**', component: CollectionComponent }
  ];
