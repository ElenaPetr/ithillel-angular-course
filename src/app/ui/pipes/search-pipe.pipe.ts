import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  public transform(products: IProduct[], term: string): IProduct[] {
    if (!products) {
      return [];
    }

    if (!term) {
      return products;
    }

    return products.filter((product: IProduct) => {
      return `${product.title.toLowerCase()}${product.description.toLowerCase()}`
        .includes(term.toLowerCase());
    });
  }

}
