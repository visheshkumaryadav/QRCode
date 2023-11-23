import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrcode';
url:SafeUrl=''
  onCodeChange(url:SafeUrl){
  console.log(url);
  this.url=url;
  }
}
