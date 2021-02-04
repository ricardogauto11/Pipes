import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiden'
})
export class HidenPipe implements PipeTransform {

  transform(value: string, hide: boolean = true): unknown {
    return (hide) ? '*'.repeat(value.length) : value;
  }

}
