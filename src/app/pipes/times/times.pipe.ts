import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'times'
})
export class TimesPipe implements PipeTransform {
    public transform(arraySize: number, args?: any): number[] {
        return Array(arraySize).fill(0).map((_, index) => index);
    }
}
