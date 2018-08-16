import { Routes } from '@angular/router';
import { JsonmocklistComponent } from './jsonmock/jsonmocklist/jsonmocklist.component';
import { JsonmockcreateComponent } from './jsonmock/jsonmockcreate/jsonmockcreate.component';

export const appRoutes: Routes = [
    // { path: 'hero/:id',      component: HeroDetailComponent },
    {
      path: 'mocks',
      component: JsonmocklistComponent,
      data: { title: 'Mock List' }
    },
    {
      path: 'mocks/create',
      component: JsonmockcreateComponent,
      data: { title: 'Mock Create' }
    },
    { path: '',
      redirectTo: '/mocks',
      pathMatch: 'full'
    },
    { path: '**', component: JsonmocklistComponent }
  ];
