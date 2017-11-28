import { Component, OnInit, Renderer, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {

  @ViewChild('main') main: ElementRef;
  @ViewChild('sideMenu') sideMenu: ElementRef;

  // Header bar; visibility variable
  barVisibility: Boolean= false;

  // View and Filter variables on sidebar
  viewList: String[] = ['Grid', 'List'];
  filterList: String[] = ['All', 'Favorites'];
  View: String = 'Grid';
  Filter: String = 'All';

  constructor(private renderer: Renderer) {
  }

  /*
   *  Logic for Sliding Side Panel
   */
  ngAfterViewInit() {
    this.renderer.setElementStyle(this.sideMenu.nativeElement, 'width', '250px' );
    this.renderer.setElementStyle(this.main.nativeElement, 'paddingLeft', '250px' );
  }
  openSlide() {
    this.barVisibility = false;
    this.renderer.setElementStyle(this.sideMenu.nativeElement, 'width', '250px' );
    this.renderer.setElementStyle(this.main.nativeElement, 'paddingLeft', '250px' );
  }
  closeSlide() {
    this.barVisibility = true;
    this.renderer.setElementStyle(this.sideMenu.nativeElement, 'width', '0px' );
    this.renderer.setElementStyle(this.main.nativeElement, 'paddingLeft', '0px' );
  }

}
