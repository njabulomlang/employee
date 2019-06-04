import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './model/employee';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {
  transform(value: Array<employee>, args?: any): any {
   if(!args)
   {
     return value;
   }
    args = args.toLowerCase()
    return value.filter(employee => {
      return employee.name.toLowerCase().includes(args);      
    });
  }

}
