$(document).ready(function(){
	$('#jshint').css('display', 'none');
	if (getUrlVars()['invitation']){
		$('#output').css('display', 'inline');

		var qrsize = 200;

		if (getUrlVars()['forwhat']){
			forwhat = decodeURIComponent(getUrlVars()['forwhat']);
			$('#forwhat').html(' for ' + forwhat);
		}

		var download_url = 'https://get.delta.chat';
		var download_qrcode = new QRCode(document.getElementById('download'), {
			text: download_url,
			width: qrsize,
			height: qrsize
		});
		$('#download-href').attr('href', download_url);

		var googleplay_url = 'https://play.google.com/store/apps/details?id=chat.delta';
		var googleplay_qrcode = new QRCode(document.getElementById('googleplay'), {
			text: googleplay_url,
			width: qrsize,
			height: qrsize
		});
		$('#googleplay-href').attr('href', googleplay_url);

		var applestore_url = 'https://apps.apple.com/us/app/delta-chat/id1459523234';
		var applestore_qrcode = new QRCode(document.getElementById('applestore'), {
			text: applestore_url,
			width: qrsize,
			height: qrsize
		});
		$('#applestore-href').attr('href', applestore_url);

		var chatmail_host = 'nine.testrun.org';
		if (getUrlVars()['chatmail']){
			chatmail_host = decodeURIComponent(getUrlVars()['chatmail']);
		}
		$('#chatmail-host').html(chatmail_host);

		var chatmail_url = 'dcaccount:https://' + chatmail_host + '/cgi-bin/newemail.py';
		var chatmail_qrcode = new QRCode(document.getElementById('chatmail'), {
			text: chatmail_url,
			width: qrsize,
			height: qrsize
		});
		$('#chatmail-href').attr('href', chatmail_url);

		var invitation = decodeURIComponent(getUrlVars()['invitation']);
		var invite_qrcode = new QRCode(document.getElementById('invitation'), {
			text: invitation,
			width: qrsize,
			height: qrsize
		});
		$('#invitation-href').attr('href', invitation);

		var link = window.location.protocol +
			'//' +
			window.location.hostname +
			window.location.pathname;
		$('#another').attr('href', link);
		$('#another').html(link);
	}else{
		$('#forwhat').html(' generator');
		$('#input').css('display', 'inline');
		$('#input-form').on('submit', function(event) {
			var forwhat = encodeURIComponent($('#input-forwhat').val());
			var chatmail = encodeURIComponent($('#input-chatmail').val());
			var invitation = encodeURIComponent($('#input-invitation').val());
			console.log(forwhat);
			console.log(chatmail);
			console.log(invitation);
			var link = window.location.protocol +
				'//' +
				window.location.hostname +
				window.location.pathname +
				'?' +
				'invitation=' + invitation +
				'&' +
				'chatmail=' + chatmail +
				'&' +
				'forwhat=' + forwhat;
			$('span#generated-href').html(link);
			$('a#generated-href').attr('href', link);
			$('#generated').css('display', 'inline');
			event.preventDefault();
		});
	}
});

// https://stackoverflow.com/a/4656873/263310
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
