var url = 'https://pokeapi.co/api/v2/pokemon/?limit=6&offset=20'

var template = $('.template')
  .detach()
  .removeClass('template')

function loadPokemon(pokemon) {
  $.each(pokemon.results, function(i, pokemon) {
    addPokemon(pokemon);
  });
}

function addPokemon(pokemon) {
  var li = template.clone();
  li.find('.pokemon-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id);
  $('#pokemonList').append(li);
}
$(document).on('click','a',function(ev){
	ev.preventDefault();
	var specific = $(this).attr('href');
	$.get(specific,function(data){
		$('body').prepend(data.name)
	})
})

$.get({
  url: url,
  success: loadPokemon
});
