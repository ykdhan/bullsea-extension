console.log('🔥 bullsea.io');
console.log('by ykdhan');

const COLOR = {
	primary: '#EF233C',
	light100: '#F8F9FA',
	dark100: '#212529',
};

const render = function () {
	const NEW = {
		header: document.createElement('div'),
	};

	if (location.hostname.indexOf('upbit.com') > -1) {
		const OLD = {
			header: document.querySelector('header'),
			root: document.querySelector('#root'),
			content: document.querySelector('.mainB'),
			contentLeft: document.querySelector('.mainB .ty01'),

			tv: document.querySelector('#tv_chart_container'),

			notice: document.querySelector('.notice'),
			foreign: document.querySelector('.foreignB'),
		};

		// header
		OLD.header.style = `
			background-color: ${COLOR.dark100} !important;
		`;
		OLD.content.style = `
			width: calc(100vw - 80px);
		`;
		OLD.contentLeft.style.width = 'calc(100vw - 80px - 420px)';
		OLD.tv.style.height = 'calc(100vh - 310px)';

		if (OLD.notice) OLD.notice.style.display = 'none';
		if (OLD.foreign) OLD.foreign.style.display = 'none';

		NEW.header.style = `
		display: flex; 
		position: fixed;
		top: 0;
		left: 0;
		width: 60px;
		height: 60px;
		justify-content: center;
		align-items: center;
		background-image: url("https://ykdhan.com/assets/bullsea-logo.svg");
		background-size: contain;
		bakground-position: center;
		z-index: 99999;
	`;
	} else if (location.hostname.indexOf('bithumb.com') > -1) {
		const OLD = {
			header: document.querySelector('.top_menu'),
			content: document.querySelector('.container'),
			contentRight: document.querySelector('.order-info'),

			tv: document.querySelector('.order_chart'),

			notice: document.querySelector('.disclosure_area'),
		};

		OLD.header.style = `
			background-color: ${COLOR.light100} !important;
		`;
		OLD.content.style = `
			width: calc(100vw - 80px);
		`;
		OLD.contentRight.style = `
			width: 100%;
			float: none;
		`;
		OLD.contentRight.querySelector('.orderArea').style = `
			width: 100%;
			float: none;
		`;
		OLD.tv.style.height = 'calc(100vh - 310px)';
		OLD.tv.querySelector('#chart_container').style.height = '100%';
		OLD.tv.querySelector('iframe').style.width = '100%';

		if (OLD.notice) OLD.notice.style.display = 'none';

		NEW.header.style = `
		display: flex; 
		position: fixed;
		top: 0;
		left: 0;
		width: 60px;
		height: 96px;
		justify-content: center;
		align-items: center;
		background-image: url("https://ykdhan.com/assets/bullsea-logo.svg");
		background-size: contain;
		bakground-position: center;
		z-index: 99999;
	`;
	}

	// NEW.header.innerText = 'Bullsea.io';
	document.body.prepend(NEW.header);
};

window.addEventListener('load', function () {
	render();
});
