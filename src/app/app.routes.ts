import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';

export const appRoutes: Routes = [
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'mocks',
    //   component: JsonmocklistComponent,
    //   data: { title: 'Mock List' }
    // },
    // {
    //   path: 'mocks/create',
    //   component: JsonmockcreateComponent,
    //   data: { title: 'Mock Create' }
    // },
    // { path: '',
    //   redirectTo: '/mocks',
    //   pathMatch: 'full'
    // },
    { path: '**', component: CollectionComponent }
  ];
