<?php
//declaração dos gastos mensais
$energia = 150.75;
$agua = 80.50;
$internet = 100.00;
$cartao = 500.25;
$compras = 300.00;
$boletos = 200.00;

//cálculo do total de gastos
$total_gastos = $energia + $agua + $internet + $cartao + $compras + $boletos;

//exibindo o cabeçalho
echo "**********************<br>";
echo "     gastos mensais   <br>";
echo "**********************<br>";

//exibindo os gastos detalhados
echo "energia: R$ $energia<br>";
echo "água: R$ $agua<br>";
echo "internet: R$ $internet<br>";
echo "cartão: R$ $cartao<br>";
echo "compras: R$ $compras<br>";
echo "boletos: R$ $boletos<br>";


//exibindo o rodapé com o total de gastos
echo "*************************************<br>";
echo "total de gastos: R$ $total_gastos    <br>";
echo "*************************************<br>";
?>