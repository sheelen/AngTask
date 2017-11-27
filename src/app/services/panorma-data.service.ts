import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PanormaDataService {

  constructor(private httpClient: HttpClient ) {
  }

  getPanormas() {
    return this.httpClient.get('http://api3-dev.panono.com/explore');
  }

}
