
# Custom Pipes in Angular
## Why do we need custom Pipes?
Custom Pipes can be used if the built-in Pipes from Angular, do not transform the data as we expect.
In this example, we built a custom Pipe that checks if the provided name is undefined, if the name is undefined, then a fallback name will be rendered. We will also implement an optional parameter, if we want to display a female name or male name.
 ## How do we create  a custom Pipe?
 Custom Pipes can be created with the powerful Angular CLI
 `ng generate pipe pipeName`
 ## Custom Pipe Example
```
import { Pipe, PipeTransform } from  '@angular/core';

@Pipe({
	name: 'fallbackName'
})
export  class  FallbackNamePipe  implements  PipeTransform {

	transform(value: any, gender?: string): string {
		if (!value) {
			if (gender) {
				if (gender  ==  "male") {
					return  "Bob";
				} else  if (gender  ==  "female") {
					return  "Alice";
				}
			}
			return  "Harper";
		} 
		return  value;
	}

}
```
 ## How to use our custom Pipe in our template
 ```
<h1>Custom Pipes</h1>
<div  class="container">
	<p>
		without custom pipe and defined name: <b>{{ name }}</b>
	</p>
</div>
<hr />
<div  class="container">
	<p>
        with custom pipe, <b>undefined</b> name and <b>"female"</b> parameter:
        <b>{{ undefinedName  |  fallbackName : "female" }}</b>
	</p>
	<p>
        with custom pipe, <b>undefined</b> name and <b>"male"</b> parameter:
        <b>{{ undefinedName  |  fallbackName : "male" }}</b>
	</p>
	<p>
        with custom pipe, <b>undefined</b> name and <b>no</b> parameter:
        <b>{{ undefinedName  |  fallbackName }}</b>
	</p>
</div>
```