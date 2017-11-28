import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class PanormaInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const dupRequest = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', 'http://api3-dev.panono.com/explore')});

    return next.handle(req);
  }
}
