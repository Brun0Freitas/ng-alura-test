import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';

describe(PhotoListComponent.name, () => {
    let fixture: ComponentFixture<PhotoListComponent>;
    let component: PhotoListComponent;
    let service: PhotoBoardService

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(PhotoBoardService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('(D) should display board when data arrived', () => {
        const photos = buildPhotoList();
        spyOn(service, 'getPhotos').and.returnValue(of(photos));
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should display board').not.toBeNull();
        expect(loader).withContext('Should not display loader').toBeNull();
    })

    it('(D) should display loader while waiting for data', () => {
        const photos = buildPhotoList();
        spyOn(service, 'getPhotos').and.returnValue(null);
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should not display board').toBeNull();
        expect(loader).withContext('Should display loader').not.toBeNull();
    })
})