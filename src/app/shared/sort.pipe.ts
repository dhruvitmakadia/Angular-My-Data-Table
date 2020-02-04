import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  /**
   * @param value data that have to sort
   * @param expression name of the field: name, mobile, email etc
   * @param reverse flag represent reverse or not
   */
  transform(value: any[], expression?: any, reverse?: boolean): any {
    const array: any[] = value.sort((a: any, b: any): number => {
      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }

}
