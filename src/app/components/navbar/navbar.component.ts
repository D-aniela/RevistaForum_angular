import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent{
    public fecha = new Date("2020-10-27T12:39:57").toString();
}