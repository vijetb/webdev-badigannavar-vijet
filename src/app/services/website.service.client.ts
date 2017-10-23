import { Injectable } from '@angular/core';
import { Website } from '../model/website.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  createWebsite(userId: String , website: Website) {
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWebsiteById(websiteId: String) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId: String, website: Website) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId: String) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}
