# CtrlMailEnable

>  CtrlMailEnable é um conjunto de funções para gerenciar o MailEnable

![Language](https://img.shields.io/badge/language-nodejs-orange)
![Platforms](https://img.shields.io/badge/platforms-Windows%2C%20macOS%20and%20Linux-blue)
![License](https://img.shields.io/github/license/cmacetko/ctrlmailenable)
[![HitCount](http://hits.dwyl.com/cmacetko/ctrlmailenable.svg)](http://hits.dwyl.com/cmacetko/ctrlmailenable)

**MailEnable** é um servidor de e-mail, porem, não possui API.
Toda gestão é feita via interface gráfica ou via powershell, o que acaba dificultando um gerenciamento automático do servidor.
Para contornar isto, criei um repositório que gerencia as contas utilizando o PowerShell.

------------

## Instalando

```javascript
npm install ctrlmailenable
```

## Carregando o repositório

```javascript
var MailEnableCtrl = require('CtrlMailEnable');
```

## Iniciando

Antes de executar alguma das funções precisamos definir iniciar o Powershell e carregar os comandos do MailEnable.
Esta é uma função assíncrona e após sua conclusão é feito as chamadas as funções.

```javascript
MailEnableCtrl.init().then(function(){

	// Aqui você faz a chamada a função desejada

}).catch(function(err){

	console.log(err);

});
```

## Listar as Contas

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.contas_listar().then(function(DadRet){

		console.log(JSON.stringify(DadRet));

	}).catch(function(err){

		console.log(err);

	});

}).catch(function(err){

	console.log(err);

});
```

### Retorno

```json
[
	"teste1.com",
	"teste2.com"
]
```

## Verifica se uma Conta Existe

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

    MailEnableCtrl.contas_is("example.com").then(function(DadRet){

		console.log(JSON.stringify(DadRet));
    
    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

### Retorno

```json
true/false
```

## Altera o Status de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.contas_status("example.com", true).then(function(){

		console.log("Sucesso");

	}).catch(function(err){

		console.log(err);

	});

}).catch(function(err){

	console.log(err);

});
```

## Criar uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.contas_criar("examplec.com").then(function(){

		console.log("Sucesso");

	}).catch(function(err){

		console.log(err);

	});

}).catch(function(err){

	console.log(err);

});
```

## Deletar Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.contas_deletar("examplec.com").then(function(){

		console.log("Sucesso");

	}).catch(function(err){

		console.log(err);

	});

}).catch(function(err){

	console.log(err);

});
```

## Listar E-mails de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_listar("examplec.com").then(function(DadRet){

		console.log(JSON.stringify(DadRet));

	}).catch(function(err){

		console.log(err);

	});

}).catch(function(err){

	console.log(err);

});
```

### Retorno

```json
[
   {
      "Nome":"Postmaster",
      "Status":"1",
      "Limite":"-1",
      "Tamanho":"0"
   },
   {
      "Nome":"teste1",
      "Status":"1",
      "Limite":"-1",
      "Tamanho":"0"
   }
]
```

## Verificar se um E-mail Existe em uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_is("examplec.com", "teste1").then(function(DadRet){

		console.log(JSON.stringify(DadRet));

	}).catch(function(err){

		console.log(err);

	});
	
}).catch(function(err){

	console.log(err);

});
```

### Retorno

```json
true/false
```

## Cria um E-mail em uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_criar("examplec.com", "teste1", "123456", "250000").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

## Alterar Senha de um E-mail de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_alterar_senha("examplec.com", "teste1", "123456").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

## Alterar Limite de um E-mail de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_alterar_limite("examplec.com", "teste1", "250000").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

## Verificar Status de um E-mail de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_alterar_status("examplec.com", "teste1", true).then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

## Deletar E-mail de uma Conta

### Chamando

```javascript
MailEnableCtrl.init().then(function(){

	MailEnableCtrl.emails_deletar("examplec.com", "teste1").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

	console.log(err);

});
```

## Referências

## Sucesso/Erro

Em todas funções temos o retorno controlado em **then** e **catch** *(Padrão para funções Promises)*.
Na função **catch** esta presente um parâmetro que retorna um objeto **Error** indiando a causa do erro.

### Exemplo de Erro

#### Chamada

```javascript
MailEnableCtrl.init().then(function(){

    MailEnableCtrl.emails_deletar("XXXXXXXXXXX").then(function(){

        console.log("OK");

    }).catch(function(err){

        console.log(err);

    });

}).catch(function(err){

    console.log(err);

});
```

#### Retorno

```shell
Error: Error: Error: Conta nao localizada
    at Promise (C:\index.js:535:19)
    at new Promise (<anonymous>)
    at Object.contas_criar (G:\index.js:362:12)
    at G:\tests.js:7:19
```

# Contato

**Paloma Macetko**
- cmacetko@gmail.com
- https://github.com/cmacetko/
- https://www.npmjs.com/~cmacetko
- https://cmacetko.medium.com
- https://www.facebook.com/cmacetko
- https://www.instagram.com/cmacetko/
- https://twitter.com/cmacetko
- [Skype: cmacetko](skype:cmacetko "cmacetko")
- [Whatsapp: 47-91277858](https://wa.me/554791277858 "Whatsapp: 47-91277858")