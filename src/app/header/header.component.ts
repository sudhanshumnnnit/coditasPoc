import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';



interface Category {
    name: string;
    code: string;
    asc: boolean;
}
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    sortCategories: Category[];
    selectedCategory: Category;
    selectCategory() {
        this.userService.changeCat(this.selectedCategory);
    }

    constructor(private userService: UserService) {
        this.sortCategories = [
            { name: 'Name (A-Z)', code: 'login', asc: true },
            { name: 'Name (Z-A)', code: 'login', asc: false },
            { name: 'Rank (Asc)', code: 'score', asc: true },
            { name: 'Rank (Dsc)', code: 'score', asc: false }

        ];
    }

    onKey(value) {
        console.log(value);
        this.userService.changeSearch(value);
    }
    ngOnInit() {
    }

}
