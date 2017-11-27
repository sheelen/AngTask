import { Component, OnInit, Input } from '@angular/core';
import { PanormaDataService } from '../../services/panorma-data.service';

@Component({
  selector: 'app-panormas',
  templateUrl: './panormas.component.html',
  styleUrls: ['./panormas.component.css']
})
export class PanormasComponent implements OnInit {

  // Values from Parent Component
  @Input() View: String;
  @Input() Filter: String;

  // Stores Panaromas returned from PanaromaService
  private panormas;
  // Stores Id of panormas that are marked as favorites
  favoritePanormas: String[]= [];

  constructor(private panormaDataService: PanormaDataService) {
    // checks localStorage for stored favorites
    console.log(sessionStorage.getItem('favorites') === null);
    if (sessionStorage.getItem('favorites') !== null) {
      this.favoritePanormas = JSON.parse(sessionStorage.getItem('favorites'));
    }
  }

  ngOnInit() {
    this.panormas = this.panormaDataService.getPanormas().subscribe(data => {
      this.panormas = data;
      console.log(this.panormas);
    });
  }

  /*
   * Functionalities for adding and removing panormas to/from favorites
   */
  addToFavorites(id: String) {
    if (this.favoritePanormas.find(x => x === id) === id) {
      this.removeFromFavorites(id);
      sessionStorage.setItem('favorites', JSON.stringify(this.favoritePanormas));
    }else {
      this.favoritePanormas.push(id);
      sessionStorage.setItem('favorites', JSON.stringify(this.favoritePanormas));
    }
  }
  removeFromFavorites(id: String) {
    this.favoritePanormas = this.favoritePanormas.filter(x => x !== id );
    sessionStorage.setItem('favorites', JSON.stringify(this.favoritePanormas));
  }
  checkIfAddedToFavorites(id: String): boolean {
    return this.favoritePanormas.find(x => x === id) === id;
  }


}
