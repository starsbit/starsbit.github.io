import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { animation: 'Home' },
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/unkown/unkown.module').then((m) => m.UnkownModule),
    data: { animation: 'Unkown' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/unkown/unkown.module').then((m) => m.UnkownModule),
    data: { animation: 'Unkown' },
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
    data: { animation: 'Unkown' },
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
