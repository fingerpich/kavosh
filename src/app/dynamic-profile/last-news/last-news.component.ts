import { Component, OnInit } from '@angular/core';
import {DynamicProfileServices} from "../dynamic-profile-services";

@Component({
  selector: 'kavosh-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss'],
})
export class RecentNewsComponent implements OnInit {
  recentNews=[];
  ngOnInit() {
    this.profileService.getRecentNews(3)
      .subscribe(
        data => this.recentNews = data,
        err => {console.log(err)},
        () => console.log('last News Completed')
      );
  }

  constructor(private profileService:DynamicProfileServices) {
  }
}
