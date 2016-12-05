import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-details/hero-detail.component';
import { TaskComponent }  from './task/task.component';
import { ListComponent }     from './lists/lists.component';
import { ListService }         from './list.service';
import { TaskService }          from './task.service';


import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/task',
        pathMatch: 'full'
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ])
  ],

  declarations: [
    AppComponent,
    TaskComponent,
    HeroDetailComponent,
    ListComponent,
  ],
  providers: [
    ListService,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}