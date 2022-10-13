var list1=[];
var list2=[];
var n=1;
var x=0;

function addRow(){
  var table = document.getElementById("formTable");
  var row = table.insertRow(n);
  
  list1[x] = document.getElementById("nim").value;
  list2[x] = document.getElementById("nama").value;

  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);
  var cel3 = row.insertCell(2)
  cel1.innerHTML = n;
  cel2.innerHTML = list1[x];
  cel3.innerHTML = list2[x];

  n++;
  x++;
}