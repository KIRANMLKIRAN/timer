import { TimerComponent } from './timer/timer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit',
    component: EditComponent,

  },
  {
    path: 'timer',
    component: TimerComponent,

  }
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ComponentRoutingModule {}
