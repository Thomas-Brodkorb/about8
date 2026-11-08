
function goLite(FRM,BTN)
{
   window.document.forms[FRM].elements[BTN].style.color = "#AAAAAA";
   window.document.forms[FRM].elements[BTN].style.backgroundColor = "#EE0000";
   window.document.forms[FRM].elements[BTN].style.cursor="hand";
}

function goDim(FRM,BTN)
{
   window.document.forms[FRM].elements[BTN].style.color = "#FFFFFF";
   window.document.forms[FRM].elements[BTN].style.backgroundColor = "#CC0000";
}
function setImage(imgsrc)
{
	image = document.images["centralimage"];
	if (image) {
	  image.src = imgsrc;
	  image.hidden=false;

	} else {
	  console.log("image not found");
	}
}
function openYear(evt, yearName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(yearName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCurrentYear() {
	// hard coded: 2023, tabButtons[1]
	document.getElementById('2026').style.display = "block";
  
	tabButtons = document.getElementsByClassName("tablinks");
	firstButton = tabButtons[0];
	firstButton.className += " active";
}

let imagesAndText = [
  ["img/Kirche2020/IKMTVY.PNG","Stadtkirche"],
  ["img/IMG_9194-cropped.JPG","YouTubeLive1"],
  ["img/Flip-Flop-Flying.JPG","YouTubeLive2"],
  ["img/Garten2020/Garten6.JPG","Garten6"],
  ["img/Alle.jpg","all2text"],
  ["img/Literaturtage0.jpg","Literaturtage0"],
  ["img/Literaturtage1.jpg","Literaturtage1"],
  ["img/Literaturtage2.jpg","Literaturtage2"],
  ["img/Stimmfest_13_1.jpg","StimmFest131"],
  ["img/Stimmfest_13_2.jpg","StimmFest132"],
  ["img/Stimmfest_13_3.jpg","StimmFest133"],
  ["img/WieslochWeihnachtsmarkt_big.JPG","WieWeihtext"],
  ["img/Buergerstiftung1.JPG","BueSti1text"],
  ["img/Buergerstiftung2.JPG","BueSti2text"],
  ["img/TIKK1.JPG","TIKK1text"],
  ["img/TIKK2.JPG","TIKK2text"],
  ["img/TIKK3.JPG","TIKK3text"],
  ["img/TIKK4.JPG","TIKK4text"],
  ["img/TIKK5.JPG","TIKK5text"],
  ["img/sap1-big.jpg","sap1text"],
  ["img/sap2-big.jpg","sap2text"],
  ["img/sap3-big.jpg","sap3text"],
  ["img/all1_full.jpg","all1text"],
  ["img/girls1.jpg","girls1text"],
  ["img/girls2.jpg","girls2text"],
  ["img/boys1.jpg","boys1text"]];

  nextImageIndex = 0;
  function nextImage() {
    nextImageIndex = (nextImageIndex + 1) % imagesAndText.length;
    let [imgsrc, text] = imagesAndText[nextImageIndex];
    setImageAndText(imgsrc, text);
  }
function setImageAndText(imgsrc,text)
{
  document.images["centralimage"].src = imgsrc;
  if (text=="sap1text") {
    document.getElementById("centraltext").innerHTML=
    "Auf den &bdquo;SAP Diversity Days 2011&ldquo; vertrat "+
    "About8 vor gro&szlig;em Publikum aus aller Welt die  "+
    "deutsche Kultur. Zu diesem Anlass hatten wir ein Programm "+
    "mit rein deutschen Texten zusammengestellt.";
  } else if (text == "sap2text") {
    document.getElementById("centraltext").innerHTML=
    "&bdquo;Wanne&ldquo;: Der originelle Text &uuml;ber "+
    "fehlendes Wasser in der Wanne, das h&ouml;chstens "+
    "durch einen Zauber noch den Abend mit einer tollen "+
    "Frau retten kann, kam super an.";
  } else if (text == "sap3text") {
    document.getElementById("centraltext").innerHTML=
    "Ganz entspannt; wo ist die Acht?";
  } else if (text == "all1text") {
    document.getElementById("centraltext").innerHTML=
    "Wir lieben unsere Acht.";
  } else if (text == "all2text") {
    document.getElementById("centraltext").innerHTML=
    "2015, &bdquo;Ein Abend auf der Couch&ldquo; in der evangelische Kirche Gaiberg";
  } else if (text == "wistext") {
    document.getElementById("centraltext").innerHTML=
    "&bdquo;O du fröhliche&ldquo; ... Fast jedes Jahr sind wir auf dem Heidelberger Weihnachtsmarkt vertreten und sammeln Geld für einen guten Zweck.";
  } else if (text == "girls1text") {
    document.getElementById("centraltext").innerHTML=
    "Girls, girls, girls,... damals noch zu dritt";
  } else if (text == "girls2text") {
    document.getElementById("centraltext").innerHTML=
    "Girls, girls, girls,... die geliebte Acht";
  } else if (text == "boys1text") {
    document.getElementById("centraltext").innerHTML=
    "Drei unserer vier Jungs.";
  } else if (text == "boys2text") {
    document.getElementById("centraltext").innerHTML=
    "Drei unserer vier Jungs.";
  } else if (text == "TIKK1text") {
    document.getElementById("centraltext").innerHTML=
    "2012, Liebe und Cyberspace: Der Anfang unserer Geschichte spielte am Frankfurter Flughafen, wie man unschwer erkennt :-).";
  } else if (text == "TIKK2text") {
    document.getElementById("centraltext").innerHTML=
    "2012, Liebe und Cyberspace: Singen Frauen &uuml;ber M&auml;nner, k&ouml;nnen letztere nur staunen.";
  } else if (text == "TIKK3text") {
    document.getElementById("centraltext").innerHTML=
    "2012, Liebe und Cyberspace: Ob sich Victor und Thomas wohl verstecken m&uuml;ssen und wenn ja vor wem?";
  } else if (text == "TIKK4text") {
    document.getElementById("centraltext").innerHTML=
    "2012, Liebe und Cyberspace: &bdquo;...ich such im Netz diesen einen ...&ldquo;";
  } else if (text == "BueSti1text") {
    document.getElementById("centraltext").innerHTML=
    "Mai 2012: Stiftungsforum der B&uuml;rgerstiftung Wiesloch";
  } else if (text == "BueSti2text") {
    document.getElementById("centraltext").innerHTML=
    "Mai 2012: Stiftungsforum der B&uuml;rgerstiftung Wiesloch";
  } else if (text == "WieWeihtext") {
    document.getElementById("centraltext").innerHTML=
    "2012 Weihnachtsmarkt in Wiesloch";
  } else if (text == "StimmFest131") {
    document.getElementById("centraltext").innerHTML=
    "April 2013 Stimmfest von Human Nation in St. Leon-Rot";
  } else if (text == "StimmFest132") {
    document.getElementById("centraltext").innerHTML=
    "April 2013 Stimmfest von Human Nation in St. Leon-Rot";
  } else if (text == "StimmFest133") {
    document.getElementById("centraltext").innerHTML=
    "April 2013 Stimmfest von Human Nation in St. Leon-Rot";
  } else if (text == "Literaturtage0") {
    document.getElementById("centraltext").innerHTML=
    "30. September 2013 Er&ouml;ffnung der Badenw&uuml;rttembergischen "+
    "Literaturtage in Wiesloch im Palatin";
  } else if (text == "Literaturtage1") {
    document.getElementById("centraltext").innerHTML=
    "30. September 2013 Er&ouml;ffnung der Badenw&uuml;rttembergischen "+
    "Literaturtage in Wiesloch im Palatin";
  } else if (text == "Literaturtage2") {
    document.getElementById("centraltext").innerHTML=
    "30. September 2013 Ein voller Erfolg. &bdquo;Die Wanne&ldquo; vor "+
    "einem vollen Haus im Palatin";
  } else if (text == "Literaturtage3") {
    document.getElementById("centraltext").innerHTML=
    "30. September 2013 Zusammen mit den &bdquo;Maskottchen&ldquo; "+
    "der 30.ten Badenw&uuml;rttembergischen Literaturtage";
  } else if (text == "YouTubeLive1") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Vor dem ersten Live Stream";
  } else if (text == "YouTubeLive2") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Unbekanntes Flugobject passend zu "+
    "&bdquo;Flip Flop and Fly&ldquo;";
  } else if (text == "Garten1") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Zum ersten live gestreamt.";
  } else if (text == "Garten2") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Zum ersten live gestreamt.";
  } else if (text == "Garten3") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 &bdquo;Weit Weit Weg&ldquo; im World Wide Web";
  } else if (text == "Garten4") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Zum ersten live gestreamt.";
  } else if (text == "Garten5") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Aus dem Garten in die Welt";
  } else if (text == "Garten6") {
    document.getElementById("centraltext").innerHTML=
    "11. July 2020 Zum ersten mal live gestreamt.";
  } else if (text == "Stadtkirche") {
    document.getElementById("centraltext").innerHTML=
    "26. September 2020 Stadtkirche Wiesloch.";
  } else {
    document.getElementById("centraltext").firstChild.nodeValue="Ops ein Bild";
  }
}

function setVideo(youTubeLink) {
	document.getElementById("videos").src=youTubeLink;
}
