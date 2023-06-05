import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnkownComponent } from './unkown.component';

const routes: Routes = [
  {
    path: '',
    component: UnkownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnkownRoutingModule {}
