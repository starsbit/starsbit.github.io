import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'src/app/components/countdown/countdown.module';
import { UnkownRoutingModule } from './unkown-routing.module';
import { UnkownComponent } from './unkown.component';

@NgModule({
  declarations: [UnkownComponent],
  imports: [CommonModule, UnkownRoutingModule, CountdownModule],
})
export class UnkownModule {}
