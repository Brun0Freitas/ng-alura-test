import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PhotoBoardService } from './photo-board.service';

const mockData = {
    api: 'http://localhost:3000/photos',
    data: [
        {
            id: 1,
            description: 'example 1',
            src: ' '
        },
        {
            id: 2,
            description: 'example 2',
            src: ' '
        }
    ]
}

describe(PhotoBoardService.name, () => {
    let service: PhotoBoardService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PhotoBoardService]
        });

        service = TestBed.inject(PhotoBoardService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('#getPhotos should return photos with description upper case', done => {
        service.getPhotos().subscribe(photos => {
            expect(photos[0].description).toBe('EXAMPLE 1');
            expect(photos[1].description).toBe('EXAMPLE 2');
            done();
        });
        httpController.expectOne(mockData.api).flush(mockData.data);
    });
})