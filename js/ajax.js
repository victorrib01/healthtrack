
$(document).ready(function(){
    //Cadastro
    $("#cadastrarPeso").click(function(){  
        $('#ajax-content').load("../ajax/peso/cadastrarPeso.html");
        $("#cadastrarPeso").hide();
        $("#vizualizarPeso").hide();
   });
   $("#cadastrarAlimentacao").click(function(){  
        $('#ajax-content').load("../ajax/alimentacao/cadastrarAlimentacao.html");
        $("#cadastrarAlimentacao").hide();
        $("#vizualizarAlimentacao").hide();
    });
    $("#cadastrarPressao").click(function(){  
        $('#ajax-content').load("../ajax/pressaoArterial/cadastrarPressao.html");
        $("#cadastrarPressao").hide();
        $("#vizualizarPressao").hide();
   });
   //Vizualizar
   $("#vizualizarPeso").click(function(){  
        $('#ajax-content').load("../ajax/peso/vizualizarPeso.html");
        $("#cadastrarPeso").hide();
        $("#vizualizarPeso").hide();
    });
    $("#vizualizarAlimentacao").click(function(){  
        $('#ajax-content').load("../ajax/alimentacao/vizualizarAlimentacao.html");
        $("#cadastrarAlimentacao").hide();
        $("#vizualizarAlimentacao").hide();
    });
});
