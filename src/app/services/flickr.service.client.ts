import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class FlickrService {

  KEY = '3c46a95f7012686cb4c76cb2ffa96f21';
  SECRET = 'fcf33394729a197b';
  BASE_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=' + this.KEY + '&text=';

  constructor(private http: Http) {}

  getImages(searchText: String) {
    return this.http.get(this.BASE_URL + searchText)
      .map((res: Response) => {
          return res.text();
        }
      );
  }

}

