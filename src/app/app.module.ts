import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SocialComponent } from './componentes/social/social.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { RegisterComponent } from './componentes/register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    BannerComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    SocialComponent,
    ContactoComponent,
    LoginComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    CommonModule,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

