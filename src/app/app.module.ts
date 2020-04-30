import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RectanguloComponent } from './components/rectangulo/rectangulo.component';
import { tarjetasComponent } from './components/tarjetas/tarjeta.component';
import { tarjetaRosaComponent } from "./components/tarjetaRosa/tarjetaRosa.component";
import { tarjetaGrisComponent } from './components/tarjetaGris/tarjetaGris.component';
import { tarjetaBlancaComponent } from './components/tarjetaBlanca/tarjeta.component';
import { tarjetaVerdeComponent } from './components/tarjetaVerde/tarjetaVerde.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RectanguloComponent,
    tarjetasComponent,
    tarjetaRosaComponent,
    tarjetaGrisComponent,
    tarjetaBlancaComponent,
    tarjetaVerdeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
