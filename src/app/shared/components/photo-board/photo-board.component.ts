import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photos';

@Component({
    selector: 'app-photo-boar',
    templateUrl: './photo-board.component.html',
    styleUrls: ['./photo-board.component.scss']
})

export class PhotoBardComponent implements OnChanges {
    @Input() public photos: Photo[];
    public rows: any[][] = [];


    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.photos) {
            this.rows = this.groupColumns(changes.photos.currentValue);
        }
    }

    public groupColumns(photos: Photo[]) {
        const newRows = [];
        const step = 4;
        for (let index = 0; index < this.photos.length; index += 4) {
            newRows.push(photos.splice(index, index + step))
        }
        return newRows
    }
}