import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  showDetais = false;
  reposDetails: any
  users: any;
  name = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentsearch.subscribe(value => {
      console.log("in content", value);
      this.searchUsers(value);
    });
  }

  searchUsers(value) {
    this.userService.getUsers(value).subscribe(user => {
      this.users = user;
      console.log("in searchfun", user);
    });
  }
  details(user) {
    this.name=user.login;
    this.reposDetails=[];
    this.userService.getAllRepo(user.repos_url).subscribe(repos => {
      this.reposDetails = repos;
      console.log("repos",repos);
    });
    this.showDetais = !this.showDetais;
  }

}
