import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TeamComponent } from './team/team.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { FirstComponent } from './news/first/first.component';
import { SecondComponent } from './news/second/second.component';
import { ThirdComponent } from './news/third/third.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventComponent },
  {
    path: 'news',
    component: NewsComponent,
    children: [{ path: 'first', component: FirstComponent },
               { path: 'second', component: SecondComponent },
              { path: 'third', component: ThirdComponent }],
  },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
