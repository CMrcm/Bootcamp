function updateMutant(id, li){
	ev.preventDefault();
	var mutantName = ev.currentTarget.mutantName.value;
	$.ajax({
		url: mutantsUrl + '/' + id,
		method: 'put',
		data: {
			mutant:{
				mutant_name: mutantName

			}
			
		},
		success: function(mutant){
			console.log('updated ' + mutant.mutant_name);
			
		}
	})
	
}

function deleteMutant(id, li){
	
	$.ajax({
		url: mutantsUrl + '/' + id,
		method: 'delete',
		success: function(){
			if (li) {
				li.remove();
			}
		}
		
	});
};