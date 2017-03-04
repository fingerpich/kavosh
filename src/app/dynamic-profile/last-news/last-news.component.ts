import { Component, OnInit } from '@angular/core';
import {DynamicProfileServices} from "../dynamic-profile-services";

@Component({
  selector: 'kavosh-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss'],
})
export class LastNewsComponent implements OnInit {
  lastNews=[];
  ngOnInit() {
  }

  constructor(private profileService:DynamicProfileServices) {
    this.profileService.getLastNews()
      .subscribe(
        data => this.lastNews = data,
        err => {console.log(err)},
        () => console.log('last News Completed')
      );
  }
}
