
	//image section 
	var img = document.getElementById("img");
	var fixed_left = 450 ;

	//timer image section
	var timer = document.getElementById("timer");
	//image clicking section 
	var created_time ; 
	var clicked_time;
	var reaction_time;

	var count = 0; //count is to record the time 
	var averageTime = 0.0;
	var best_score;
	
	//Function for displaying images randomly 
	function random_images(){

		img.style.display="block"; // this line displays the image
		img.style.width = "110px";
		img.style.height = "140px";
		timer.style.width="220px";
		timer.style.height="250";

		//make the images random
		img.style.backgroundImage= "url(images/img" +  Math.floor(1 + 20 * Math.random())+ ".jpg";
	}

	//create a random image location within the border of the background image
	function randomImage_location (){

		img.style.position = "relative"; // to set the position of the picture (relative) to the background
		
		//random location 
		var location_left = Math.floor(Math.random()  * 800); 
		var location_top = Math.floor(Math.random()) ;
		
		img.style.left = fixed_left + location_left + "px";
		img.style.top  = location_top + "px";
	

	}


	//create the random images  
	function randomImage_box(){

		var time = Math.random();
		time = 1000 * time;

		setTimeout(function () {

			random_images();
			randomImage_location();

			created_time = Date.now(); // set the time from 0 to 5000 milli second (5 seconds)
		}, time);

	}


	document.getElementById("img").onclick = function(){

		clicked_time = Date.now();
		count ++;
		reaction_time = (clicked_time - created_time) /1000;


		//if statement to check for the best score
		if (count ==1 ){
			best_score =reaction_time;
		}else if(reaction_time < best_score){
			best_score = reaction_time;
		}

		//Average Time:
		averageTime = (Math.round(((count -1) * averageTime + reaction_time)));

		document.getElementById("user_time").innerHTML = reaction_time.toFixed(3) +"s";

		document.getElementById("bestScore").innerHTML = best_score.toFixed(3);

		document.getElementById("Average").innerHTML = averageTime.toFixed(3);

		img.style.display="none";

		randomImage_box();

	}

	randomImage_box();
