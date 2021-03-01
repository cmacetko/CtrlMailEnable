var Powershell = require('node-powershell')

var util = require('./util');

var ObjPs;

/*
############################################################
*/

async function init() {

    return new Promise((resolve, reject) => {

        try {

            ObjPs = new Powershell({
            executionPolicy: 'Bypass',
            noProfile: true
            });
            
            ObjPs.addCommand('Add-PSSnapin MailEnable.Provision.Command')
            ObjPs.invoke()
            .then(output => {

                resolve();

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

/*
############################################################
*/

async function contas_listar(Conta) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Get-MailEnableDomain')
            ObjPs.invoke()
            .then(output => {

                if( output != "" )
                {

                    var TmpSep          = output.split("\n");
                    var RetFinal        = [];

                    TmpSep.forEach(function(TmpSep2){

                        if( TmpSep2 != "" )
                        {

                            var TmpSep2     = TmpSep2.trim();

                            if( TmpSep2 != "" )
                            {

                                var TmpSep3     = TmpSep2.split(":");
                                var TmpSep3A    = TmpSep3[0].trim();
                                var TmpSep3B    = TmpSep3[1].trim();

                                if( TmpSep3A == "AccountName" )
                                {
                                    
                                    if( !RetFinal.includes(TmpSep3B) )
                                    {

                                        RetFinal.push(TmpSep3B);

                                    }

                                }

                            }

                        }
                
                    });

                    resolve(RetFinal);

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function contas_is(Conta) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Get-MailEnableDomain -Postoffice "' + Conta + '"')
            ObjPs.invoke()
            .then(output => {

                if( output != "" )
                {

                    resolve(true);

                }else{

                    resolve(false);

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function contas_status(Conta, Status) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Set-MailEnablePostoffice -Postoffice "' + Conta + '" -Setting poEnabled -Value ' + (( Status == true ) ? '1' : '0'))
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function contas_criar(Conta) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('New-MailEnablePostoffice -Postoffice "' + Conta + '" -Domain "' + Conta + '"')
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function contas_deletar(Conta) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Remove-MailEnablePostoffice -Postoffice "' + Conta + '"')
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

/*
############################################################
*/

async function emails_listar(Conta) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Get-MailEnableMailbox -Postoffice "' + Conta + '"')
            ObjPs.invoke()
            .then(output => {

                if( output != "" )
                {

                    var TmpSep          = output.split("\n");

                    var TmpNome         = "";
                    var TmpStatus       = "";
                    var TmpLimite       = "";
                    var TmpTamanho      = "";

                    var RetFinal        = [];

                    TmpSep.forEach(function(TmpSep2){

                        if( TmpSep2 != "" )
                        {

                            var TmpSep2     = TmpSep2.trim();

                            if( TmpSep2 != "" )
                            {

                                var TmpSep3     = TmpSep2.split(":");
                                var TmpSep3A    = TmpSep3[0].trim();
                                var TmpSep3B    = TmpSep3[1].trim();

                                if( TmpSep3A == "MailboxName" ){
                                    
                                    TmpNome         = TmpSep3B;

                                }else if( TmpSep3A == "Status" ){
                                    
                                    TmpStatus       = TmpSep3B;

                                }else if( TmpSep3A == "Limit" ){
                                    
                                    TmpLimite       = TmpSep3B;

                                }else if( TmpSep3A == "Size" ){
                                    
                                    TmpTamanho      = TmpSep3B;

                                }else if( TmpSep3A == "Host" ){
                                    
                                    RetFinal.push({
                                        "Nome": TmpNome,
                                        "Status": TmpStatus,
                                        "Limite": TmpLimite,
                                        "Tamanho": TmpTamanho
                                    })

                                }

                            }

                        }
                
                    });

                    resolve(RetFinal);

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_is(Conta, Email) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Get-MailEnableMailbox -Postoffice "' + Conta + '" -Mailbox "' + Email + '"')
            ObjPs.invoke()
            .then(output => {

                if( output != "" )
                {

                    resolve(true);

                }else{

                    resolve(false);

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_criar(Conta, Email, Senha, Limite) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('New-MailEnableMailbox -Domain "' + Conta + '" -Mailbox "' + Email + '" -Password "' + Senha + '" -Right "USER"')
            ObjPs.invoke()
            .then(output => {

                console.log(output);
                
                if( output == "" )
                {

                    (async function(){
                            
                        await emails_alterar_limite(Conta, Email, Limite);

                    })();
                    
                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_alterar_senha(Conta, Email, Senha) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Set-MailEnableMailbox -Postoffice "' + Conta + '" -Mailbox "' + Email + '" -Setting mailboxPassword -Value "' + Senha + '"')
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_alterar_limite(Conta, Email, Limite) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Set-MailEnableMailbox -Postoffice "' + Conta + '" -Mailbox "' + Email + '" -Setting mailboxLimit -Value "' + Limite + '"')
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_alterar_status(Conta, Email, Status) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Set-MailEnableMailbox -Postoffice "' + Conta + '" -Mailbox "' + Email + '" -Setting mailboxStatus -Value ' + (( Status == true ) ? '1' : '0'))
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

async function emails_deletar(Conta, Email) {

    return new Promise((resolve, reject) => {

        try {

            ObjPs.addCommand('Remove-MailEnableMailbox -Postoffice "' + Conta + '" -Mailbox "' + Email + '"')
            ObjPs.invoke()
            .then(output => {

                if( output == "" )
                {

                    resolve();

                }else{

                    throw "Falha em Executar Comando: " + output;

                }

            })
            .catch(err => {

                ObjPs.dispose();

                throw err;

            });

        } catch(err) {
            
            throw err;

        }
        
    });

}

/*
############################################################
*/

module.exports.init = init;

module.exports.contas_listar = contas_listar;
module.exports.contas_is = contas_is;
module.exports.contas_status = contas_status;
module.exports.contas_criar = contas_criar;
module.exports.contas_deletar = contas_deletar;

module.exports.emails_listar = emails_listar;
module.exports.emails_is = emails_is;
module.exports.emails_criar = emails_criar;
module.exports.emails_alterar_senha = emails_alterar_senha;
module.exports.emails_alterar_limite = emails_alterar_limite;
module.exports.emails_alterar_status = emails_alterar_status;
module.exports.emails_deletar = emails_deletar;