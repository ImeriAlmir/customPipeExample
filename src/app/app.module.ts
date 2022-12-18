import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FallbackNamePipe } from './shared/fallback-name.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FallbackNamePipe,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
