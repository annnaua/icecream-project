const square = document.querySelector('.animates');
square.classList.remove('animates-transition');

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			square.classList.add('animates-transition');
			return;
		}
		square.classList.remove('animates-transition');
	});
});
observer.observe(document.querySelector('.animates'));
