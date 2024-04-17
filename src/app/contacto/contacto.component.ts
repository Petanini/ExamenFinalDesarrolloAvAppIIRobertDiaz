import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormulariocontactoComponent } from '../formulariocontacto/formulariocontacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormulariocontactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
