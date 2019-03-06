import { RequestDetailsComponent } from './request/request-details/request-details.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { AuthGuard } from './auth/auth.guard';
import { LogincallbackComponent } from './shared/login-callback/login-callback.component';

export const appRoutes: Routes = [
    {
      path: 'collections',
      component: CollectionComponent,
      canActivate: [AuthGuard],
      data: { title: 'Collections' }
    },
    {
      path: 'collections/:collectionId',
      component: CollectionComponent,
      canActivate: [AuthGuard],
      data: { title: 'Collection Details' }
    },
    {
      path: 'collections/:collectionId/resources/:resourceId',
      component: CollectionComponent,
      canActivate: [AuthGuard],
      data: { title: 'Resource details' }
    },
    {
      path: 'collections/:collectionId/resources/:resourceId/requests/:id',
      component: RequestDetailsComponent,
      canActivate: [AuthGuard],
      data: { title: 'Resource details' }
    },
    {
      path: 'callback.html',
      component: LogincallbackComponent,
      data: { title: 'Collections' }
    },
    { path: '**', component: HomeComponent }
  ];
