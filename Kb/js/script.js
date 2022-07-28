import { exportFile , CSV_FILE } from "fs-browsers";

document.addEventListener("DOMContentLoaded",
  function (event) {

    function test(output) {
      //import { exportFile , CSV_FILE } from "fs-browsers";
      // const data = [{ "id": 5, "name": "John", "grade": 90, "age": 15 }, { "id": 7, "name": "Nick", "grade": 70, "age": 17 }];
      const headings = ["City", "Canton", "ZIP"];
      exportFile(output, { type: CSV_FILE, headings: headings, fileName: 'grades.csv' });
      
      return ;
    };
    
    function saveInput (event) {
      //this.textContent = "Said it!"; // It Changes the value of the button
      //var name_city = document.getElementById("input_param_1").value;
      const name_city = []
      for (i = 0;i < 3; i++){
        var input_name = "input_param_"+(i+1);
        //name_city[i] = document.getElementById("input_param_${i}").value;
        name_city[i] = document.getElementById(input_name).value;
        console.log(input_name)
      }

      console.log(name_city)

      console.log(test(name_city));


    // const fs = require('fs')
    // fs.writeFile('/test.txt', output, err => {
    // if (err) {
    //   console.error(err)
    //   return
    // };
    // })



      document
        .getElementById("content")
        .innerHTML = "<h2>Input Saved</h2>";
    }

    // Unobtrusive event binding
    document.querySelector("#bt1")
      .addEventListener("click", saveInput);
  }
)

