function Function1() 
{ 
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function Function2()
{
  document.getElementById('myImage').src='images/pic_bulbon.gif'
}

function Function3()
{
  document.getElementById('myImage').src='images/pic_bulboff.gif'
}

function Function4()
{
  document.getElementById('example3').style.fontSize='35px'
  document.getElementById('example3').style.color='green'
  document.getElementById('example3').style.backgroundColor='yellow'
}

function Function5()
{
  var x = document.getElementById('example4');
  if (x.style.display == "none") 
  {
    x.style.display = "block";
  }
  else 
  {
    x.style.display = "none";
  }
}





function ContentShow(element) 
{
  var x = document.getElementById(element);
  if (x.style.display == "none") 
  {
    x.style.display = "block";
  }
  else 
  {
    x.style.display = "none";
  }
}


