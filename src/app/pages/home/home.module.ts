import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'src/app/components/countdown/countdown.module';
import { StarsBackgroundModule } from 'src/app/components/stars-background/stars-background.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StarsBackgroundModule,
    CountdownModule,
  ],
})
export class HomeModule {}
