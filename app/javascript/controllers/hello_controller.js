import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "modal"]
  static values = { chartParam: String }; // Define chartParamValue
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log("Hello World!");
    this.modal = document.getElementById("modal");
    // this.chart();
  }
  greet(){
    console.log(`Hello ${this.nameTarget.value}!`)
  }

  open(event) {
    this.chart(event);
    this.modal.classList.remove("hidden");
  }

  close() {
    this.modal.classList.add("hidden");
  }
  chart(event) {
    // console.log("Stimulus received click event.");
    let type = event.target.dataset.helloChartParam || "daily";
    // console.log("Selected chart type:", type);
    // let type = this.hasChartParamValue ? this.chartParamValue : 'daily'; // Default to 'daily'
  
    let data;
    if (type === 'daily') {
      data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ]);
    } else if (type === 'weekly') {
      data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Week'],
        ['Work', 55],
        ['Eat', 14],
        ['Commute', 10],
        ['Watch TV', 10],
        ['Sleep', 49]
      ]);
    } else if (type === 'monthly') {
      data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Month'],
        ['Work', 240],
        ['Eat', 60],
        ['Commute', 40],
        ['Watch TV', 50],
        ['Sleep', 210]
      ]);
    }
  
    let options = {
      title: `My ${type.charAt(0).toUpperCase() + type.slice(1)} Activities`,
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
  
}
