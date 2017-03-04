import { Component, OnInit } from '@angular/core';
import {DynamicProfileServices} from "../dynamic-profile-services";

@Component({
  selector: 'kavosh-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
  recentPosts:Array<Object>;
  constructor(private profileService:DynamicProfileServices) { }

  ngOnInit() {
    this.profileService.getRecentPosts(3)
      .subscribe(
        data => this.recentPosts = data,
        err => {console.log(err)},
        () => console.log('recent post Completed')
      );
  }

}
