import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiLink',
})
export class SwapiLinkPipe implements PipeTransform {
  transform(url: string): string {
    return url.split('/').slice(0, -1).pop() as string;
  }
}
