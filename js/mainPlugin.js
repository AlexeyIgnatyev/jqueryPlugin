(function($){
	let data = {};
	let self;
	jQuery.fn.comboInit = function(options){
		self = this[0];
		data = options;
		let optionString = '';
		let valueToSet = '';
		let flag = false;

		_.each(data.options, (element) => {
			optionString += '<option value=' + element.value + '>' + element.content + '</option>';
			if (!flag && element.content.trim() === data.selectedValue.trim()){
				valueToSet = data.selectedValue;
				flag = true;
			}
		});
		
		$(self).append(optionString);
		jQuery.fn.setValue(valueToSet);
	}

	jQuery.fn.getValue = function(){
		let activeElem = _.find(self, (element) => {
			return element.selected === true;
		});

		let necessaryElem = _.find(data.options, (element) => {
			return element.value == activeElem.value;
		});

		console.log(necessaryElem);
	};

	jQuery.fn.setValue = function(valueToSet) {
		let isElementExist = _.find(data.options, (element) => {
			return element.content.trim() === valueToSet.trim();
		});

		if (isElementExist){
			let elementToSet = _.find(self.childNodes, (element) => {
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