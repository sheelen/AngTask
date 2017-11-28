import {TestBed, inject, async, getTestBed} from '@angular/core/testing';

import { PanormaDataService } from './panorma-data.service';
import {HttpClientModule} from '@angular/common/http';
import {ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';



describe('Panorma data service', () => {
  let service, mockBackend;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        PanormaDataService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  }));

  beforeEach(inject([PanormaDataService, XHRBackend], (_service, _mockBackend) => {
    service = _service;
    mockBackend = _mockBackend;
  }));

  it('should return dummy response', () => {
    const response = [{title: 'ru', date: '123123'}];
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response)
      })));
    });
    service.getPanormas().subscribe(data => {
      expect(data.title).toContain('ru');
      expect(data.date).toContain('es');
    });
  });
});




