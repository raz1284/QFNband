const notesBemolli = ["DO", "REb", "RE", "MIb", "MI", "FA", "SOLb", "SOL", "LAb", "LA", "SIb", "SI"];
const notesDiesis = ["DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI"];

let useBemolli = true;

document.getElementById("toggleButton").addEventListener("click", function() {
    useBemolli = !useBemolli;
    this.innerText = useBemolli ? "b" : "#";
	
	const chordElements = document.querySelectorAll(".chord"); 
	const notes = useBemolli ? notesBemolli : notesDiesis; 
	const notes1 = useBemolli ? notesDiesis : notesBemolli; 
	chordElements.forEach(function(element) { 
		const currentText = element.innerText; 
		const currentIndex = notes1.indexOf(currentText); 
		element.innerText = notes[currentIndex]; 
	});
});

document.getElementById("nextButton").addEventListener("click", function() { 
	const chordElements = document.querySelectorAll(".chord"); 
	const notes = useBemolli ? notesBemolli : notesDiesis; 
	chordElements.forEach(function(element) { 
		const currentText = element.innerText; 
		const currentIndex = notes.indexOf(currentText); 
		const nextIndex = (currentIndex + 1) % notes.length; 
		element.innerText = notes[nextIndex]; 
	}); 
});

document.getElementById("prevButton").addEventListener("click", function() { 
const chordElements = document.querySelectorAll(".chord"); 
const notes = useBemolli ? notesBemolli : notesDiesis; 
	chordElements.forEach(function(element) { 
		const currentText = element.innerText; 
		const currentIndex = notes.indexOf(currentText); 
		const prevIndex = (currentIndex - 1 + notes.length) % notes.length; 
		element.innerText = notes[prevIndex]; 
	}); 
});
