import { Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercapagComponent } from './acercapag/acercapag.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = 
[{ path: 'inicio', title: 'Epom Sushi Bar', component: InicioComponent },
{ path: 'carta', title: 'Epom Sushi Bar', component: CartaComponent },
{ path: 'acerca', title: 'Epom Sushi Bar', component: AcercapagComponent },
{ path: 'contacto', title: 'Epom Sushi Bar', component: ContactoComponent },
{path: '',   redirectTo: '/inicio', pathMatch: 'full' }

];
