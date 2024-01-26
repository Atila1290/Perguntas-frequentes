const perguntas = document.querySelectorAll(".item");

perguntas.forEach(function(item){
    item.addEventListener("click", function(){
        let respostaAMostra = document.querySelector(".mostrar");

        if(item === respostaAMostra){
            item.classList.remove("mostrar");
        }else{
            item.classList.add("mostrar");

        }

        respostaAMostra.classList.remove("mostrar");


    })
})