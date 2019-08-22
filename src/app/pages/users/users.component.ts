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
  card_number: number;
  cvv: number;
  value: number;
  expiry_date: string;
  destination_user_id: number;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getAll().subscribe((data) => {
      this.profiles = data;
    });
  }

  eventClick(model: any) {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }

  // onSubmit() {
  //   this.http.post('http://careers.picpay.com/tests/mobdev/transaction', JSON.stringify(this.data))
  //       .subscribe(...);
  // }
}
