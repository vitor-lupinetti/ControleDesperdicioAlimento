$(document).ready(function (){
	$("#buscar").click(function (){console.log("Clicado");
		var obj_date = new Date();

		var codigo = $("#codigo").val();// Pega valor do código
		var peso = $("#peso").val();// Pega valor do peso
		var data_informada = $("#data").val();// Pega valor da data
		var data_atual = obj_date.getDate() + "/" + (obj_date.getMonth() + 1) + "/" + obj_date.getFullYear();// Monta data atual
		var status = $("input:radio[name='status']:checked").val();// Pega valor do radio ou undefined caso não escolheu

		console.log("Código: " + codigo);
		console.log("Peso: " + peso);
		console.log("Data informada: " + data_informada);
		console.log("Data atual: " + data_atual);

		if(validar_dados(codigo, peso, data_informada, data_atual, status) == false) {// Sai caso não seja válido para não fazer a requisição
			console.log("Possuí erro");
			return false;
		}

		$.ajax({// Faz requisição - Recebe os dados
			url: "http://",

			method: "post",

			data: {/*Definir como vai funcionar o filtro*/},
		})
			.done(function (retorno){
				// Fazer preenchimento da tabela
			})
			.fail(function (){
				$("#conteudo_pagina").html("Erro ao fazer requisição");
			});
	});

	function validar_dados(codigo, peso, data_informada, data_atual, status) {
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

		if(data_informada > data_atual) {// Data inválida - Exibe estilização inválida - Acho que precisa arrumar
			foi_validado = false;

			$("#data").removeClass("is-valid");
			$("#data").addClass("is-invalid");
		} else {// Data válida - Exibe estilização válida
			$("#data").removeClass("is-invalid");
			$("#data").addClass("is-valid");
		}

		return foi_validado;
	}
});