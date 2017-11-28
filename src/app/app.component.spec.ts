import {ComponentFixture, TestBed, async, fakeAsync,} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Navigation and sidebar components', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [AppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  }));

  it('View and filter options', async(() => {
    const view = fixture.debugElement.query(By.css('#viewVal')).nativeElement;
    const filter = fixture.debugElement.query(By.css('#filterVal')).nativeElement;
    fixture.detectChanges();
    expect(view.textContent).toContain('Grid' || 'List');
    expect(filter.textContent).toContain('All' || 'Favorites');
  }));

  it('Visibility of toggle button on header', () => {

    fixture.debugElement.query(By.css('#toggleButton2')).nativeElement.click();
    fixture.detectChanges();
    let toggleButton = fixture.debugElement.query(By.css('#toggleButton'));
    // toggle button on head must appear when button on sidebar is clicked
    expect(toggleButton === null).toBe(false);

    const x = toggleButton.nativeElement.click();
    fixture.detectChanges();
    toggleButton = fixture.debugElement.query(By.css('#toggleButton'));
    // toggle button on head must disappear when it is clicked
    expect(toggleButton === null).toBe(true);

  });
});

