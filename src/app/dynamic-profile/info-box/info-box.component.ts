import { Component, OnInit } from '@angular/core';
import {DynamicProfileServices} from "../dynamic-profile-services";

@Component({
  selector: 'kavosh-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  profileInfo={};

  constructor(private profileService:DynamicProfileServices) {
  }

  ngOnInit() {
    this.profileService.getProfile(3)
      .subscribe(
        data => this.profileInfo = data,
        err => {console.log(err)},
        () => console.log('last News Completed')
      );
  }

}
