import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string | null): unknown {
    if(value){
      return value
    }
    return "assets/product_placeholder.jpg";
  }

}
