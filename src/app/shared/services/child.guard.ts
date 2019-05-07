import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanLoad {
  public canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
