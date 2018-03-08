var index = 0;
var condition = true;

autoSlide();

function navigate(n){
	if(index<0){
		var img = document.getElementsByClassName('slide');
		index = img.length;
	}
	else{
		index+=n;
	}
}

function autoSlide(){
	var img = document.getElementsByClassName('slide');
	for(i=0;i < img.length; i++ )
	{
		img[i].style.display = "none";
		
	}
	if(condition){index++;}
	
	if(index > img.length)
	{
		index = 1;
	}
	img[index-1].style.display = "block";
	setTimeout(autoSlide, 1500);

}

function start(){
	condition=true;
}

function stop(){
	condition=false;
}

function next(){
	index++;
}

function prev(){
	index--;
	if(index<0){
		index = document.getElementsByClassName('slide').length;
	}
}

