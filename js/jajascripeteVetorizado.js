var inicio, total_barcosA, total_barcosB, barco, tabelaA, tabelaB, Vetor = [], ContadorDoVetor;

inicio = parseInt(inicio); //é uma ótima pergunta o por que de eu ter colocado parseInt só nessa variavel, e não nas outras
inicio = 0;
total_barcosA = 0;
total_barcosB = 0;
tabelaA = 1;
tabelaB = 0;
ContadorDoVetor = 0;
$(document).ready(function(){ //prepara o documento
		$(".squarenix").click(function(){
			if(inicio==0){ //inicio ANTES da batalha
				barco = 0; //reseta o valor do barco pra verificar se é ou não alguma coisa selecionada
				barco = $(this).css("font-size");
					if(barco == "20px"){ //eu atribui a propriedade 'font-size' pra dizer que isso É um barco
						$(this).css("background-color", "white");
						$(this).css("font-size","0px"); //ele veio por esse caminho, quer dizer que ele vai virar agua
						if(tabelaA == 1){ 
							total_barcosA --;}
							else{
							total_barcosB --;}//-1 no contador dos barcos
					}else{
						$(this).css("background-color", "blue");//agora se ele veio por aqui ele é agua e VAI virar um barco
						$(this).css("font-size","20px"); //eu atribui font size pra 20, pra setar COMO UM BARCO
						if(tabelaA == 1){
						total_barcosA ++;
						}
						else{
						total_barcosB ++;} //contador +1 pro barco
					}
			}if(inicio==1){ //COMEÇA A BATALHA
				barco = 0; //reseta a variavel barco pra comparar dps
				barco = $(this).css("background-color");//a variavel recebe a cor do quadrado que o cara selecionou
				if(barco == "rgb(0, 0, 255)"){ //se for azul (no caso agua):
					barco = 0; //reseta dnv
					barco = $(this).css("font-size"); //verifica a propriedade da fonte
						if(barco == "20px"){ //se ela for 20px (barco)
							$(this).css("background-color", "red"); //vai deixar o background vermelho
							$(this).css("font-size","0px"); //e tirar a propriedade de barco, ja que ele TA MORTA
							if(tabelaA == 1){
								total_barcosA --;
								Vetor[ContadorDoVetor] = "    A: - CAPITÃO, O B ACERTOU UM BARCO!<br>";
								ContadorDoVetor++;
								}
								else{
								total_barcosB --;
								Vetor[ContadorDoVetor] = "    B: - CAPITÃO, O A ACERTOU UM BARCO!<br>";
								ContadorDoVetor++;

								}//tirando -1 do contador dos barcos
						}else{//AGORA SE NAO ERA UM BARCO
							$(this).css("background-color", "gray"); //bota um background cinza
							alert("Errou!"); //ERROW
							ocult();		//se você errou, altera qual tabela você vai jogar chamando a função ocult
						}
				}else{alert("Selecione um bloco com água Comandante!")}//agora se vc for meio cego e selecionar algo que nao seja agua,
				//o programa devolve com essa mensagem
			}
		document.getElementById("log").innerHTML = ("          Registro de Batalha: <BR>," + Vetor);//UPDATE NO REGISTRO
		document.getElementById("pontuaçãoA").innerHTML = ("          Barcos da tabela A: " + total_barcosA);//UPDATE NO PLACAR
		document.getElementById("pontuaçãoB").innerHTML = ("          Barcos da tabela B: " + total_barcosB);//UPDATE NO PLACAR
		
		if(total_barcosA==0 && inicio==1){ //esse IF é pra verificar se TODOS barcos foram afundados ou nao
			alert("O Comandante A perdeu");
			inicio++; //+1 no inicio é pra nao deixar o player mexer em mais nada na pagina
		}else
			if(total_barcosB==0 && inicio==1){
				alert("O Comandante B perdeu");
				inicio++;//aqui também
			}
		});
});
function begin(){ //essa função é chamada quando os caras pressionam o botao "inicio"
	if(total_barcosA>=20 && total_barcosB>=20){ //SE TODAS AS TABELAS TEM 20 BARCOS NO MINIMO
		$(".squarenix").css("background-color","blue");  //TODO o background fica azul
		alert("A Batalha começou!!");
		$(".trocar").hide(); //oculta os 2 botoes la em cima
		ocult();
		inicio ++; //AND SO IT BEGINS
		getElementById("OST").audioObject.src = "img/battle.ogg"; //tentativa fracassada de colocar uma soundtrack
	}
	else{
		alert("Não temos barcos suficientes para a batalha Comandante, posicione pelo menos 20!");//caso nao tenham 20 barcos
	}
}
function ocult(){ //troca a tabela de lugar
	if(tabelaA == 1){
			tabelaB = tabelaB + 1; //essas variaveis servem pro programa colocar ou tirar barcos da tabela que tiver com 
			tabelaA = tabelaA - 1; //respectiva variavel com '1'
		if(inicio == 1){
			Vetor[ContadorDoVetor] = "    A: - Erramos o tiro Capitão!<br>";
			ContadorDoVetor++;
		}
	$(".OLD_SPICE").css({"left":"142px"}); //muda o div pra cima de outra table, ocultando a mesma
}else{
	tabelaA = tabelaA + 1;
	tabelaB = tabelaB - 1;
	if(inicio == 1){
		Vetor[ContadorDoVetor] = "    B: - Erramos o tiro Capitão!<br>";
		ContadorDoVetor++;
	}
	$(".OLD_SPICE").css({"left":"658px"})}
}
