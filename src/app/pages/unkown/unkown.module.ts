import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'src/app/components/countdown/countdown.module';
import { MenuSelectionModule } from 'src/app/components/menu-selection/menu-selection.module';
import { StarsBackgroundModule } from 'src/app/components/stars-background/stars-background.module';
import { UnkownRoutingModule } from './unkown-routing.module';
import { UnkownComponent } from './unkown.component';

@NgModule({
  declarations: [UnkownComponent],
  imports: [
    CommonModule,
    UnkownRoutingModule,
    CountdownModule,
    StarsBackgroundModule,
    MenuSelectionModule,
  ],
})
export class UnkownModule {}
