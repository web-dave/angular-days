import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiLink',
})
export class SwapiLinkPipe implements PipeTransform {
  transform(url: string): string {
    return url.replace('https://swapi.dev/api/', '').slice(0, -1);
  }
}
