import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { IPartida } from '../IPartida';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {
  partidas: IPartida[] = [];

selectedPartida?: IPartida;
constructor(public datosPartida:DatosService){

}

ngOnInit(): void {

  this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
    console.log(data);
    this.partidas = data;
  })
}
}
