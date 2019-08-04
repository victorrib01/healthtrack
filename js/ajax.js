//Cadastro
$(document).ready(function(){
    $("#cadastrarPeso").click(function(){  
        $('#ajax-content').load("../ajax/peso/cadastrarPeso.html");
        $("#cadastrarPeso").hide();
        $("#vizualizarPeso").hide();
        
   });
});

$(document).ready(function(){
    $("#cadastrarAlimentacao").click(function(){  
        $('#ajax-content').load("../ajax/alimentacao/cadastrarAlimentacao.html");
        $("#cadastrarAlimentacao").hide();
        $("#vizualizarAlimentacao").hide();
   });
});

$(document).ready(function(){
    $("#cadastrarPeso").click(function(){  
        $('#ajax-content').load("../ajax/peso/cadastrarPeso.html");
        $("#cadastrarPeso").hide();
        $("#vizualizarPeso").hide();
   });
});

