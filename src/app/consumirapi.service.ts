import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumirapiService {

  constructor(private HttpClient: HttpClient) { }

  getLugares() {
    var url = 'https://www.practicas.micostanera.com/api/listarasociados';
    return this.HttpClient.get(url);
  }
}
