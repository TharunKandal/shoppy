import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlTransform',
})
export class UrlTransform implements PipeTransform {
  transform(string: String): String {
    return string
      .toLocaleLowerCase()
      .trim()
      .replace(/'/g, '')
      .replace(/[^\w\-]+/g, ' ')
      .replace(/\s+/g, '-');
  }
}
