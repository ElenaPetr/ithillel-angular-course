import { IProduct } from './../../interfaces/product.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticPipe'
})
export class AlphabeticPipePipe implements PipeTransform {

  public transform(value: IProduct[], args?: boolean): IProduct[] {
    if (!value) {
      return [];
    }
    return value.sort((a: IProduct, b: IProduct) => {
      return args ? (a.title > b.title ? -1 : 1) : (a.title < b.title ? -1 : 1);
    });
  }

}
