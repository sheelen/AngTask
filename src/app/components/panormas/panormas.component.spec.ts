import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { PanormasComponent } from './panormas.component';
import {FormsModule} from '@angular/forms';
import {PanormaDataService} from '../../services/panorma-data.service';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PanormasComponent', () => {

  let comp: PanormasComponent;
  let fixture: ComponentFixture<PanormasComponent>;
  let panormaDataService: PanormaDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ PanormasComponent ],
      providers: [PanormaDataService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PanormasComponent);

    comp = fixture.componentInstance;

    panormaDataService = fixture.debugElement.injector.get(PanormaDataService);

    spyOn(panormaDataService, 'getPanormas').and.returnValue(
      Observable.of<any>(
        {items: [
          {title: 'title', created_at: '2017-11-27T09:17:03.070646Z'}
        ]}
      ));
  }));


  it('Only GridLayout should appear when GRID is selected as view', fakeAsync(() => {
    comp.View = 'Grid';
    fixture.detectChanges();
    tick();
    const grid = fixture.debugElement.query(By.css('#gridLayout'));
    const view = fixture.debugElement.query(By.css('#listLayout'));
    expect(grid === null).toBe(false);
    expect(view === null).toBe(true);
  }));

  it('Only ListLayout should appear when LIST is selected as view', fakeAsync(() => {
    comp.View = 'List';
    fixture.detectChanges();
    tick();
    const grid = fixture.debugElement.query(By.css('#gridLayout'));
    const view = fixture.debugElement.query(By.css('#listLayout'));
    expect(grid === null).toBe(true);
    expect(view === null).toBe(false);
  }));


  it('Added to favorites function must always return boolean', () => {
    comp.favoritePanormas.push('panorma1');
    expect(comp.checkIfAddedToFavorites('panorma1')).toBe(true);
    expect(comp.checkIfAddedToFavorites('panorma2')).toBe(false);
  });

  it('Should add panorma id to favorites', () => {
    comp.addToFavorites('1123');
    expect(comp.favoritePanormas).toContain('1123');
  });

  it('Should remove panorma id from favorites', () => {
    comp.favoritePanormas.push('112312');
    comp.removeFromFavorites('112312');
    expect(comp.favoritePanormas).not.toContain('112312');
  });

  /*
 * Incomplete test
 */
  it('ListLayout should display PanormaTitle, Panormadate', fakeAsync(() => {
    comp.View = 'List';
    comp.Filter = 'All';
    fixture.detectChanges();
    comp.ngOnInit();
    tick();
    //const view = fixture.debugElement.query(By.css('#listLayout')).nativeElement;
    //const dare = fixture.debugElement.query(By.css('div.dataDate')).nativeElement'
  }));

});
