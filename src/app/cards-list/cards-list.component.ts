import { Component, Input } from '@angular/core';
import { cardNews } from 'src/assets/interfaces';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
    @Input() listNews: cardNews[] = []
}
