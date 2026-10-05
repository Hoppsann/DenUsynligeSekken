# DenUsynligeSekken

[Trykk her for å gå til Den Usynlige Sekken](https://denusynligesekken.mineelever.no/)
![Skjermbilde av DenUsynligeSekken](public/img/denUsynligeSekken.png)

## Hva løsningen gjør
Den usynlige sekken er en webapplikasjon som lar brukeren legge til forskjellige ting i hverdagen som brukeren føler er en belastning i hverdagen som kan blir visuelt vist som en sekk som blir tyngere for hver ting som blir lagt til. Hver belastning har en gitt verdi og blir lagt til en total verdi ut ifra hva brukeren velger. Brukeren kan legge til, fjerne og reset alle belastninegen ut ifra eget valg. Ingen logg inn eller andre opplysninger blir lagret. En helt anonym webapplikasjon. 

## Fordeling av oppgaver
Vi hadde fordelt oppgaver slik at alle fikk de områdene de var best i! Even sto bak mye av styling, Lukas med universell utforming og Andreas med mye JavaScript. Alle har vært bort hverandres oppgaver også for å komme med innspill. Even var prosjekt leder og er eier repositoriet!


## Hvilke teknologier som brukes

### Prosjektet bruker:

Node js, Express, EJS, JavaScipt og CSS, GitHub, Git og Visual Studio Code (vsCode)

## Hvordan prosjektet installeres   


#### Forhåndskjekk:
- Skjekk om Node JS er installert 
- Skjekk om Git er installert
- Skjekk om at du har et programmerings program installert som for eksempel Visual Studio Code

#### Kontroller versjoner:
- Skriv dette for å skjekke node: 
```bash
node -v
```

- Skriv dette for å skjekke Git:
```bash
git --version
``` 
#### Git clone
1. Opprett en mappe
2. Åpne visual studio code 
3. Gå til terminal
4. Skriv in følgende kommand:
```bash
git clone https://github.com/Hoppsann/DenUsynligeSekken
```


### Installer de nødvengige pakkene ved bruk av npm
1. Gå inn på visual stuido code og gå til terminalen 
2. Skriv inn inn følgende kommand for å installere alle pakkene i json filen som kommer ifølge med cloningen av repository
```bash
npm install
```

3. Hvis ikke npm install funket må du skrive inn følgende kommandoer:
```bash
npm i express
```
og

```bash
npm i nodemon
```


## Hvordan prosjektet startes
1. Gå til terminalen 
2. Skriv inn:
```bash
nodemon app.js
```

for a starte serveren

3. Gå til din nettleser og skriv inn: 

```bash
localhost:4000
```
Vi bruker port 4000 på dette prosjektet.

4. Nettsiden skal nå være tilgjengelig

## Hvilke tjeneser som må være tilgjengelig
For at man skal kunen kjøre serveren lokalt på pcen må du ha følgende tilgjengelig:
1. Node js - Dette brukes tlil å kjøre serveren / prosjektet ditt
2. Git - Git må være installert  dersom prosjektet skal hentes fra GitHub repository ved bruk av git clone
3. Visual Studio Code eller annet programmerings program



## Feilsøking 

Det kan oppstå problmemer og da er det viktig at man skjekker følgende ting:

### Skjekk om Node js og git er installert
 
 Kjør følgende kommando i terminalen:
```bash
    node -v
```
Hvis terminalen ikke viser eller finner node må Node js installeres

---

### Skjekk om de nødvenige pakkene er installert

Kjør følgende kommando i terminalen:
```bash
    npm i
```

Dette vil installere de pakkene som ligger i package.json når du cloner prosjektet med git

---

### Skjekk om du er i riktig mappe

Dette kan du teste ved å gå inn i terminalen og skrive in følgende kommando:

```bash
    ls
```

### Kontroller at serveren kjører
 Når du kjører følgende kommando i terminalen:
 ```bash
    nodemon app.js
```

Skal terminalen vise følgene ved oppstart av serveren:
![Skjermbilde av nodemon](public/img/nodemon.png)

Hvis serveren stopper og du får en feilmelding, da må du lese feilmeldingen

### Kontroller port

Kontroller at porten i app.js stemmer overens med nett adressen som blitt oppgitt i nettleseren.

Hvis prosjektet bruker port 4000, da må nett adressen være følgende:

```bash
    http://localhost:4000
```

### Start serveren på nytt

Hvis serveren oppfører seg rart eller uventet kan du stoppe serveren med:

<u>Windows</u>: Ctrl + C

<u>Mac</u>: Control + C


Start serveren deretter på igjen med følgende kommando i terminalen:

```bash
    nodemon app.js
```