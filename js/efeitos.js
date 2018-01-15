$(document).ready(function(){

				$("#logotipo").on("mouseover",function (){

					 $("#banner h1").addClass("efeito"); 

				}).on("mouseout",function(){

                      $("#banner h1").removeClass("efeito"); 
				});

				$("#input-search").on("focus",function(){

					$("li.search").addClass("ativo");

				}).on("blur" , function(){

					$("li.search").removeClass("ativo");
				});

				$(".thumbnails").owlCarousel({
					loop: true,
					nav: true,
					navText:["Anterior","Próximo"],
					responsive: {

						0 : {
							items: 1
						},
						480 :{
							items: 2

						},
						768 :{
							items: 4
						},
						1200: {
							items: 6
						}
					}

				});

				
			});