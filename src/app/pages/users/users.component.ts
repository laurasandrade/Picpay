import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.services';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  profiles: [];
  showModal: boolean;
  profileNameModal: string;
  profileIDModal: string;

  private isVisible = false;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getAll().subscribe((data) => {
      this.profiles = data;
    });
  }

  appear(visible) {
    this.isVisible = !(visible !== false);
  }
  eventClick(profileName: any, profileId: any) {
    this.showModal = true;
    this.profileNameModal = profileName;
    this.profileIDModal = profileId;

  }
  hide() {
    this.showModal = false;
  }




}
