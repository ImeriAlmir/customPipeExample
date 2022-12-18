import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fallbackName'
})
export class FallbackNamePipe implements PipeTransform {

    transform(value: any, gender?: string): string {
        if (value) {
            if (gender) {
                if (gender == "male") {
                    return "Bob";
                } else if (gender == "female") {
                    return "Alice";
                }
            }
            return "Harper";
        }

        return "Dave";
    }

}
