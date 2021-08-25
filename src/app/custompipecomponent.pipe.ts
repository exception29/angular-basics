import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipecomponent'
})
export class CustompipecomponentPipe implements PipeTransform {

  // implicitly called
  transform(num : number): number {
    return num * num;
  }

}
