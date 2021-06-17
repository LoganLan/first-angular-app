import { ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  secretMessage = false;
  displayLog = [];
  dateSecretMessage = false;
  dateDisplayLog = [];
  

  onDisplayDeezNutz() {
    this.secretMessage = !this.secretMessage;
    this.displayLog.push(this.displayLog.length + 1);
  } 

  onDisplayDeezNutzDate() {
    this.dateSecretMessage = !this.dateSecretMessage;
    this.dateDisplayLog.push(new Date());
  } 
  title = 'first-app';
}
