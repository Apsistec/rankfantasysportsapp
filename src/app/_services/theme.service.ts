// import * as Color from 'color';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2, Renderer2 } from '@angular/core';
// import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // private storage: StorageService,
    private rendererFactory: RendererFactory2
  ) {
    // this.storage.get('theme').then(cssText => {
    //   this.setGlobalCSS(cssText);
    // });

    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
  }
  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }
}
