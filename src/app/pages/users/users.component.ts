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

  public isVisible: boolean = true;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getAll().subscribe((data) => {
      this.profiles = data;
    });
  }

  onTap() {
      if (this.isVisible) {
          this.isVisible = false;
      } else  {
          this.isVisible = true;
      }
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
