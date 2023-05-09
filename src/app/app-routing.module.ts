import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/banner', pathMatch: 'full'},
  {path: 'banner', component: BannerComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: '**', component: BannerComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
