import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() titleId;

  constructor() {}

  ngOnInit() {}

  // Returns true when user is looged in and home page is verified
  get isHomePage(): boolean {
    return this.titleId === "RF$\u2122 Home" ? true : false;
  }
}
