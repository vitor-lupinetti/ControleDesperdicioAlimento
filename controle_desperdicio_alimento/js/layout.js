$(document).ready(function (){
	$(".trocar_pagina").click(function (){
		var url_destino = this.id;

		$.ajax({
			url: url_destino,

			method: "post",
		})
			.done(function (retorno){
				$("#conteudo_pagina").html(retorno);
			})
			.fail(function (){
				$("#conteudo_pagina").html("Erro ao fazer requisição");
			});
	});
});