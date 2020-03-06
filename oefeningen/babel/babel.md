# [Babel](https://babeljs.io/)

Babel is een javascript compiler die developers toelaat next-generation javascript features te gebruiken
zonder zich zorgen te moeten maken of het wel ondersteund wordt door een bepaalde/elke browser.

It can be frustrating to write JavaScript when building web applications. We have to think about the features available in the browsers we’re targeting and what happens when a feature isn’t implemented. Some people would recommend simply not using it, which is a painful experience most of the time if we’re building something complicated.

Thankfully, some tools allow us to stop worrying about what’s supported and just write the best code we can. They’re called transpilers. A transpiler is a tool that takes source code as input and produces new source code as output, with a different syntax but semantically as close as possible — or ideally equivalent — to the original.

Babel is pretty much the standard transpiler to translate modern JavaScript (ES2015+) into compatible implementations that run in old browsers. It’s the perfect solution if you just want to concentrate on writing JavaScript.

# Praktijkoefening
## 1. package.json
Navigeer in je terminal naar de ``babel`` directory.

Allereerst gaan we een package.json aanmaken om onze dependencies te beheren.

Typ in je terminal:  
``npm init -y``  
``npm install --save-dev babel-cli``

``npm init`` gaat een package.json file genereren. De ``-y`` option zorgt ervoor dat de file gegenereerd wordt zonder vragen
te stellen.  
Meer info [hier](https://docs.npmjs.com/cli/init)

het ``npm install --save-dev babel-cli`` commando gaat de babel command-line interface aan het project toevoegen en aan 
onze developer dependencies toevoegen.  
Bekijk nu je ``package.json`` opnieuw, je zou nu babel in de lijst van ``devDependencies`` moeten zien staan.


## 2. Adding a build script 
Nu gaan we een build command toevoegen aan onze npm scripts in ``package.json``

```
"scripts": {
  "build": "babel src -d dist"
}
```
Dit gaat al onze files uit de ``src`` directory compilen en gaat het resultaat outputten naar de ``dist`` directory.  
De ``-d`` optie is de verkortte schrijfwijze voor ``--out-dir``, wat eigenlijk gewoon wilt zeggen 

Dit script zouden we nu kunnen runnen met ``npm run build``. Dit gaat echter nog niks doen atm.  

### 3. Configure babel
Voor we babel kunnen runnen moeten we echter nog eerst configureren welke plugins we willen gebruiken om onze code te transpilen.  
De gemakkelijkste en snelste manier om dit te doen is door de [preset-env](https://babeljs.io/docs/en/babel-preset-env/)
te gebruiken.  
            
> De ``preset-env`` gaat de nodige plugins voor ons voorzien. Eventueel op basis van een lijst van browsers die we 
>definiëren te willen ondersteunen. Deze preset bevat ook al de laatste next-gen javascript features.

Typ in je terminal: ``npm install --save-dev @babel/preset-env``

Maak binnen de babel directory een nieuwe file aan en noem hem ``.babelrc``.  
De ``.babelrc  `` file bevat de configuration settings die babel moet gebruiken.  
Om nu onze preset te activeren gaan we hem moeten definiëren in onze config file.
```
{
  "presets": ["@babel/preset-env"]
}
```
Babel is nu geconfigureerd.

---
In ``index.js`` staat een stukje code. In dit stukje code wordt gebruik gemaakt van `destructuring`.  
Destructuring is een relatief nieuwe javascript functionaliteit en wordt daardoor nog niet door alle browsers ondersteund.  
Om zeker te zijn dat onze code toch op die browsers ook zou werken gaan we deze code door babel laten transpilen naar een oudere versie van javascript die wel door die browser ondersteund wordt.  

Voor wie het zich nog kan herinneren, `destructuring` kwam 2 weken geleden even aan bod in de les. Voor zij die een opfrissing nodig hebben kunnen 
[hier](https://www.sitepoint.com/es6-destructuring-assignment/) even kijken ``:)``  
``ps: als jullie willen dat ik er even opnieuw overheen ga, feel free to ask.``

Run nu je ``build script`` dat we eerder definiëerden in ``package.json`` door dit commando in je terminal te runnen vanuit
de directory waar de package.json staat waar je het script definiëerde:  
``npm run build``

Als je nu in de `dist` directory gaat kijken zou je getranspileerde file daar aanwezig moeten zijn.  
Leg deze file eens naast je originele file en bekijk de verschillen.
