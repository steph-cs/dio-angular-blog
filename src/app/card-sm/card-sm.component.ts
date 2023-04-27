import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.scss']
})
export class CardSmComponent {
    @Input() cardImg: string = "";
    @Input() cardTitle: string = "";
    @Input() cardAuthor: string = "";
    @Input() cardDate: string = "";
    @Input() cardText: string = "";
    @Input() cardKeys: string[] = [];
}
