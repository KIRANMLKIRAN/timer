
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/timer' },

  {
	path: 'dashboard',
	loadChildren: () =>
		import('./component/component.module').then(
			(m) => m.ComponentModule
		)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
