//Array with the html names
var htmlData = ["SHM","SSQ","STM","OOO","KPO","THS","KBG","LWB","GTW","RS","CEK","AVV"];
var parsedData = [] //array with the parsed data from each html file
// var municipalObj = [];
//html parsing function
/* @param {array} an array with html file names
   @param {interger} index of the file names
   @return {object} containing unemplomentpercent{string} and metropolitan{string} attributes
*/
function htmlMungler(arr,h){
  // store the required data within html
  var municipalObj = [];
  d3.html("_sources/data/"+arr[h]+".htm").get(function(error,html){
  // All the rows for the table in HTML
  var rows = html.querySelectorAll("tr"),
      metropoli =[],
      unEmpPerc =[];

  // parsing the required data Unemployment rate and Metropolitan area
  for(var r = 0; r < rows.length; r++){
    if(rows[r].querySelectorAll("th[class|=cst-tbl-r1] strong").length == 1){
      metropoli.push(rows[r].firstElementChild.innerText);
    }
    else if(rows[r].querySelectorAll("td[class|=cst-tbl-r1] strong").length == 1){
      metropoli.push(rows[r].firstElementChild.innerText);
    }
    else if (rows[r].firstElementChild.innerHTML == "Unemployment rate (%)") {
      unEmpPerc.push(rows[r].querySelector("td strong").innerHTML);
    }
  }

  // object array with required data
  for (var j = 0; j < metropoli.length; j++){
    municipalObj.push({metropolitan: metropoli[j],unemplomentpercent:unEmpPerc[j]});
  }
     console.log(municipalObj[0].unemplomentpercent);
  });
  // return municipalObj; // return required data within html

}

// fills parsedData

for(var f = 0; f < htmlData.length; f++){
  parsedData.push(htmlMungler(htmlData,f));
}

// console.log(parsedData)
