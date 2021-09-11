/*comienza en 1.20
ver en 
https://codepen.io/bradtraversy/pen/yWPONg

al inicio todo los tab contents están hide, el hide se puso en css.
con js clickeamos uno y se le quita el hide a ese
*/
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {item.addEventListener('click', selectItem);
});
