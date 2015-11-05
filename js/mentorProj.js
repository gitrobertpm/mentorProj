/*=====================================
 TREEHOUSE MENTOR PROJECT 
 =====================================*/

var openModal = document.getElementsByClassName("openModal");
var modalWrapper = document.getElementsByClassName("modalWrapper");
var closeModal = document.getElementsByClassName("closeModal");

// LOOP THROUGH "LEARN MORE" AND "MORE INFO" BUTTONS
for(var i = 0; i < openModal.length; i++) {
	// ADD FUNCTION TO "LEARN MORE" AND "MORE INFO" BUTTONS
	openModal[i].onclick = function(){
		// OPEN MODAL
		modalWrapper[0].setAttribute("style", "width: 100%; height: 100%");
	};
}

// ADD FUNCTION TO "CLOSE MODAL" BUTTON
closeModal[0].onclick = function() {
	// CLOSE MODAL
	modalWrapper[0].setAttribute("style", "width: 0; height: 0");
};