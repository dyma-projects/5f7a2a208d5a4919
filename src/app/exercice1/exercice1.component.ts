import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component {
  num: number;
  color: String = "color:pink";
  constructor() {
    this.num = 1;
  }
  incrementer() {
    this.num = this.num + 10 * Math.random();
  }
}
