import { Injectable, Injector, enableProdMode } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppConfigService {
  constructor() {}
  loadAppConfig() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("In initApp");

        resolve({
          primaryColor: "#a8353a",
          secondaryColor: "#003d69",
          fontName: "Roboto"
        });
      }, 1000);
    });
  }
}
