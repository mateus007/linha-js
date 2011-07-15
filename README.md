LINHA JS - 1.3.1
=====================
<https://github.com/mateus007/linha-js> || by Mateus Souza - mateussouzaweb@gmail.com | <http://mateussouza.com>

### Licença
MIT and GPL License - <http://www.opensource.org/licenses/mit-license.php> || <http://www.gnu.org/licenses/gpl.html>

LINHA JS - L()
========================
Linha JS - "L" - é um framework Javascript como os demais, bem semelhante ao jQuery e ao Mootools, por exemplo, mas, com uma grande diferença: é extremamente leve - apenas 5kb com gzip -, o que torna vantajoso o uso dele em qualquer projeto. Foi desenvolvido tendo como regras, o básico de qualquer framework JS: selecionar, editar propriedades/atributos, alterar CSS e adicionar/remover eventos a qualquer elemento com mais rapidez e facilidade.

Linha JS, também extende funções em qualquer String, Array e Objeto presente em seu código JS, semelhantemente ao trabalho que faz o Mootools ou Prototype (jQuery não faz isso). Além de tornar tudo totalmente extensível, para desenvolvimentos de plugins ou novas funcionalidades, por exemplo - Você pode extender facilmente o Linha JS, Strings, Arrays, Objetos, Datas, Numbers, Regexs, Frameworks... Um exemplo prático que Linha JS já faz é, adicionar algumas funcionalidades do Javascript 1.8.5 a navegadores antigos.

Conta também, desde sua versão inicial, alguns plugins para facilitar o desenvolvimento de projetos: Browser Selector e Load - lazy loading. 

<b>Linha Browser Selector</b>: adiciona classes ao HTML de acordo com o OS, navegador, resolução do navegador e propriedades CSS3 suportadas. Assim, você pode trabalhar o CSS da melhor maneira pra cada variação disponível e desejada. Ex: Estilos IE, Responsive Webdesign...

<b>Linha Load</b>: faz o carregamento dinâmico para Scripts Javascript e estilos CSS, logo após que o DOM é totalmente carregado, aumentando assim a performance do projeto drásticamente... experimente!

É claro que Linha JS é muito mais do que isto, mas vamos parar por aqui... se quiser saber mais detalhes veja a documentação.

Compatibilidade (Principais Navegadores):

* Chrome 5+
* Firefox 2+
* Internex Explorer 6+
* Opera 9.6+
* Safari 3+

Compatibilidade (Demais Navegadores):

* Avant Browser 10.2+
* Camino 1+
* Fennec 1+
* Flock 2.6+
* Maxthon 2.5+
* OmniWeb 5.1+
* RockMelt 0+
* SeaMonkey 1.1+
* SlimBrowser 4+
* Stainless 0+
* Existe outro browser? Avise :)

### Compilando seu JS

Para compilar sei Linha JS, você precisa ter em mãos [NodeJS + NPM + Tuild](https://gist.github.com/866799). O processo é bem simples: Depois de terminada as alterações do SRC do JS, abra o terminal na pasta /build e execute os seguintes comando:
	
	node build.js 
	
Recomendo que dêem uma olhada no arquivo /build/build.js, pois nele há algumas opções para customização do compilador.

FUNÇÔES
=========================
	
	// String - Prototype
	String.prototype.test(pattern, flags)
	String.prototype.toArray()
	String.prototype.toUri()
	String.prototype.trim()
	
	// Object - Extend
	Object.clean(object, _this)
	Object.each(object, fn, _this)
	Object.every(object, fn, _this)
	Object.filter(object, fn, _this)
	Object.forEach(object, fn, _this)
	Object.keyOf(object, value)
	Object.keys(object)
	Object.map(object, fn, _this)
	Object.merge(object, merge)
	Object.remove(object, item)
	Object.size(object)
	Object.toArray(object)
	Object.values(object)
	
	// Array - Extend
	Array.each: function(array, fn, _this){
	Array.forEach: function(array, fn, _this){
	
	// Array - Prototype
	Array.prototype.clean()
	Array.prototype.clone()
	Array.prototype.each(fn, _this)
	Array.prototype.every(fn, _this)
	Array.prototype.filter(fn, _this)
	Array.prototype.forEach(fn, _this)
	Array.prototype.indexOf(item, index)
	Array.prototype.map(fn, _this)
	Array.prototype.remove(item)
	Array.prototype.size()
	
	// Funções Linha
	L.delay(fn, tempo /*, arguments*/)
	L.domReady()
	L.eventTrigger(event, data, elem)
	L.extend(object, extend)
	L.is(type, item)
	L.isChildren(elem, parent)
	L.ready(fn)
	L.regexClass(name)
	
	// DOM Manipulation
	L(selector, context)
	
	L.fn.addClass(name)
	L.fn.attr(name, value)
	L.fn.bind(type, fn)
	L.fn.css(style, value)
	L.fn.data(name, value)
	L.fn.delegate(selector, type, fn)
	L.fn.each(fn)
	L.fn.eq(eq)
	L.fn.filter(fn)
	L.fn.first()
	L.fn.getStyle(name)
	L.fn.hasClass(name)
	L.fn.html(value)
	L.fn.last()
	L.fn.offset()
	L.fn.position()
	L.fn.push()
	L.fn.removeAttr(name)
	L.fn.removeClass(name)
	L.fn.removeData(name)
	L.fn.setStyle(name, value)
	L.fn.size()
	L.fn.sort()
	L.fn.splice()
	L.fn.text(text)
	L.fn.toggleClass(name)
	L.fn.trigger(type, data)
	L.fn.unbind(type, fn)
	L.fn.undelegate(selector, type, fn)
	L.fn.val(value)
	
	//Extra
	Function.prototype.extend(extend)
	Function.prototype.implement(implement, overlay)
	
CHANGELOG
=========================

#### 1.3.1

 * Adicionado métodos Array.clone() & L.filter()
 * Fix de parâmetro para L.ready()
 * Fix para previnir erros onde nenhum elemento é selecionado
 * Fix para Object.keys() e Object.values() - console do chrome causava o erro

#### 1.3

 * Inicial