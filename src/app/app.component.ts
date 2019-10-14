import { Component, OnInit } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "custom-angular-material";

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.overlayContainer
      .getContainerElement()
      .classList.add("myOwnColorClass");
  }
}
