import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { AcercaComponent } from '../acerca/acerca.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, MenuComponent, FooterComponent, CarouselComponent, AcercaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
