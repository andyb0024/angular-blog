import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IRepository } from "../blog-interface/repository.interface";

export abstract class BlogRepository<T>implements IRepository <T>{
  constructor(
    protected readonly _http: HttpClient,
    protected readonly _base: string,
    protected readonly _router: Router,

) {}


	find$(uri: string | undefined): Observable<T[] | T |any>{
    return this._http.get<T[]|T>(this._base+ `/${uri}`)
  }
}
