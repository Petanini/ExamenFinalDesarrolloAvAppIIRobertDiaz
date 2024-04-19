import { Component, OnInit } from '@angular/core';
import { ConsumirapiService } from '../consumirapi.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tablahtml',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './tablahtml.component.html',
  styleUrl: './tablahtml.component.css'
})
export class TablahtmlComponent implements OnInit {

  listarAsociados: any;

  constructor(private consumirapiService: ConsumirapiService) {
    this.listarAsociados = [];
   }

   getListarAsociados() {
    this.consumirapiService.getLugares().subscribe((data) => {
      this.listarAsociados = data;
    });
   }

  ngOnInit(): void {
    this.getListarAsociados();
    console.log(this.listarAsociados);
  }



}
