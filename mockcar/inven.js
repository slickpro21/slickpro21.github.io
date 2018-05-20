//Dynamically Fill Inventory Table

$(function() {
    var car = $("<td></td>").text("2011 BMW 328XI");
    var des = $("<td></td>").text("3.0L 6Cyl. 60k Miles");
    var price = $("<td></td>").text("$10,000");
    $("#bmw").append(car);
    $("#bmw").append(des);
    $("#bmw").append(price);
});


$(function() {
	var car = $("<td></td>").text("2010 Camaro LT");
	var des = $("<td></td>").text("3.6L 6Cyl. 65kMiles");
	var price = $("<td></td>").text("$15,000");
	$("#camaro").append(car);
	$("#camaro").append(des);
	$("#camaro").append(price);
});

$(function() {
	var car = $("<td></td>").text("2011 Ford F-150 SUPERCREW");
	var des = $("<td></td>").text("3.5L 6Cyl. 80k Miles");
	var price = $("<td></td>").text("$20,000");
	$("#ford").append(car);
	$("#ford").append(des);
	$("#ford").append(price);
});

$(function() {
	var car = $("<td></td>").text("2008 Jeep Wrangler RUBICON");
	var des = $("<td></td>").text("3.8L 6Cyl. 70k Miles");
	var price = $("<td></td>").text("$18,000");
	$("#jeep").append(car);
	$("#jeep").append(des);
	$("#jeep").append(price);
});

$(function() {
	var car = $("<td></td>").text("2012 VW GTI AUTOBAHN");
	var des = $("<td></td>").text("2.0L 4Cyl. 80k Miles");
	var price = $("<td></td>").text("$12,000");
	$("#vw").append(car);
	$("#vw").append(des);
	$("#vw").append(price);
});

// Search Filter

function invenFilter() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// Tax Calc

$('#sub_tot').change(function(){
    $('#tax').val( ($(this).val()*.08).toFixed(2) );
}).change()
