// Mobile navigation toggle
(function () {
	var header = document.querySelector('.site-header');
	var toggle = document.querySelector('.nav-toggle');
	if (!header || !toggle) return;

	function setOpen(open) {
		header.classList.toggle('nav-open', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	}

	toggle.addEventListener('click', function () {
		setOpen(!header.classList.contains('nav-open'));
	});

	header.querySelectorAll('.nav-links a').forEach(function (link) {
		link.addEventListener('click', function () { setOpen(false); });
	});
})();
