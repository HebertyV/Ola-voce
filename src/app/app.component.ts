import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nome: string = "";
  updateValue(event: any) {
    this.nome = event.target.value;
  }
}
