import { merge, Observable, timer } from 'rxjs';
import { mapTo, takeWhile } from 'rxjs/operators';

import { Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})

export class BlinkDirective implements OnInit, OnDestroy {

  private blinker$: Observable<string>;
  private active = true;

  @HostBinding('style.visibility')
  private visibility: string;

  constructor() {
    const show$ = timer(0, 1000);
    const hide$ = timer(1000, 1000);

    this.blinker$ = merge(
      show$.pipe(mapTo('visible')),
      hide$.pipe(mapTo('hidden'))
    );
  }

  ngOnInit() {
    this.blinker$.pipe(
      takeWhile(() => this.active))
      .subscribe((newVisiblity: string) => this.visibility = newVisiblity);
  }

  ngOnDestroy() {
    this.active = false;
  }

}
