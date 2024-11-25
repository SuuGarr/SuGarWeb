import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { fragment: 'home'} },
    { path: 'about-me', component: AboutMeComponent, data: { fragment:'about-me'} },
    { path: 'project', component: ProjectComponent , data: {fragment: 'project'}},
    { path: 'experience', component: ExperienceComponent, data: {fragment:'experience'} },
    { path: '', redirectTo: '/home', pathMatch: 'full'  }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}