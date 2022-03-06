import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SocialNavComponent } from './components/header/social-nav/social-nav.component';
import { LoginComponent } from './components/header/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { SocialNavBootsComponent } from './components/social-nav-boots/social-nav-boots.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoExisteComponent } from './pages/no-existe/no-existe.component';
import { PortadaComponent } from './components/portada/portada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SocialNavComponent,
    LoginComponent,
    ButtonComponent,
    SocialNavBootsComponent,
    InicioComponent,
    EditarComponent,
    ProyectosComponent,
    ExperienciasComponent,
    RegistroComponent,
    NoExisteComponent,
    PortadaComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
