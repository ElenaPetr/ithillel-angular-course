import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
