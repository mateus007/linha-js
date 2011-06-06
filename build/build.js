#!/usr/bin/env node

/**
 * Build para Linha JS
 * Use Tuild para rodar este script - https://github.com/mateus007/tuild
 */
var VERSION = '1.3.1',
	
	// Se true, irá separar o Linha JS dos Plugins Linha, na versão minified (NÂO SE APLICA A VERSÂO DEV)
	SEPARADO = true,
	
	// Linha JS
	linha = {
		dir: '../src/linha/',
		arquivoDev : '../dist/linha-' + VERSION + '.js',
		arquivoMin: '../dist/linha-' + VERSION + '.min.js'
	},
	
	// Plugins Linha
	pluginsLinha = {
		dir: '../src/plugins/',
		arquivoDev: '../dist/linha.plugins.js',
		arquivoMin: '../dist/linha.plugins.min.js'
	},

Tuild = require('tuild');

/**
 * Previne erros desnecessários do validador
 */
Tuild.JS.addHintOk("'L' is not defined.");
Tuild.JS.addHintOk("The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.");
Tuild = Tuild.Tuild;
//Tuild.__quiet = true;
watch = false;

// Linha JS - DEV
Tuild.log('\nLinha JS - DEV');

Tuild.command(
'js -dev ' + ( (watch) ? '--watch ': '' ) +
	linha.dir + 'core.js+' +  
	linha.dir + 'string.js+' + 
	linha.dir + 'object.js+' +
	linha.dir + 'array.js+' + 
	linha.dir + 'dom.js+' + 
	linha.dir + 'css.js+' + 
	linha.dir + 'events.js' + 
' > ' + 
	linha.arquivoDev
);

// Linha JS - Plugins DEV
Tuild.log('\nPlugins Linha - DEV');

Tuild.command(
'js -dev ' + ( (watch) ? '--watch ': '' ) +
	pluginsLinha.dir + 'browserSelector.js+' + 
	pluginsLinha.dir + 'load.js' + 
' > ' + 
	pluginsLinha.arquivoDev
);

/**
 * Separa ou não o Linha JS dos plugins?
 * > SIM
 * > NÃO
 */
if(SEPARADO){
	
	// Linha JS - MIN
	Tuild.log('\nLinha JS - MIN');
	Tuild.command('js -min ' + ( (watch) ? '--watch ': '' ) + linha.arquivoDev + ' > ' + linha.arquivoMin);
	
	// JS - Plugins Linha MIN
	Tuild.log('\nPlugins Linha - MIN');
	Tuild.command('js -min ' + ( (watch) ? '--watch ': '' ) + pluginsLinha.arquivoDev + ' > ' + pluginsLinha.arquivoMin);
	
}else{
	
	//JS - Linha + Plugins MIN
	Tuild.log('\nLinha JS + Plugins Linha - MIN');
	
	Tuild.command(
	'js -min ' + ( (watch) ? '--watch ': '' ) +
		linha.arquivoDev + '+' + 
		pluginsLinha.arquivoDev +
	' > ' + 
		linha.arquivoMin
	);
	
}