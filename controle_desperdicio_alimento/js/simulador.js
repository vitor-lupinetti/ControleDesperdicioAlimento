$(document).ready(function (){
	$("#simular").click(function (){console.log("Clicado");
		var obj_date = new Date();

		var codigo = $("#codigo").val();// Pega valor do código
		var peso = $("#peso").val();// Pega valor do peso
		var data_atual = obj_date.getDate() + "/" + (obj_date.getMonth() + 1) + "/" + obj_date.getFullYear();// Monta data atual
		var status = $("input:radio[name='status']:checked").val();// Pega valor do radio ou undefined caso não escolheu

		console.log("Código: " + codigo);
		console.log("Peso: " + peso);
		console.log("Data atual: " + data_atual);
		console.log("Status: " + status);

		if(validar_dados(codigo, peso, status) == false) {// Sai caso não seja válido para não fazer a requisição
			console.log("Possuí erro");
			return false;
		}

		$.ajax({// Faz requisição - Envia os dados
			url: "http://",

			method: "post",

			data: {
				codigo: codigo,
				peso: peso,
				data: data_atual,
				status: status
			},
		})
			.done(function (retorno){// Limpa campos
				$("#codigo").val("");
				$("#codigo").removeClass("is-valid");

				$("#peso").val("");
				$("#peso").removeClass("is-valid");

				$("input:radio[name='status']:checked");
			})
			.fail(function (){
				$("#conteudo_pagina").html("Erro ao fazer requisição");
			});
	});

	function validar_dados(codigo, peso, status) {
		var foi_validado = true;

		if($.isNumeric(codigo)) {// Código válido - Exibe estilização válida
			$("#codigo").removeClass("is-invalid");
			$("#codigo").addClass("is-valid");
		} else {// Código inválido - Exibe estilização inválida
			foi_validado = false;

			$("#codigo").removeClass("is-valid");
			$("#codigo").addClass("is-invalid");
		}

		if($.isNumeric(peso)) {// Peso válido - Exibe estilização válida
			$("#peso").removeClass("is-invalid");
			$("#peso").addClass("is-valid");
		} else {// Peso inválido - Exibe estilização válida
			foi_validado = false;

			$("#peso").removeClass("is-valid");
			$("#peso").addClass("is-invalid");
		}

		if(status == undefined) {// Status inválido - Não escolhido - Sem estilização
			foi_validado = false;
		}

		return foi_validado;
	}
});