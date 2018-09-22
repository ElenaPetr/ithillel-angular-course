import { PageEvent } from '@angular/material/paginator';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  public constructor(
    private _http: HttpClient
  ) { }


  public getProducts(event: PageEvent): Observable<IProduct[]> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    });

    const params: HttpParams = new HttpParams({ fromObject: {
      _limit: String(event.pageSize),
      _page: String(event.pageIndex)
    } });

    return this._http.get<IProduct[]>(`${environment.api}/products`, { headers, params }).pipe(
      catchError((error: Error) => {
        console.log(error);
        // show popu
        return of([]);
      })
    );
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>(`${environment.api}/products`, product);
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    return this._http.put<IProduct>(`${environment.api}/products`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    return this._http.delete<void>(`${environment.api}/products${id}`);
  }

}

