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
      .subscribe((response) => console.log('response is ', response));
  }

  // Post request, please update 
  addItems() {
    return this.http
      .post<any>('/api/OrderManagement', {
        id: 677278,
        uuid: '',
        accountId: 275638,
        orderDate: '5/11/22',
        orderStatus: 'ordered',
        orderName: 'proxyConfirm',
        downloadLink: '',
        imageOutputFormat: '',
        notificationEmailAddress: 'proxy@example2.com',
        continuousIntegration: true,
        continuousDelivery: true,
        release: true,
        edition: '',
        version: '',
        arch: '',
        lcid: '',
        optionalFeaturestring: '',
        appxPackagesstring: 'testing',
        windowsDefaultAccount: 'fathe',
        windowsDefaultPassword: 'hsuusu',
        customRegistryKeys: ['testing it'],
        applicationUID: ['535355test'],
        driversUID: ['testing'],
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

// i
