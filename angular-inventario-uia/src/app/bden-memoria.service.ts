import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


import { IPartida } from './IPartida';

@Injectable({
  providedIn: 'root'
})
export class BDenMemoriaService {
  createDb() {
    const partidas = [{
      "id": "Material Oficina",
      "idPartida": "100",
      "name": "Material Oficina",
      "idSubpartida": "120",
      "nameSubpartida": "Silla",
      "idCategoria": "121",
      "nameCategoria": "Silla ejecutiva clase1",
      "nameLote": "lote1",
      "cantidad": 5,
      "minimoNivel": 5,
      "idProveedor": "710"
    }, {

      "id": "Material Oficina",
      "idPartida": "100",
      "name": "Material Oficina",
      "idSubpartida": "130",
      "nameSubpartida": "Silla",
      "idCategoria": "131",
      "nameCategoria": "Silla ejecutiva clase2",
      "nameLote": "lote1",
      "cantidad": 5,
      "minimoNivel": 5,
      "idProveedor": "710"
    }
    ]
  }
}
constructor() { }
}
