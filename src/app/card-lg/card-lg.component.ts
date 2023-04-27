import { Component, Input } from '@angular/core';
import { cardNews } from 'src/assets/interfaces';

@Component({
    selector: 'app-card-lg',
    templateUrl: './card-lg.component.html',
    styleUrls: ['./card-lg.component.scss']
})
export class CardLgComponent {
    @Input()
    mainNews!: cardNews;
}
