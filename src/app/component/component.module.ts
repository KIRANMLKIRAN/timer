import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { DemoNgZorroAntdModule } from '../shared/ng-zorro.module';
import { ComponentRoutingModule } from './component.routing';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    ComponentRoutingModule
  ],
  declarations: [ComponentComponent,
    EditComponent,
    CreateComponent,
    ViewComponent,
    TimerComponent]
})
export class ComponentModule { }
