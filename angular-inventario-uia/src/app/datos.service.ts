import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BDenMemoriaService } from './bden-memoria.service';
import { IPartida } from './IPartida';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private partidasUrl = 'api/partidas';

  constructor(private http: HttpClient, bd: BDenMemoriaService) { }


getPartidas(): Observable < IPartida[] > {
  return this.http.get<IPartida[]>(this.partidasUrl)
} 
}