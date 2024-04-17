import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AcercaComponent } from '../acerca/acerca.component';

@Component({
  selector: 'app-acercapag',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, AcercaComponent],
  templateUrl: './acercapag.component.html',
  styleUrl: './acercapag.component.css'
})
export class AcercapagComponent {

}
