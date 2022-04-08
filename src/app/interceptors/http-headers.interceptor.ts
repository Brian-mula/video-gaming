import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
  constructor (){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req=req.clone({
      setHeaders:{
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'd78d8247b8mshee45bad1adaa238p14c5c2jsn33eb1a6451a1'
      },
      setParams:{
        key:'4f3f829872cb427fa2236a7f83a3404c'
      }
    });
    return next.handle(req)
  }
}
