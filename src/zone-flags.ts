import './zone-flags.ts';

/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */
(window as any).__Zone_disable_customElements = true;
/**
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 */

(window as any).__Zone_disable_requestAnimationFrame = true;
(window as any).__Zone_disable_on_property = true;
(window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove'];

/**
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js with the following flag,
 * it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
if (document['documentMode'] || /Edge/.test(navigator.userAgent)) {
  (window as any).__Zone_enable_cross_context_check = true;
}

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
