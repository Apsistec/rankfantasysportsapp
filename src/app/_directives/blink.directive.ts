import { Directive, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { mapTo, takeWhile } from 'rxjs/operators';
import { Observable, timer, merge } from 'rxjs';

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
    const hide$ = timer(750, 1000);

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
