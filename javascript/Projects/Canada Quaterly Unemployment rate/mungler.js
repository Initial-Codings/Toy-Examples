//Array with the html names
var htmlNames = ["SHM","SSQ","STM","OOO","KPO","THS","KBG","LWB","GTW","RS","CEK","AVV"];

for (var i = 0; i < htmlNames.length; i++) {
  d3.html("http://localhost:8000/_sources/data/"+htmlNames[i]+".htm",
  function(error,data){
    var dataCell;
        rowData;
        metros = [];

    // check for data load
    if(error){
      console.log(error);
    } else{
      console.log("Sucesss:Data Loaded");
    }

    // getting the required rows
    rowData = [].map.call(data.querySelectorAll("tr"),function(d){
      return d;
    });
    rowData.splice(0,2);
    rowData.pop();

    // getting the required data from rows
    dataCell = [].map.call(rowData,function(d){
      return [d.children[0].innerText,d.querySelector("td[headers ~=tbl-dltableheader-1-3] strong")];
    });

    //structures the data
    for(var i = 0; i < dataCell.length; i++) {
     if(dataCell[i][dataCell[i].indexOf(null)] === null) {
       metros.push({metropolitan: dataCell[i].slice(0,1),
                    stats: dataCell.slice(i+1,i+7).map(function(d){
                      return [d[0],parseFloat(d[1].innerText)];
                    })
                  });
     }else{
       continue;
     }
    }
    console.log(metros);
    });
}
