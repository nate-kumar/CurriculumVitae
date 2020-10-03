import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayUtilityService {

  constructor() { }

  uniqueValuesFromArray(array, prop) {
    const arrayValues = [];

    array.forEach((el) => {
      arrayValues.push(el[prop]);
    });
    return new Set(arrayValues);
  }

}
