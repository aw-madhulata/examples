import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "modal"]
  connect() {
    // this.element.textContent = "Hello World!"
    console.log("Hello World!");
    this.modal = document.getElementById("modal");
  }
  greet(){
    console.log(`Hello ${this.nameTarget.value}!`)
  }

  open() {
    this.modal.classList.remove("hidden");
  }

  close() {
    this.modal.classList.add("hidden");
  }
}
