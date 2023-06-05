import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private moduleLoaded = false;

  setModuleLoaded() {
    this.moduleLoaded = true;
  }

  isModuleLoaded() {
    return this.moduleLoaded;
  }
}
