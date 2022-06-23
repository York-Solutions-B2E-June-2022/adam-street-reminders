import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finishedText'
})
export class FinishedTextPipe implements PipeTransform {
  transform(value: unknown, ...args: any[]): unknown {
    console.log(args);

    var result = "Todo";
    if (value) result = "Finished"

    if (args[0] === true) {
      result = result.toUpperCase();
    }

    return result;
  }
}
