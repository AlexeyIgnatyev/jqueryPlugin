(function($){
	let data = {};
	jQuery.fn.comboInit = function(options){
		data = options;
		let optionString = '';
		_.each(data.options, (element) => {
			optionString += '<option value=' + element.value + '>' + element.content + '</option>';
		});
		
		$(this).append(optionString);
	}

	jQuery.fn.getValue = function(){
		let activeElem = _.find(this[0], (element) => {
			return element.selected === true;
		});

		let necessaryElem = _.find(data.options, (element) => {
			return element.value == activeElem.value;
		});

		console.log(necessaryElem);
	};

	jQuery.fn.setValue = function() {
		let isElementExist = _.find(data.options, (element) => {
			return element.content.trim() === data.selectedValue.trim();
		});

		if (isElementExist){
			let elementToSet = _.find(this[0].childNodes, (element) => {
				return $(element).val() == isElementExist.value;
			});
			$(elementToSet).attr('selected', 'selected');
		}else{
			console.log('There are no matches');
		}
	}

	jQuery.fn.onValueChange = function(){
		this.on('change', data.onValueChange);
	}

})(jQuery);