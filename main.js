$(document).ready (function() {
	/* initialize some globals we'll use throughout */
    customTacoSentence = "";
    currentTacoArr = [];
    currentTacoArr[0] = currentblArr = [];
    currentTacoArr[1] = currentmArr = [];
    currentTacoArr[2] = currentsArr = [];
    currentTacoArr[3] = currentcArr = [];
    currentTacoArr[4] = currentshArr = [];
	baseLayersCounter = 0;
	mixinsCounter = 0;
	seasoningsCounter = 0;
	condimentsCounter = 0;
	shellsCounter = 0;
	tacoID = 0;
	
    /*
        series of ajax calls to get data from API endpoints
    */
	/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Base layers --------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
	jQuery.ajax({
		url: "https://tacos-sayjfycwsy.now.sh/baselayers/",
		type: "GET",
		contentType: 'application/json',
		success: function(data) {
			var jsonFromAPI = JSON.stringify(data);
			parsedJSON = $.parseJSON(jsonFromAPI);
			baseLayersArr = [];
			for (var i = 0; i < parsedJSON.length; i++) {
				baseLayersArr.push(parsedJSON[i].name);
			}
		},
		error: function(jqXHR, status, errorThrown) {},
		timout: 120000,
	});
	
	/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Mixins -------------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
	jQuery.ajax({
			url: "https://tacos-sayjfycwsy.now.sh/mixins/",
			type: "GET",
			contentType: 'application/json',
			success: function(data) {
				var jsonFromAPI = JSON.stringify(data);
				parsedJSON = $.parseJSON(jsonFromAPI);
				mixinsArr = [];
				for (var i = 0; i < parsedJSON.length; i++) {
					mixinsArr.push(parsedJSON[i].name);
				}
			},
			error: function(jqXHR, status, errorThrown) {},
			timout: 120000,
    });
	
	/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Seasonings ---------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
	jQuery.ajax({
			url: "https://tacos-sayjfycwsy.now.sh/seasonings/",
			type: "GET",
			contentType: 'application/json',
			success: function(data) {
				var jsonFromAPI = JSON.stringify(data);
				parsedJSON = $.parseJSON(jsonFromAPI);
				seasoningsArr = [];
				for (var i = 0; i < parsedJSON.length; i++) {
					seasoningsArr.push(parsedJSON[i].name);
				}
			},
			error: function(jqXHR, status, errorThrown) {},
			timout: 120000,
    });
	
	/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Condiments ---------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
	jQuery.ajax({
			url: "https://tacos-sayjfycwsy.now.sh/condiments/",
			type: "GET",
			contentType: 'application/json',
			success: function(data) {
				var jsonFromAPI = JSON.stringify(data);
				parsedJSON = $.parseJSON(jsonFromAPI);
				condimentsArr = [];
				for (var i = 0; i < parsedJSON.length; i++) {
					condimentsArr.push(parsedJSON[i].name);
				}
			},
			error: function(jqXHR, status, errorThrown) {},
			timout: 120000,
    });
	
	/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Shells -------------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
	jQuery.ajax({
			url: "https://tacos-sayjfycwsy.now.sh/shells/",
			type: "GET",
			contentType: 'application/json',
			success: function(data) {
				var jsonFromAPI = JSON.stringify(data);
				parsedJSON = $.parseJSON(jsonFromAPI);
				shellsArr = [];
				for (var i = 0; i < parsedJSON.length; i++) {
					shellsArr.push(parsedJSON[i].name);
				}
			},
			error: function(jqXHR, status, errorThrown) {},
			timout: 120000,
    });
	/*
		NOW WE HAVE THE DATA FROM THE API'S ENDPOINTS
		STORED INTO ARRAYS, LET'S DO SOMETHING WITH IT
	*/
    
	/* 
		add click event to "Click Here to Get Started!" button
		creates buttons for each ingredient. User will use these buttons to build their custom taco
	*/
	$("#getStarted").click(function() {
		var paraCaption = document.createElement('p');
		var paraCaptionText = document.createTextNode("Base Layer");
		paraCaption.appendChild(paraCaptionText);
		document.getElementById("b").appendChild(paraCaption);
		
		/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Base layers --------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
		for (var i=0; i < baseLayersArr.length; i++) {
			var BLpara = document.createElement('BUTTON');
			var BLnode = document.createTextNode(baseLayersArr[i]);
			BLpara.appendChild(BLnode);
			BLpara.class = baseLayersArr[i];
			document.getElementById("b").appendChild(BLpara);
            BLpara.addEventListener("click", function() {
				baseLayersCounter++;
				if (baseLayersCounter < 3) {
					var current = ((document.getElementById("blIng").innerHTML) + this.class + ", ");
					document.getElementById("blIng").innerHTML = current;
					currentTacoArr[0].push(this.class);
				}
				if (baseLayersCounter > 2) { alert("You can only add two base layers, friend!"); }
            });
		}
		
		/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Mixins -------------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
		var paraCaption = document.createElement('p');
		var paraCaptionText = document.createTextNode("Mixins");
		paraCaption.appendChild(paraCaptionText);
		document.getElementById("m").appendChild(paraCaption);
		
		for (var i=0; i < mixinsArr.length; i++) {
			var Mpara = document.createElement('BUTTON');
			var Mnode = document.createTextNode(mixinsArr[i]);
			Mpara.appendChild(Mnode);
			Mpara.class = mixinsArr[i];
			document.getElementById("m").appendChild(Mpara);
            Mpara.addEventListener("click", function() {
				mixinsCounter++;
				if (mixinsCounter < 3) {
					var current = ((document.getElementById("mIng").innerHTML) + this.class + ", ");
					document.getElementById("mIng").innerHTML = current;
					currentTacoArr[1].push(this.class);
				}
				else { alert("You can only add two mixins, but we appreciate your enthusiasm!"); }
            });
		}
		
		/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Seasonings ---------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
		var paraCaption = document.createElement('p');
		var paraCaptionText = document.createTextNode("Seasonings");
		paraCaption.appendChild(paraCaptionText);
		document.getElementById("s").appendChild(paraCaption);
		
		for (var i=0; i < seasoningsArr.length; i++) {
			var Spara = document.createElement('BUTTON');
			var Snode = document.createTextNode(seasoningsArr[i]);
			Spara.appendChild(Snode);
			Spara.class = seasoningsArr[i];
			document.getElementById("s").appendChild(Spara);
            Spara.addEventListener("click", function() {
				seasoningsCounter++;
				if (seasoningsCounter < 4) {
					var current = ((document.getElementById("sIng").innerHTML) + this.class + ", ");
					document.getElementById("sIng").innerHTML = current;
					currentTacoArr[2].push(this.class);
				}
				else { alert("Hey bud, we like your style but you can only choose 3 seasonings :("); }
            });
		}
		
		/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Condiments ---------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
		var paraCaption = document.createElement('p');
		var paraCaptionText = document.createTextNode("Condiments");
		paraCaption.appendChild(paraCaptionText);
		document.getElementById("c").appendChild(paraCaption);
		
		for (var i=0; i < condimentsArr.length; i++) {
			var Cpara = document.createElement('BUTTON');
			var Cnode = document.createTextNode(condimentsArr[i]);
			Cpara.appendChild(Cnode);
			Cpara.class = condimentsArr[i];
			document.getElementById("c").appendChild(Cpara);
            Cpara.addEventListener("click", function() {
				condimentsCounter++;
				if (condimentsCounter <3) {
					var current = ((document.getElementById("cIng").innerHTML) + this.class + ", ");
					document.getElementById("cIng").innerHTML = current;
					currentTacoArr[3].push(this.class);
				}
				else { alert("Watch out there, you're about to drown that poor taco in condiments! Try to keep er' under 3"); }
            });
		}
		
		/*
		------------------------------------------------------
		------------------------------------------------------
		----------------Shells -------------------------------
		------------------------------------------------------
		------------------------------------------------------
		*/
		var paraCaption = document.createElement('p');
		var paraCaptionText = document.createTextNode("Shells");
		paraCaption.appendChild(paraCaptionText);
		document.getElementById("sh").appendChild(paraCaption);
		
		for (var i=0; i < shellsArr.length; i++) {
			var SHpara = document.createElement('BUTTON');
			var SHnode = document.createTextNode(shellsArr[i]);
			SHpara.appendChild(SHnode);
			SHpara.class = shellsArr[i];
			document.getElementById("sh").appendChild(SHpara);
            SHpara.addEventListener("click", function() {
				shellsCounter++;
				if (shellsCounter < 2) {
					var current = ((document.getElementById("shIng").innerHTML) + this.class + ", ");
					document.getElementById("shIng").innerHTML = current;
					currentTacoArr[4] = this.class;
				}
				else { alert("Sorry friend, we're not Taco Bell. You only get one shell!"); }
            });
		}
		$(this).hide();
	});
	/*
		This button creates a random taco and adds it to the order
	*/
	$("#tacoButton").click(function() {
		var tacoSentence = getBaseLayer() + " with " + getMixins() + ", some added flavor with our best " + getSeasonings() + " and " + getCondiments() + ", and it's all packed into " + getShells() + ".";
		
		var para = document.createElement('p');
		var node = document.createTextNode(tacoSentence + " $2");
		para.appendChild(node);
		para.id = "t-" + tacoID;
		
		var paraDeleter = document.createElement('BUTTON');
		var deleterNode = document.createTextNode('Remove');
		paraDeleter.appendChild(deleterNode);
		paraDeleter.class = tacoID;
		paraDeleter.addEventListener("click", function() {
			$("#t-" + this.class).hide();
			$(this).hide();
		});
		
		var tacoSentence = document.getElementById("tacoSentence");
		tacoSentence.appendChild(para);
		tacoSentence.appendChild(paraDeleter);
		tacoID++;
	});
	/*
		add the order that is currently being created to the order
	*/
    $("#addTaco").click(function() {
		/*
			initialize some strings that will help with dynamic formatting of the sentence
		*/
        var tacoSentence =  "";
        var baseLayers = "";
        var mixins = "";
        var seasonings = "";
        var condiments = "";
		var containsMixins = "";
		var containsSeasonings = "";
		var containsCondiments = "";
		
		/*
			These counters keep track of how many of each ingredient the customer has added
		*/
		baseLayersCounter = 0;
		mixinsCounter = 0;
		seasoningsCounter = 0;
		condimentsCounter = 0;
		shellsCounter = 0;
        
		/*
			Get the data ready to be placed in sentence
		*/
        for (var i = 0; i < currentTacoArr[0].length; i++) {
            baseLayers += currentTacoArr[0][i] + ", ";
        }
        for (var i = 0; i < currentTacoArr[1].length; i++) {
            mixins += currentTacoArr[1][i] + ", ";
        }
        for (var i = 0; i < currentTacoArr[2].length; i++) {
            seasonings += currentTacoArr[2][i] + ", ";
        }
        for (var i = 0; i < currentTacoArr[3].length; i++) {
            condiments += currentTacoArr[3][i] + ", ";
        }
		var shell = currentTacoArr[4];
		
		/*
			check the prepared arrays of ingredients to choose the right string to add to the sentence.
		*/
		if (baseLayers == "") {
			alert("Please choose at least one base layer! Your taco's gotta have a little substance!");
		}
		if (shell == "") {
			alert("Please let us know what kind of shell you want! We don't do walking tacos, but hey, if the demand stays high.");
		}
		if (mixins != "") {
			containsMixins = " with ";
		}
		if (seasonings != "") {
			containsSeasonings = " some added flavor with our best ";
		}
		if (condiments != "") {
			containsCondiments = "";
		}
		/*
			Create the formatted sentence and edit the html to place the sentence in the "Your Order" box
			only if they have selected at least one BL and one Shell
		*/
		if (baseLayers != "" && shell != "") {
			tacoSentence = baseLayers + containsMixins + mixins + containsSeasonings + seasonings + containsCondiments + condiments + " and it's all packed into " + shell;

			var para = document.createElement('p');
			var node = document.createTextNode(tacoSentence + " $2");
			para.appendChild(node);
			para.id = "t-" + tacoID;
		
			var paraDeleter = document.createElement('BUTTON');
			var deleterNode = document.createTextNode('Remove');
			paraDeleter.appendChild(deleterNode);
			paraDeleter.class = tacoID;
			paraDeleter.addEventListener("click", function() {
				$("#t-" + this.class).hide();
				$(this).hide();
			});
			tacoID++;
			
			var tacoSentence = document.getElementById("tacoSentence");
			tacoSentence.appendChild(para);
			tacoSentence.appendChild(paraDeleter);

			/*
				reset the html in the "Your Custom Order" box to get ready for the next taco
			*/
			document.getElementById("blIng").innerHTML = "Base Layers: ";
			document.getElementById("mIng").innerHTML = "Mixins: ";
			document.getElementById("sIng").innerHTML = "Seasonings: ";
			document.getElementById("cIng").innerHTML = "Condiments: ";
			document.getElementById("shIng").innerHTML = "Shell: ";

			/*
				reset the arrays to get ready for the next taco
			*/
			for (var i = 0; i < 4; i++) {
				currentTacoArr[i] = [];
			}

			currentTacoArr[4] = "";
		}
    });
	/*
		clear the fields of the users current custom taco
		reset counters
	*/
    $("#clearTaco").click(function() {
        document.getElementById("blIng").innerHTML = "Base Layers: ";
        document.getElementById("mIng").innerHTML = "Mixins: ";
        document.getElementById("sIng").innerHTML = "Seasonings: ";
        document.getElementById("cIng").innerHTML = "Condiments: ";
        document.getElementById("shIng").innerHTML = "Shell: ";
		baseLayersCounter = 0;
		mixinsCounter = 0;
		seasoningsCounter = 0;
		condimentsCounter = 0;
		shellsCounter = 0;
    });
	
	/*
		click this when the order is complete. Starts a new order
	*/
	$("#checkOut").click(function() {
		document.getElementById("tacoSentence").innerHTML = "";
		tacoID = 0;
		alert("Your order is waiting for you at Tacos de Austin!");
	});
});

/*
    series of functions uses by Random Taco Generator to grab a random ingredient
*/
function getBaseLayer() {
	var blIndex = Math.floor(Math.random() * baseLayersArr.length);
	var baseLayer = baseLayersArr[blIndex];
	return baseLayer;
}

function getMixins() {
	var Index = Math.floor(Math.random() * mixinsArr.length);
	var mixin = mixinsArr[Index];
	return mixin;
}

function getSeasonings() {
	var Index = Math.floor(Math.random() * seasoningsArr.length);
	var seasoning = seasoningsArr[Index];
	return seasoning;
}

function getCondiments() {
	var Index = Math.floor(Math.random() * condimentsArr.length);
	var condiments = condimentsArr[Index];
	return condiments;
}

function getShells() {
	var Index = Math.floor(Math.random() * shellsArr.length);
	var shell = shellsArr[Index];
	return shell;
}


