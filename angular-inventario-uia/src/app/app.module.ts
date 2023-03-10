import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PartidaComponent } from './partida/partida.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BDenMemoriaService } from './bden-memoria.service';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { DatosService } from './datos.service';
import { InMemoryDataService} 

@NgModule({
  declarations: [
    AppComponent,
    SolicitudesComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BDenMemoriaService, { dataEncapsulation: false })
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
