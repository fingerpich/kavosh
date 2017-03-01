import {Component, OnInit, Input} from '@angular/core';
import {DynamicProfileServices} from "../dynamic-profile-services";

@Component({
  selector: 'kavosh-related-box',
  templateUrl: './related-box.component.html',
  styleUrls: ['./related-box.component.scss'],
  providers: [DynamicProfileServices]
})
export class RelatedBoxComponent implements OnInit {

  @Input('type') relatedType: string;
  @Input('name') groupName: string;
  relatedList=[];
  constructor(private profileService:DynamicProfileServices) { }

  ngOnInit() {
    this.profileService.getProfile(3)
      .subscribe(
        data => this.relatedList = data[this.relatedType],
        err => {console.log(err)},
        () => console.log('related List received')
      );
  }

}
