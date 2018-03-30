//dataHandler

d3.csv("Developer_Arterial_Projects.csv").get(function(error,data){
  //console.log(data);
  // setup
  var height =  200,
      barWidth = 50,
      svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%"),
      margin = {left:50, top:40, right:50, bottom:0},
      chartGroup = svg.append("g").attr("class","chart")
               .attr("transform","translate("+margin.left+","+margin.top+")"),
  //data processing
      construction = 0,
      design = 0,
      concept = 0;

  for(var p = 0; p < data.length; p++){

    if(data[p]["PROJECT STAGE"] == "Construction"){construction += 1;}
    else if(data[p]["PROJECT STAGE"] == "Design"){design += 1;}
    else if(data[p]["PROJECT STAGE"] == "Concept"){concept += 1;}
  }

       stages = [construction, design, concept];
  //console.log(stages);

  //bar chart
  var y = d3.scaleLinear()
            .domain([0,d3.max(stages) + 2])
            .range([height,0]),
      //generator
      yAxis = d3.axisLeft(y),
      // options are Ordinal, Points and Band
      stagesStr = ["Construction", "Design", "Concept"],
      x = d3.scaleBand()
            .domain(stagesStr)
            .range([0,170])
            .paddingInner(0.1176),
      xAxis = d3.axisBottom(x);

  chartGroup.selectAll("rect")
     .data(stages)
     .enter().append("rect")
        .attr("height",function(d,i){ return height - y(d); })
        .attr("width",barWidth)
        .attr("x",function(d,i){ return 60*i; })
        .attr("y",function(d,i){ return y(d); });

  chartGroup.append("g").attr("class","y axis").call(yAxis);
  chartGroup.append("g").attr("class","x axis hidden")
            .attr("transform","translate(0,"+height+")").call(xAxis);
})
