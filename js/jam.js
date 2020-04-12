window.onload = function() 
{ 
    jam(); 
}

function jam() 
{
  var j = document.getElementById('jam'),
  d = new Date(), h, m, s;
  h = d.getHours();
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  j.innerHTML = h +':'+ m +':'+ s;

  setTimeout('jam()', 1000);
}

 function set(j) 
{
  j = j < 10 ? '0'+ j : j;
  return j;
}