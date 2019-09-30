import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


// Component
@Component ({
    selector: 'hello-world', // html custom tag
    template: '<h1>Hello {{name}}!</h1>'
})

class HelloWorldComponent { // Represents component
    name: string;

    constructor() {
        this.name = 'Angular';
    }
}

// Module
@NgModule({
    imports: [BrowserModule],
    declarations: [HelloWorldComponent],
    bootstrap: [HelloWorldComponent]
})
export class AppModule { } // Class representing module

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);