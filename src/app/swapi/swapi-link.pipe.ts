import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiLink',
})
export class SwapiLinkPipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (Array.isArray(value)) {
      value = value[0];
    }
    return value.split('/').at(-2) + '';
  }
}
