var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click','a.delete',function(ev){ //even listener for any delete link via 'a'
	var li = $(ev.currentTarget).closest('li');
	var id = li.data('id');
	deleteMutant(id, li);
}); 

$(document).on('click','a.edit',function(ev){ //event listener for any delete link via 'a'
	var li = $(ev.currentTarget).closest('li');
	var id = li.data('id');
	var mutantName = li.find('.mutant-name').text();
	var form = $('form').get(0);
	$(form.mutantName).val(mutantName);
}); 

function processMutants(mutants){
	$.each(mutants, function(i,mutant){
		addMutant(mutant);
	});
}

$('form').on('submit',function(ev){
	ev.preventDefault;
	if ($(ev.currentTarget.submitButton).text() === 'CREATE'){
		createMutant(ev);
	}
	
});

function addMutant(mutant){
	var li = $('li.template')
		.clone()
		.removeClass('template')
		.attr('data-id', mutant.id);
		
	li.find('.mutantName')
		.html(mutant.mutant_name);
	$('#mutantList').append(li);
}

$.get({
	url: mutantsUrl,
	success: processMutants
});
