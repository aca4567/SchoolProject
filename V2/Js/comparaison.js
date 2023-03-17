function checkInput(lvl) {
  var listresponse;
  var input;
  var error;

  listresponse = ["Akainu", "2", "3", "4", "5"];
  error = document.getElementById("error");
  input = document.getElementById("reponse");


  if (input != null) {
    input = input.value;
  }
  
  // Vérifier si la valeur de l'input est vide
  if (input != null) {
    if (input == listresponse[parseInt(lvl)]) {
      error.innerHTML = "true";
      error.style.color = "white";
      const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < 1000);
    }
  }
}

function setup(lvl) {
  // Déclaration des variables
  var body;
  var DivClassCountdown;
  var DivIdCountdown;
  var DivClasshy;
  var DivClassreponse;
  var h1ClassEnigme;
  var InputIdReponse;
  var DivClasscontainer;
  var Aclassbutton;
  var DivClassbutton__line;
  var DivClassbutton__line1;
  var SpanClassbutton__text;
  var DivClassbutton__drow1;
  var DivClassbutton__drow2;
  var DivIderror;
  var ScriptTime;
  var head;
  var QuestionSelector;
  var cssMenu;
  var ChangecssMenu;
  var a;

  // Assignation des variables
  body = document.body;
  head = document.head;
  a = document.createElement("a");
  QuestionSelector = ["Dans One piece quel est le nom de la personne ayant tuer Ace ?", "2", "3", "4", "5"];
  cssMenu = document.getElementById("cssMenu");
  

  // suppression du menu et css
  cssMenu.remove();
  if (body.hasChildNodes()) {
    BodyChild = body.childNodes;
    for (var i = 0; i < BodyChild.length;) {
      BodyChild[i].remove();
    }
  }

  // Création des Elements
  ChangecssMenu = document.createElement("link");
  DivClassCountdown = document.createElement("div");
  DivIdCountdown = document.createElement("div");
  DivClasshy = document.createElement("div");
  DivClassreponse = document.createElement("div");
  h1ClassEnigme = document.createElement("h1");
  InputIdReponse = document.createElement("input");
  DivClasscontainer = document.createElement("div");
  Aclassbutton = document.createElement("a");
  DivClassbutton__line = document.createElement("div");
  DivClassbutton__line1 = document.createElement("div");
  SpanClassbutton__text = document.createElement("span");
  DivClassbutton__drow1 = document.createElement("div");
  DivClassbutton__drow2 = document.createElement("div");
  DivIderror = document.createElement("div");
  ScriptTime = document.createElement("script");

  // Ajoue des attributs
  ChangecssMenu.setAttribute("rel", "stylesheet");
  ChangecssMenu.setAttribute("id", "cssMenu");
  ChangecssMenu.setAttribute("type", "text/css");
  ChangecssMenu.setAttribute("href", "../css/style.css");

  DivClassCountdown.setAttribute("class", "countdown");
  DivIdCountdown.setAttribute("id", "countdown");

  DivClasshy.setAttribute("class", "hy");
  DivClassreponse.setAttribute("class", "reponse");
  h1ClassEnigme.setAttribute("class", "Enigme");
  InputIdReponse.setAttribute("type", "text");
  InputIdReponse.setAttribute("name", "reponse");
  InputIdReponse.setAttribute("id", "reponse");
  InputIdReponse.setAttribute("placeholder", "Tapez votre réponse");
  DivClasscontainer.setAttribute("class", "container");
  Aclassbutton.setAttribute("href", "#");
  Aclassbutton.setAttribute("class", "button");
  Aclassbutton.setAttribute("onclick", "checkInput(" + lvl + ")");
  DivClassbutton__line.setAttribute("class", "button__line");
  DivClassbutton__line1.setAttribute("class", "button__line");
  SpanClassbutton__text.setAttribute("class", "button__text");
  DivClassbutton__drow1.setAttribute("class", "button__drow1");
  DivClassbutton__drow2.setAttribute("class", "button__drow2");
  DivIderror.setAttribute("id", "error");
  ScriptTime.setAttribute("type", "text/javascript");
  ScriptTime.setAttribute("src", "../Js/time.js");
  ScriptTime.setAttribute("id", "Time");
  a.setAttribute("onclick", "setupAccueil()");
  a.setAttribute("href", "#");
  a.innerHTML = "Retours";
  

  // Ajoue des textes
  DivIdCountdown.innerHTML = "5m 00s <script type=\"text/javascript\" src=\"../Js/time.js\"></script>";
  h1ClassEnigme.innerHTML = QuestionSelector[parseInt(lvl)];
  SpanClassbutton__text.innerHTML = "Entry";
  DivIderror.innerHTML = "false";

  // Connexion entre parents et enfants
  DivClassCountdown.appendChild(DivIdCountdown);

  DivClasshy.appendChild(DivClassreponse);
  DivClassreponse.appendChild(h1ClassEnigme);
  DivClassreponse.appendChild(InputIdReponse);
  DivClassreponse.appendChild(DivClasscontainer);
  DivClassreponse.appendChild(DivIderror);
  DivClasscontainer.appendChild(Aclassbutton);
  Aclassbutton.appendChild(DivClassbutton__line);
  Aclassbutton.appendChild(DivClassbutton__line1);
  Aclassbutton.appendChild(SpanClassbutton__text);
  Aclassbutton.appendChild(DivClassbutton__drow1);
  Aclassbutton.appendChild(DivClassbutton__drow2);

  // Ajoue sur la page
  body.appendChild(DivClassCountdown);
  body.appendChild(DivClasshy);
  head.appendChild(ScriptTime);
  head.appendChild(ChangecssMenu);
  body.appendChild(a);
}

