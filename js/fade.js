
		$(document).ready(function() {
			$('#polyspace').fadeIn(500);
			setTimeout(function(){
				$('main').fadeIn(250);
			}, 500);
			
			$('a').click(function(event) {
				event.preventDefault();
				newLocation = this.href;
				$('body').fadeOut(250, newpage);
			});
			function newpage() {
				window.location = newLocation;
			}
		});