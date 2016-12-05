import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent }   from './task/task.component';
import { ListComponent }      from './lists/lists.component';
import { HeroDetailComponent }  from './hero-details/hero-detail.component';
const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'task',  component: TaskComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'list',     component: ListComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
