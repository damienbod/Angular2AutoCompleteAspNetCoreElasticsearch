import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeSearchComponent } from './homesearch/homesearch.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'homesearch', component: HomeSearchComponent }
];

export const routing = RouterModule.forRoot(appRoutes);