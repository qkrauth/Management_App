import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: String) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient 
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Hello Bean Service");
    
  }

  executeHelloWorldBeanServiceWithPathVariable(name: String) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Hello Bean Service");
    
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'qkrauth';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }

  // Access to XMLHttpRequest at
  // 'http://localhost:8080/hello-world/path-variable/qkrauth'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // Access to XMLHttpRequest at
  // 'http://localhost:8080/hello-world/path-variable/qkrauth'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // Response to preflight request doesn't pass access control check:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

}
