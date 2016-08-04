function getData()
{
var data = '{"data":{"parent":'


+'['+

'{"pin":"4567","name":"Maria Lomax",'+
' "child":['+
'{"id":"1", "name":"Veronique"},'+
'{"id":"2", "name":"Bonnie"},'+
'{"id":"3", "name":"Ben"}'+
']'+
'},'+

'{"pin":"1111","name":"Jay Singh",'+
' "child":['+
'{"id":"1", "name":"Mahindra"},'+
'{"id":"2", "name":"Jaya"}'+
']'+
'},'+

'{"pin":"1234","name":"Harry Wang",'+
' "child":['+
'{"id":"1", "name":"Scott"},'+
'{"id":"2", "name":"Mary"}'+
']'+
'},'+

'{"pin":"0000","name":"Sally Sparrow",'+
' "child":['+
'{"id":"1", "name":"Sophia"},'+
'{"id":"2", "name":"Mika"}'+
']'+
'}'+


']'+

'}}';


var obj = eval ("(" + data + ")");

return obj ;
}

function getParentData(enteredPin)
{
	var result;
	var data = getData();
	var parents = data.data.parent;
	for (var i = 0; i < parents.length; i++)
		{
			if(enteredPin == parents[i].pin)
			{
				result = parents[i];
				break;
			
			}
		}	
	
	return result;
}


function isValidParent(enteredPin)
{
	var result = false;
	var data = getData();
	var parents = data.data.parent;

	for (var i = 0; i < parents.length; i++)
		{
			if(enteredPin == parents[i].pin)
			{
				result = true;
				break;
			
			}
		}


	return result;

}

function isValidParentX(enteredPin)
{
	  try{
	  var result = false;
	  var Connect = new XMLHttpRequest();
	  Connect.open("GET", "data.xml", false);
	  Connect.setRequestHeader("Content-Type", "text/xml");
	  Connect.send(null);
	  var TheDocument = Connect.responseXML;
	  Connect = null;
	  var data = TheDocument.childNodes[0];
	  var parents = data.getElementsByTagName("parent");
	  for (var i = 0; i < parents.length; i++)
	  {
		if(parents[i].attributes[0].value == enteredPin)
		{
		result = true;
		break;
		}
	  }
	  return result;
}
  catch (e) {
       alert(e.message);

	return false;
}

}