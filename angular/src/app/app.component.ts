import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cors-issues';
  data = [];
  id = 3;

  // products: Product[] = [];
  //theDataSource$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    //this.theDataSource$ = this.http.get<Product[]>('/api/products');
  }

  ngOnInit(): void {
    this.getItems();

    // Promise used for testing
    fetch('/api/OrderManagement')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  // Get request
  getItems() {
    return this.http
      .get<any>('/api/OrderManagement')
      .subscribe((response) => (this.data = response));
  }

  // Post request, please update
  addItems() {
    return this.http
      .post<any>('/api/OrderManagement', {
        id: this.id + Math.floor(Math.random() * 100),
        uuid:
          '3fa85f64-5717-4562-b3fc-2c963f66a6' +
          Math.floor(Math.random() * 100),
        accountId: 1,
        orderDate: 'string',
        orderStatus: 'string',
        orderName: 'string',
        downloadLink: 'string',
        imageOutputFormat: 'string',
        notificationEmailAddress: 'string',
        continuousIntegration: true,
        continuousDelivery: true,
        release: 'string',
        edition: 'string',
        version: 'string',
        arch: 'string',
        lcid: 'string',
        optionalFeaturestring: 'string',
        appxPackagesstring: 'string',
        windowsDefaultAccount: 'string',
        windowsDefaultPassword: 'string',
        customRegistryKeys: ['string'],
        applicationUID: ['string'],
        driversUID: ['string'],
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

// i
