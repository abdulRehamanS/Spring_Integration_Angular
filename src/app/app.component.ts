import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularIntergrationWithSpringBoot';

  msg: string = 'Welcome to angular ';

  constructor(@Inject(HttpClient) private httpclient: HttpClient) {}

  onclick() {
    this.httpclient
      .get('http://localhost:9090/', { responseType: 'text' })
      .subscribe((res) => {
        this.msg = res;
      });
  }

  Wish() {
    this.httpclient
      .get('http://localhost:9090/wish', { responseType: 'text' })
      .subscribe((respos) => {
        this.msg = respos;
      });
  }
}
