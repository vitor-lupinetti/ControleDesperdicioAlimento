$(document).ready(function (){
	$(".trocar_pagina").click(function (){
		var url_destino = this.id;

		$.ajax({
			url: url_destino,

			success: function (retorno){
				$("#conteudo_pagina").html(retorno);
			}
		});
	});
});