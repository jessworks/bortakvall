# Inlämningsuppgift 2
Gör en enkel webbshop där man ska kunna lägga produkter i en varukorg och därefter ”gå till kassan” för att lägga en order.  

Changelog: Inga ändringar hittills.

# Inlämning
Senast tisdag 26 maj kl. 23:59 under Inlämningsuppgift 2 för kursen i Itslearning.   
Skicka in uppgiften på Itslearning och skriv:
- Länk till ditt GitHub Classroom-repo
- Ev. länk till deployad sajt
- Om du gjort G eller VG-nivå
- Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämning

## Hygienkrav
Ska uppfyllas

- Layout ska vara responsiv
  - mobile first
  - minst 3 olika breakpoints
- HTML ska vara semantiskt korrekt
- Användning av TypeScript enligt Best Practises
- Kommunikation med API:et
  - ska ske via en separat service (egen modul)
  - som utför de faktiska förfrågningarna
  - och returnerar resultatet
- eslint, tsc och type-coverage ska gå igenom utan några errors (dvs >=99% type coverage)
- ~~Använda reaktivt ramverk~~
  
  <b>--> projekt från scratch utan AI</b>
  - All kod ska vara skriven av dig själv (ingen generering av kod!) och oanvänd kod ska vara bortstädad (du ska alltså skapa en helt ny, tom app och koda upp den från           grunden, och inte bara modifiera ett av mina exempel)
  - I fallet med generering av kod leder detta till att uppgiften blir omedelbart underkänd   
 


## G Krav
- Gör en enkel webbshop som går mot ett API skapat av examinator
  - där du hämtar ut produkter
  - som kan läggas i en varukorg
  - och därefter placera en order
    - via <b>POST</b> till API-endpoint som examinator satt upp
 
- När besökaren kommer till sidan ska samtliga produkter visas med
  - bild (tumnagel)
  - namn
  - pris
  - “Lägg till i varukorgen”-knapp.
  
- Besökaren ska kunna lägga till flera exemplar av en produkt i varukorgen
  
- G-nivå tillåter att varje exemplar av en produkt visas som separata rader i varukorgen
  
- Användaren ska kunna klicka in på en produkt
  - förslagsvis genom en “Läs mer”-länk
  - och där se mer information om produkten
    - stor bild, namn, pris, beskrivning
    - utan att varukorgen förloras

- Varukorgen ska visas med en sammanställning på sidan som går att fälla ut
  - där man också ska kunna ta bort en produkt från varukorgen
  - man ska kunna se summan för alla produkter i varukorgen.

- I varukorgen ska en “Gå till kassan”-knapp finnas
  - visar ny vy där man fyller i
  - förnamn, efternamn, adress, postnr, ort, telefon (ska ej vara required) och e-post.

- När man lägger beställningen
  - visas eventuella fel
  - om beställningen lyckas
    - visas ordernummer för beställningen
    - samt tack-meddelande

- Vid omladdning av sajten ska den återgå till samma vy som före omladdningen
  - överlever refresh


## VG Krav
- Användning av Generic Types för API-responser
  
- Användning av sammansatta typer (intersection/extends)
  - undvik upprepning i typer t.ex
    - vid hämtning av alla produkter
    - vid hämtning av en enskild produkt

- Felhantering av request och response

- eslint, tsc och type-coverage ska gå igenom utan varningar

- 100% type-coverage

- Man ska kunna klicka på “Lägg till i varukorgen”
  - flera gånger för en produkt
  - varan visas en gång i varukorgen med notering om antal

- Man ska kunna visa alla produkter som har en specifik tagg, ex)
  - om man är inne på Banana Bubs så ska man se vilka etiketter produkten har
  - när man klickar på en etikett så ska man se alla produkter med samma etikett

- Varje produkt i varukorgen ska ha +/- knappar för att öka/minska antalet
  - produkten tas bort från varukorgen när antalet blir 0

- Man kan inte lägga till fler antal av en produkt än vad som finns i lager

- När beställning gått igenom ska varukorgen tömmas på produkter

- Varukorg och kundinformation (om det finns sedan tidigare beställningar)
  - ska även sparas i Local Storage så det överlever omladdning av sidan


## API
https://www.bortakvall.se/api/v2

Du registrerar ett konto på https://www.bortakvall.se/register för att få ett userId som ni sen använder i URL:en när ni skickar in en order.

Med kontot kan du även logga in på https://www.bortakvall.se/login och se alla era inskickade ordrar.

### Endpoints
<b>GET /products</b>   
- Listar alla produkter, dock utan beskrivning

Bilder är rot-relativa länkar
- dvs du behöver prefixa dem med URL:en till sidan (https://www.bortakvall.se).
- Exempel:   

"images": {   
    "thumbnail": "/storage/products/thumbnails/156622-300x300.png",   
    "large": "/storage/products/156622.png"   
}   

Den kompletta URL:en för thumbnail hade blivit:
https://www.bortakvall.se/storage/products/thumbnails/156622-300x300.png.

<b>GET /products/:productId</b>   
- Listar en enskild produkt

<b>GET /tags</b>   
- Listar alla taggar (etiketter)

<b>GET /tags/:tagId</b>   
- Listar alla produkter som har taggen/etiketten tagId. Samma struktur som när man hämtar alla produkter

<b>POST /users/:userId/orders</b>   

#### Validering
- <b>customer_first_name</b> (sträng, max 255 tecken)   
- <b>customer_last_name</b> (sträng, max 255 tecken)   
- <b>customer_address</b> (sträng, max 255 tecken)   
- <b>customer_postcode</b>  (sträng, max 6 tecken)   
- <b>customer_city</b> (sträng, max 255 tecken)   
- <b>customer_email</b> (sträng, måste vara en e-postadress, max 255 tecken)   
- <b>customer_phone</b> (ej obligatorisk, måste vara en sträng, max 255 tecken)   
- <b>order_total</b> måste vara summan av alla <b>item_total</b>    
<b>order_items</b>  
  - <b>product_id</b> måste existera   
  - <b>qty</b> måste vara ett positivt heltal   
  - <b>item_price</b> måste stämma för product_id   
  - <b>item_total</b> måste vara <b>qty</b> multiplicerat med <b>item_price</b>

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/kHTS4vT3)
