---
sidebar_position: 5
---

# Partida direta

O acionamento em estrela triângulo é necessário para que o motor seja ligado em duas partes. “O motor parte em estrela, isto é, com uma tensão de 58%, da tensão nominal, e após certo tempo a ligação é convertida para triângulo, assumindo a tensão nominal” SOUZA. Para realização da programação de comando é necessário o uso de duas botoeiras, três contatores, um temporizador, três LEDs (para verificação do acionamento das contatoras) e os dispositivos de segurança. 

## Acionamento de comando

No início da programação, é necessário o acionamento dos dispositivos de segurança, sendo o Fusível (F) e Disjuntor (D). Em seguida, ocorre o dimensionamento da Botoeira Normalmente fechada (B1) em série com a Botoeira Normalmente aberta (B2). A Contatora (K1) deve estar em série com a Botoeira Normalmente aberta, seu contato auxiliar deve estar em paralelo com B2 e o Temporizador (T1) em paralelo com K1.
O contato comutador do temporizador (T1) deve ser acionado, conforme a Figura 22, e a parte Normalmente Fechada (NF) do comutador deve estar em série com o contato Normalmente aberto (NA) de K1, NF de K3 e com o Contator K2, e o LED (L1) em paralelo com K2. Logo após, o contato normalmente aberto do comutador deve estar em série com o contato NF de K2 e em série com K3, e o LED (L2) em paralelo com K3.



## Acionamento de força

O comando de força é realizado com a troca de contato de força dos contatores K2 para K3, na qual há a troca de 53% da tensão nominal para 100%. Assim, quando o K1 é acionado, o K2 também será acionado. Paralelamente, o K2 auxiliar se acionará, impedindo que o K3 acione para evitar que haja um curto no circuito. O motor estará ligado com 53% da tensão nominal e, após 15 segundos colocado no temporizador, ocorre o acionamento de K3. Quando isso ocorrer, o motor trocará de estrela para triângulo, utilizando 100% da tensão nominal.


