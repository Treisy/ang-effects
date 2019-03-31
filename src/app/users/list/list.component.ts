import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  usersList: User[] = [];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe( users => {
        console.log(users);
        this.usersList = users;
      });
  }

}
