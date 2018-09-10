import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  catagoryObj;
  showDetais = false;
  reposDetails: any
  users: any;
  name = '';
  totalRecords = 0;
  rows = 0;
  first = 0;
  page = 0;
  pageCount = 0;
  constructor(private userService: UserService) {
    this.userService.search(this.userService.currentsearch)
      .subscribe(user => {
        this.users = user;
        this.paginationConfiguration();
      });
  }

  ngOnInit() {
    this.userService.catSearch.subscribe(category => {
      this.catagoryObj = category;
    });
  }

  searchUsers(value) {
    this.userService.getUsers(value).subscribe(user => {
      this.users = user;
      this.paginationConfiguration();
    });
  }

  details(user) {
    this.name = user.login;
    this.reposDetails = [];
    this.userService.getAllRepo(user.repos_url).subscribe(repos => {
      this.reposDetails = repos;
    });
    this.showDetais = !this.showDetais;
  }
  paginationConfiguration() {
    this.totalRecords = this.users.items.length;
    this.rows = 5;
  }

  paginate(event) {

    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page;
    this.pageCount = event.pageCount;

  }

}
