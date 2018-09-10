import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(users: any, args?: any): any {
    let direction = args.asc ? 1 : -1;
   // console.log("usere in pipe",args);
    return users.sort(function (a, b) {
      if (a[args.code] < b[args.code]) {
        return -1 * direction;
      }
      else if (a[args.code] > b[args.code]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
   // return null;
  }

}
