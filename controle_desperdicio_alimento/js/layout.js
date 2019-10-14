$(document).ready(function (){
	$(".trocar_pagina").click(function (){
		var url_destino = this.id;

		$.ajax({
			url: url_destino,

			method: "post",

			beforeSend: function (){
				$("#conteudo_pagina").html("Carregando...");
			}
		})
			.done(function (retorno){
				$("#conteudo_pagina").html(retorno);
			})
			.fail(function (){
				$("#conteudo_pagina").html("Erro ao fazer requisição");
			});
	});
});