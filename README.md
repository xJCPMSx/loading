# Loading
Tela de loading feita para carregamento inicial do site.

## Classes
**.loadingaberto**<br/>
Classe deve iniciar no body para passar os atributos necessários para a página nao ficar "quebrando" enquanto o loading está ativo. Quando terminar o loading a classe será removida via jQuery.

**.loading**<br/>
Background. Aconselho não usar transparência pois um dos intuitos da tela de loading (para mim o principal), é esconder as quebras do site abrindo.<br/>

**.logo-loading**<br/>
Logo.

**.icone-loading**<br/>
Circulo de loading animado.

> Após alguns testes, tive melhores resultados deixando os elementos separados. Aconselho não colocar a .logo-loading e o .icone-loading dentro do .loading.


## Arquivos
**loading.css**<br/>
Este arquivo deve conter apenas o que for referente a tela de loading. Quanto menos conteúdo melhor, pois ele será o único arquivo CSS que será carregado na HEAD do site. Os demais css aconselho deixar no fechamento do body.

**loading.js**<br/>
Script para fazer o fechamento da tela de loading. Este script pode ser chamado no fechamento do body também e junto com o restante dos scripts do site.
