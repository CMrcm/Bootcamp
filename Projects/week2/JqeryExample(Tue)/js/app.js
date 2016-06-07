var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click','a.delete',function(ev){ //even listener for any delete link via 'a'
	var li = $(ev.currentTarget).closest('li');
	var id = li.data('id');
	deleteMutant(id);
}); 

function processMutants(mutants){
	$.each(mutants, function(i,mutant){
		addMutant(mutant);
	});
}

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
