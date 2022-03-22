import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiLink',
})
export class SwapiLinkPipe implements PipeTransform {
  transform(url: string, absolute: boolean = false): string {
    console.log(url);
    return absolute
      ? url.slice(0, -1).split('/').splice(4, 2).join('/')
      : (url.slice(0, -1).split('/').pop() as string);
  }
}
