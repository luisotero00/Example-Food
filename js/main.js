var swiper = new Swiper(".mySwiper", {
	autoplay:{
		dealay:3000,
		disableOnInteraction:false,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


// back to top button

let mybutton = document.getElementById("mybtn");
window.onscroll = function(){ scrollFunction() };

function scrollFunction(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display="none";
	}
}
function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
