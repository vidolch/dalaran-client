import { RequestDetailsComponent } from './request/request-details/request-details.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';
import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
    {
      path: 'collections',
      component: CollectionComponent,
      canActivate: [AuthGuard],
      data: { title: 'Collections' }
    },
    {
      path: 'collections/:id',
      component: CollectionDetailsComponent,
      canActivate: [AuthGuard],
      data: { title: 'Collection Details' }
    },
    {
      path: 'collections/:collectionId/resources/:id',
      component: ResourceDetailsComponent,
      canActivate: [AuthGuard],
      data: { title: 'Resource details' }
    },
    {
      path: 'collections/:collectionId/resources/:resourceId/requests/:id',
      component: RequestDetailsComponent,
      canActivate: [AuthGuard],
      data: { title: 'Resource details' }
    },
    { path: '**', component: HomeComponent }
  ];
