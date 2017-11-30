import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { FlickrService } from '../../../../../services/flickr.service.client';

@Component({
  selector: 'app-img-search-flickr',
  templateUrl: './img-search-flickr.component.html',
  styleUrls: ['./img-search-flickr.component.css']
})
export class ImgSearchFlickrComponent implements OnInit {

  constructor(private widgetService: WidgetService, private flickrService: FlickrService, private activatedRoute: ActivatedRoute, private router: Router) { }

  userId: String;
  websiteId: String;
  widgetId: String;
  pageId: String;

  searchText: String;
  images= [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
  }

  goBack() {
      if (this.widgetId === 'new') {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', '2']);
      } else {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', '2', this.widgetId]);
      }
  }

  fetchImages() {
    this.flickrService.getImages(this.searchText).subscribe((res) => {
      let data = res.replace('jsonFlickrApi(', '');
      data = data.substring(0, data.length - 1);
      const tempImages = JSON.parse(data);
      this.images = tempImages.photos.photo;
    });
  }

  captureImage(i) {
    if (this.widgetId === 'new') {
      const widget =  {'widgetType': 'IMAGE', 'pageId': this.pageId,
        'url': 'https://farm' +  i.farm + '.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret + '_b.jpg', 'width': 100};
      this.widgetService.createWidget(this.pageId, widget)
        .subscribe((data) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    }else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'IMAGE', 'pageId': this.pageId,
        'url': 'https://farm' +  i.farm + '.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret + '_b.jpg', 'width': 100};
      this.widgetService.updateWidget(this.widgetId, widget)
        .subscribe((data) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    }
  }

}
