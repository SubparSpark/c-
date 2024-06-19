import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BookingComponent } from './booking/booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [  
    { path: 'dashboard', component: MainComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'booking', component: BookingComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
