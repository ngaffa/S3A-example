import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVMIEdBRkEgTkFPVUZBTCIsImFkbWluIjp0cnVlLCJqdGkiOiIxOGI2ZTdjMS00NzJiLTQ5NDctYTAyYS1hZmU5YzA3ZjdmNmQiLCJpYXQiOjE2MDg3NTE2NTEsImV4cCI6MTYwODc1NjEzOX0.Kx9s5ozJl9tN87yYHKDyVNja3mK3t4FN_PrGYHaXavQ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 's3m-example';
  items: Observable<any[]>;
  /**
   *
   */
  constructor(private httpclient: HttpClient) {}

  // The best practice is to define a service that call backend api
  // And to make an interceptor that add the generated token to the request header
  // But for saving time, in this tuto i will make him here because is not a tuto about Angular
  getAll() {
    // Generate token example
    console.log('token');
    this.items = this.httpclient
      .get<any[]>(`${environment.baseURL}WeatherForecast`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe();
  }
}