function setupAccueil() {
  var body;
  var header;
  var aLogo;
  var imgLogo;
  var cssMenu;
  var head;
  var ul;
  var li;
  var a;
  var section;
  var img;
  var h2;
  var div;
  var p;
  var script;

  body = document.body;
  head = document.head;
  cssMenu = document.getElementById("cssMenu");
  script = document.getElementById("Time");
  
  // suppression du css et du contenu de body et js time
  cssMenu.remove();
  script.remove();
  if (body.hasChildNodes()) {
    BodyChild = body.childNodes;
    for (var i = 0; i < BodyChild.length;) {
      BodyChild[i].remove();
    }
  }

  cssMenu = document.createElement("link");
  cssMenu.setAttribute("rel", "stylesheet");
  cssMenu.setAttribute("type", "text/css");
  cssMenu.setAttribute("href", "../css/Menu.css");
  cssMenu.setAttribute("id", "cssMenu");
  head.appendChild(cssMenu);

  header = document.createElement("header");
  body.appendChild(header);

  aLogo = document.createElement("a");
  aLogo.setAttribute("href", "#");
  aLogo.setAttribute("class", "logo");
  header.appendChild(aLogo);

  imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "../img/logo.png");
  imgLogo.setAttribute("width", "60px");
  imgLogo.setAttribute("height", "auto");
  imgLogo.setAttribute("style", "border-radius: 50px;");
  aLogo.appendChild(imgLogo);

  ul = document.createElement("ul");
  header.appendChild(ul);

  li = document.createElement("li");
  ul.appendChild(li);

  a = document.createElement("a");
  a.setAttribute("href", "#");
  a.setAttribute("class", "active")
  a.innerHTML = "Home";

  li.appendChild(a);

  li = document.createElement("li");
  ul.appendChild(li);

  a = document.createElement("a");
  a.setAttribute("href", "#");
  a.innerHTML = "About";
  li.appendChild(a);

  li = document.createElement("li");
  ul.appendChild(li);

  a = document.createElement("a");
  a.setAttribute("href", "#");
  a.innerHTML = "Work";
  li.appendChild(a);

  li = document.createElement("li");
  ul.appendChild(li);

  a = document.createElement("a");
  a.setAttribute("href", "#");
  a.innerHTML = "Contact";
  li.appendChild(a);

  section = document.createElement("section");
  body.appendChild(section);

  img = document.createElement("img");
  img.setAttribute("src", "../img/stars.png");
  img.setAttribute("id", "stars");
  section.appendChild(img);

  img = document.createElement("img");
  img.setAttribute("src", "../img/moon.png");
  img.setAttribute("id", "moon");
  section.appendChild(img);

  img = document.createElement("img");
  img.setAttribute("src", "../img/mountains_behind.png");
  img.setAttribute("id", "mountains_behind");
  section.appendChild(img); 

  h2 = document.createElement("h2");
  h2.setAttribute("id", "text");
  h2.innerHTML = "Moon Light";
  section.appendChild(h2);

  a = document.createElement("a");
  a.setAttribute("href", "#sec");
  a.setAttribute("id", "btn");
  a.innerHTML = "Explore";
  section.appendChild(a);
  
  img = document.createElement("img");
  img.setAttribute("src", "../img/mountains_front.png");
  img.setAttribute("id", "mountains_front");
  section.appendChild(img);

  div = document.createElement("div");
  div.setAttribute("class", "sec");
  div.setAttribute("id", "sec");
  body.appendChild(div);

  h2 = document.createElement("h2");
  h2.innerHTML = "Moon Light,<br>";
  div.appendChild(h2);

  p = document.createElement("p");
  p.innerHTML = "Bienvenue dans le jeux Moon Light.<br/>\
  <ul class='ul'>\
    <li><a href='#' onclick=\"setup('0')\">Niveau 1</a></li>\
    <li><a href='#' onclick=\"setup('1')\">Niveau 2</a></li>\
    <li><a href='#' onclick=\"setup('2')\">Niveau 3</a></li>\
    <li><a href='#' onclick=\"setup('3')\">Niveau 4</a></li>\
  <ul/>"
  div.appendChild(p);
  
  script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", "../Js/Accueil.js");
  body.appendChild(script);
}