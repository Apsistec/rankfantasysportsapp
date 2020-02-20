import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Manages interception and transformation of HTTP requests
 * @module InterceptorService
 * @implements HttpInterceptor
 */
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  /**
   * @constructs
   */
  constructor() {}

  /**
   * Intercepts HTTP requests and adds no-cache headers to ensure that the URI resource returned is
   * always the most current, up to date version
   * @public
   * @method intercept
   * @param {HttpRequest}   httpRequest   The Outgoing HTTP request to be intercepted
   * @param {HttpHandler}   nextRequest   Transforms an HttpRequest object into a stream of HttpEvents
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(
    httpRequest: HttpRequest<any>,
    nextRequest: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clones the outgoing HttpRequest object and injects the following
    // no-cache related headers:
    // 1. Cache-Control         For HTTP 1.1. servers
    // 2. Pragma                Compatible with legacy HTTP 1.0 servers that do not support Cache-Control header
    // 3. Expires               Sets the expiry date as the unix epoch
    // 4. If-Modified-Since     Explicitly state that the request must comply with the given range
    const transformedRequest = httpRequest.clone({
      headers: httpRequest.headers
        .set('Cache-Control', 'no-cache')
        .set('Pragma', 'no-cache')
        .set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        .set('If-Modified-Since', '0')
    });

    // Handles the transformed HttpRequest for the next interceptor in the chain
    return nextRequest.handle(transformedRequest);
  }
}
