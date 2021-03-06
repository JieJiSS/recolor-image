const CTX =
    "http://192.168.17.2:8000/paint?sketch={0}&reference={1}" +
    "&hint={等大PNG透明图}" +
    "&sketchDenoise=true&resultDenoise=true" +
    "&algrithom=???&method=???&sketchID=???&referenceID={图片名称}";

const { readFileSync } = require("fs");

//@TODO

$(function(){ 
	$('#webcam').photobooth().on("image",function( event, dataUrl ){	
		$('.nopic').hide();
		console.log(dataUrl);
	});
	
	if(!$('#webcam').data('photobooth').isSupported){
		alert('HTML5 webcam is not supported by your browser, please use latest firefox, opera or chrome!');
	}	
	
	$('.photobooth ul li:last').qtip({
		content: {
			text: 'Click here to take pictures',
			title: {
				text: 'Tips',
				button: true
			}
		},
		show: {
			ready: false
		},
		position: {
			target: 'event',
	      	my: 'left center', 
	      	at: 'right center'
		},
		style: {
			classes: 'ui-tooltip-shadow ui-tooltip-bootstrap',
			width: 300
		}
	});	
	
	$('#site').qtip({
		content: {
			text: 'Demo from our geek blog: http://www.gbin1.com',
			title: {
				text: 'wlecome',
				button: true
			}
		},
		position: {
			target: 'event',
	      	my: 'bottom center', 
	      	at: 'top center',
			viewport: $(window)
		},
		style: {
			classes: 'ui-tooltip-shadow ui-tooltip-jtools'
		}
	});	
});