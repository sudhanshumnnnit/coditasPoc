import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { UserService } from '../services/user.service';



interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    cities: City[];

    selectedCity: City;

    cars: SelectItem[];

    selectedCar1: string;

    selectedCar2: string = 'BMW';

    selectedCar3: string;

    // groupedCars: SelectItemGroup[];
    constructor(private userService: UserService) {
        this.cities = [
            { name: 'Name (A-Z)', code: 'NY' },
            { name: 'Name (Z-A)', code: 'RM' },
            { name: 'Rank (Asc)', code: 'LDN' },
            { name: 'Rank (Dsc)', code: 'IST' }

        ];

        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

    }

    onKey(value) {
        console.log(value);
        this.userService.changeSearch(value);
    }
    ngOnInit() {
    }

}
