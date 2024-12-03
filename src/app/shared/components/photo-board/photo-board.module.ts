import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBardComponent } from './photo-board.component';

@NgModule({
    declarations: [PhotoBardComponent],
    imports: [CommonModule, PhotoFrameModule],
    exports: [PhotoBardComponent]
})

export class PhotoBoardModule { }