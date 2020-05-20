# Oefeningen
Bij het maken van elke oefening, voorzie als je props moet doorsturen typechecking.

### Oefening 1

Bouw een component ScoreComponent.  
Het ScoreComponent heeft volgende beginstate:
```
{ total: 100}
```
Scorecomponent rendert de volgende 6 OperationComponents  
 +1, +10  
 -1, -10  
 *2, /2  
 Bouw een OperationComponent.  
 Het OperationComponent krijgt 2 props binnen, namelijk:
 - Operation (string)
 - number
 
 Zorg ervoor dat als er op een button in het OperationComponent geklikt wordt de total property
 van het ScoreComponent wordt aangepast naargelang de meegegeven props in het OperationComponent.
 Een OperationComponent die dus de props "add" en 10 binnen kreeg zal het total met 10 verhogen.
 
 ### Oefening 2
 Breid oefening 1 nu verder uit.
 
 Als het scoreComponent een '+' of '*' operation binnenkrijgt van een OperationComponent EN total
 is 200 of hoger, verhoog dan een property numberOfSymbols met 1 (dit is een property die je bijhoudt in de state
 van je component)  
  Zorg ervoor dat het ScoreComponent enkel als total hoger als 200 is een SymbolComponent rendert.  
  Het SymbolComponent krijgt 2 props binnen, namelijk een symbool en een aantal.  
  Zorg ervoor dat het Symbolcomponent een string in een h2-element laat zien die bestaat uit het 
  symbool, een spatie, en dit x-aantal keer (zovaak als de aantal prop).
  De props [":)", 3] leveren dus als resultaat ":) :) :) " op. Zorg ervoor dat je een computed property gebruikt
  om deze string op te bouwen.
  
  Als het aantal groter als 10 is wil ik dat de tekst een zwarte achtergrond en witte tekstkleur krijgt.
  Is het aantal kleiner als 10 dan moet de tekst een rode kleur krijgen en een grijze achtergrond.
  
  ### Oefening 3 
  Schrijf een component AdressList.
  
  Zorg ervoor dat je component uit je vuex store een lijst van klanten haalt.
  Toon deze klantgegevens in een lijst.
  Voorzie nu een kort formuliertje waar je een naam en adres in kunt geven.
  Zodra de gebruiker op 'subscribe' klikt moeten zijn ingevulde gegevens toegevoegd worden aan de vuex store en moet
  hij/zij in de lijst toegevoegd worden.
  
  Als de gebruiker een veld leeg liet, commit dan een error message naar je store. Zorg ervoor dat de
  error message vanuit je store weergegeven wordt ergens in je component.

### Oefening 4
Breid oefening 3 verder uit.

Voeg een CustomerDetails component toe waarin je een gedetailleerde view van de gegevens van een gebruiker kunt zien.
Door op 2 pijltjes te klikken kun je naar de vorige of de volgende gebruiker gaan.