// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href === "#" || !href.startsWith("#")) return;
		const targetId = href.slice(1);
		const target = document.getElementById(targetId);
		if (target) {
			e.preventDefault();
			const nav = document.querySelector('nav');
			const navHeight = nav ? nav.offsetHeight : 0;
			const targetRect = target.getBoundingClientRect();
			const scrollY = window.pageYOffset || document.documentElement.scrollTop;
			let extraOffset = 0;
			if (targetId === 'gallery' || targetId === 'home') {
				extraOffset = 80; // px, keep large gap for home and gallery
			} else if (targetId === 'about') {
				extraOffset = 40; // px, smaller gap for about
			}
			const targetTop = targetRect.top + scrollY - navHeight - extraOffset;
			window.scrollTo({ top: targetTop, behavior: 'smooth' });
		}
	});
});

document.getElementById('btnAlert').addEventListener('click', function() {
	alert('Umazing!');
});

document.getElementById('btnChangeText').addEventListener('click', function() {
	const textSpan = document.getElementById('changeTextTarget');
	if (textSpan.textContent === 'Text changed!') {
		textSpan.textContent = 'Original Text';
	} else {
		textSpan.textContent = 'Text changed!';
	}
});

document.getElementById('btnToggleImg').addEventListener('click', function() {
	const img = document.getElementById('toggleImg');
	img.style.display = (img.style.display === 'none') ? 'inline-block' : 'none';
});

const toggleImg = document.getElementById('toggleImg');
const hoverMsg = document.getElementById('hoverMsg');
toggleImg.addEventListener('mouseenter', function() {
	hoverMsg.textContent = 'You are hovering over the image!';
});
toggleImg.addEventListener('mouseleave', function() {
	hoverMsg.textContent = '';
});

document.getElementById('btnColor').addEventListener('click', function() {
	const colors = ['#CAE9FF', '#BAD7E9', '#F9F9F9', '#FFD6EC', '#FFF6BD', '#B6FFCE'];
	document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
});

