import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './Components/dashboard/dashboard';
import { Products } from './Components/products/products';
import { Reports } from './Components/reports/reports';
import { Settings } from './Components/settings/settings';
import { Users } from './Components/users/users';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect empty path to dashboard
      { path: 'dashboard', component: Dashboard },
      { path: 'products', component: Products },
      { path: 'reports', component: Reports },
      { path: 'settings', component: Settings },
      { path: 'contacts', component: Users },
      { path: '**', redirectTo: 'dashboard' } // Wildcard route for a 404 page
    ]
  }
];