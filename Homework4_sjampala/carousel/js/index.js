/* Pseudo Code for Carousel
1. When page is loaded, animal1.jpg is on the page.
2. On clicking next, animal1.jpg(position=i=0) is replaced by animal2.jpg(position=i+1)
3. On clciking previous, previous images are loaded. (position=i-1)

eq(0) would be back
eq(1) would be next

//index = index % animals.length; //loops
*/


//create an array animals containing all the image names
var animals = ['animal1.jpg','animal2.jpg','animal3.jpg','animal4.jpg','animal5.jpg','animal6.jpeg'];

//initialize position of first animal as 0 in index
var index = 0;

//store initial source code of html (src) in imgSrcBase
var imgSrcBase = 'images/animals/';

//call nextPhoto function on clicking second button
$('.btn').eq(1).click(nextPhoto);

//call prevPhoto function on clicking first button
$('.btn').eq(0).click(prevPhoto);

function nextPhoto() {

	//only when position of animals is less than 5 i.e. last image
	if (index < animals.length - 1) {
		console.log("button clicked");
		event.preventDefault();
		index++; //give a new index of next position
		
		$('#image-to-vote-on').attr('src', imgSrcBase + animals[index]); //change the source of image to new index
		console.log(imgSrcBase + animals[index]);
	} 
}

function prevPhoto() {

	//only when index is more than 0 i.e. first image
	if (0 < index) {
		console.log("button clicked");
		event.preventDefault();
		index--; //give a new index of previous position

		$('#image-to-vote-on').attr('src', imgSrcBase + animals[index]); //change the source of image to new index
		console.log(imgSrcBase + animals[index]);	
	}
}


















