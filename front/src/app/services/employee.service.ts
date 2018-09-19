import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class EmployeeService {

  public url = environment.apiBaseUrl;
  public token: string;

  constructor(private authHttp: AuthHttp,
    private http: HttpClient) { }

 /* getEmployees() {
    return this.http.get(this.url + '/employee')
    .map((response: Response) =>
      response
    );
  }*/

  getEmployee(){
    return this.http.get(this.url + '/employee/2')
      .map((response: Response) =>
        response
      );
  }

}
