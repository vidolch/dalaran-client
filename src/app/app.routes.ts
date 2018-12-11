import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';

export const appRoutes: Routes = [
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'mocks',
    //   component: JsonmocklistComponent,
    //   data: { title: 'Mock List' }
    // },
    {
      path: 'collections',
      component: CollectionComponent,
      data: { title: 'Mock Create' }
    },
    { path: 'collections/:id', component: CollectionDetailsComponent },
    { path: '**', component: CollectionComponent }
  ];
