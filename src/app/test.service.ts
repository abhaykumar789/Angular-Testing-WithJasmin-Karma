import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getAllData():Observable<any[]>{
    return of(["a","b","c"]);
  }
}
