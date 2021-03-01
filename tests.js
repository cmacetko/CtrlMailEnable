var MailEnableCtrl = require('./lib');

MailEnableCtrl.init().then(function(){

    /*
    MailEnableCtrl.contas_listar().then(function(DadRet){

        console.log(JSON.stringify(DadRet));

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.contas_is("example.com").then(function(DadRet){

        console.log(JSON.stringify(DadRet));

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.contas_status("example.com", true).then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.contas_criar("examplec.com").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.contas_deletar("examplec.com").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_listar("examplec.com").then(function(DadRet){

        console.log(JSON.stringify(DadRet));

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_is("examplec.com", "teste1").then(function(DadRet){

        console.log(JSON.stringify(DadRet));

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_criar("examplec.com", "teste1", "123456", "250000").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_alterar_senha("examplec.com", "teste1", "123456").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_alterar_limite("examplec.com", "teste1", "250000").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_alterar_status("examplec.com", "teste1", true).then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

    /*
    MailEnableCtrl.emails_deletar("examplec.com", "teste1").then(function(){

        console.log("Sucesso");

    }).catch(function(err){

        console.log(err);

    });
    */

}).catch(function(err){

    console.log(err);

});