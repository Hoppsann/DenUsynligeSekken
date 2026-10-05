# DenUsynligeSekken

[Trykk her for å gå til Den Usynlige Sekken](https://denusynligesekken.mineelever.no/) [![Skjermbilde av DenUsynligeSekken](public/img/denUsynligeSekken.png)](public/img/denUsynligeSekken.png)

## Hva løsningen gjør

Den usynlige sekken er en webapplikasjon der brukeren kan legge til ting i hverdagen som oppleves som en belastning. Belastningene vises visuelt som en sekk som blir tyngre for hver ting som legges til. Hver belastning har en gitt verdi og blir lagt til en total verdi ut fra hva brukeren velger. Brukeren kan legge til, fjerne og tilbakestille alle belastningene etter eget valg. Applikasjonen krever ingen innlogging, og brukernes opplysninger lagres ikke. Dette gjør at løsningen kan brukes anonymt.

## Hvordan prosjektet er organisert

```
DenUsynligeSekken/
├── app.js            # Serveren (localhost:4000)
├── package.json      # Avhengigheter
├── package-lock.json
├── .gitignore
├── README.md
├── public/           # CSS, JS, IMG
└── views/            # EJS
```

## Fordeling av oppgaver

Vi fordelte oppgavene slik at alle fikk de områdene de var best i! Even sto bak mye av stylingen, Lukas jobbet med universell utforming og Andreas med mye JavaScript. Alle har vært innom hverandres oppgaver også for å komme med innspill. Even var prosjektleder og eier repositoriet!

## Samarbeid og Git

Vi brukte Git og GitHub gjennom hele prosjektet. Alle på gruppen har bidratt til repositoryet.

- **Branches vi brukte:** `changeImgForm`, `addingSekk`, `sekkenSekk`, `askUser`, `addingPartsToSekk`, `addingRemoveToSekk`, `addingParts`, `addingImg`, `addingReadme`, `addedImages`, `newChanges` og `finalChanges`
- **Hvordan vi slo sammen arbeidet:** Hver branch ble slått sammen i `main` med en pull request på GitHub.
- **Hvem som slo sammen hva:** Andreas (GitHub: `LohnyVal`) lagde de fleste pull requestene, og Even (GitHub: `Hoppsann`) lagde blant annet `sekkenSekk` og `newChanges`.
- **Hvordan vi testet hverandres arbeid:** Enten så pusha vi til egen branch og pulla fra en annen pc sånn at de kunne se og teste endringene, eller så gikk vi fysisk til hverandres pcer og kommenterte og så på andres arbeid og endringer.

### Merge conflict

Under prosjektet fikk vi en merge conflict, som ble løst i pull request #15 (branch `newChanges`, 24. september) med committen «fixing merge conflict».

- **Hvorfor den oppstod:** Even (GitHub: `Hoppsann`) og Andreas (GitHub: `LohnyVal`) hadde pusha til samme branch med forskjellig styling på listen på venstre side i `style.css` og `sekken.ejs`
- **Hva vi valgte å beholde:** Vi valgte å beholde Even (GitHub: `Hoppsann`) sin nyere og mer oppdaterte versjon av listen, Andreas (GitHub: `LohnyVal`) sin fjernet vi
- **Hvordan vi testet etterpå:** Vi testet det ved å lage en ny branch `newChanges` for å fikse conflicten. Etter fiksen så vi at siden hadde endret seg visuelt. Deretter merget Even (GitHub: `Hoppsann`) branchen inn i `main` med en pull request.

## Brukertest

- **Tilbakemelding:** Testpersonen foreslo at tingene i sekken kan ligge oppå hverandre, slik at sekken ser tyngre ut.
- **Hva vi gjorde med tilbakemeldingen:** Even (GitHub: `Hoppsann`) brukte JavaScript til å få tingene i sekken til å stables oppå hverandre basert på antall ting i sekken, slik at den ble fylt mer og mer visuelt. Vi valgte dette i stedet for å bytte ut bildene av sekken, fordi det ga en mer konkret og enkel effekt.

## Hvilke teknologier som brukes

### Prosjektet bruker:

Node.js, Express, EJS, JavaScript og CSS, GitHub, Git og Visual Studio Code (VS Code)

## Hvordan prosjektet installeres

#### Forhåndssjekk:

- Sjekk om Node.js er installert
- Sjekk om Git er installert
- Sjekk at du har et programmeringsprogram installert, for eksempel Visual Studio Code

#### Kontroller versjoner:

- Skriv dette for å sjekke Node.js:

```
node -v
```

- Skriv dette for å sjekke Git:

```
git --version
```

#### Git clone

1. Opprett en mappe
2. Åpne Visual Studio Code
3. Gå til terminal
4. Skriv inn følgende kommando:

```
git clone https://github.com/Hoppsann/DenUsynligeSekken
```

5. Gå inn i prosjektmappen:

```
cd DenUsynligeSekken
```

### Installer nødvendige pakker med npm

1. Gå inn på Visual Studio Code og gå til terminalen
2. Skriv inn følgende kommando for å installere alle pakkene i JSON-filen som følger med når du kloner repositoryet

```
npm install
```

3. Hvis ikke npm install funket, må du skrive inn følgende kommandoer:

```
npm install express
```

og

```
npm install nodemon
```

## Hvordan prosjektet startes

1. Gå til terminalen (du må stå i prosjektmappen)
2. Skriv inn følgende for å starte serveren:

```
nodemon app.js
```

Hvis det ikke funker, bruk:

```
npx nodemon app.js
```

3. Gå til nettleseren din og skriv inn:

```
http://localhost:4000
```

Vi bruker port 4000 på dette prosjektet.

4. Nettsiden skal nå være tilgjengelig

## Hvilke tjenester som må være tilgjengelige

For at man skal kunne kjøre serveren lokalt på PC-en må du ha følgende tilgjengelig:

1. Node.js - Dette brukes til å kjøre serveren / prosjektet ditt
2. Git - Git må være installert dersom prosjektet skal hentes fra GitHub-repositoryet med git clone
3. Visual Studio Code eller annet programmeringsprogram

Prosjektet bruker ingen database eller MongoDB.

## Porter og konfigurasjonsfiler

- **Port:** 4000. Den settes i `app.js`.
- **Avhengigheter:** `package.json` og `package-lock.json`.
- Prosjektet bruker ingen `.env`-fil.

## Feilsøking

Det kan oppstå problemer, og da er det viktig at man sjekker følgende ting:

### Sjekk om Node.js og Git er installert

Kjør følgende kommandoer i terminalen:

```
node -v
git --version
```

Hvis terminalen ikke viser eller finner node eller git, må programmet installeres

---

### Sjekk om de nødvendige pakkene er installert

Kjør følgende kommando i terminalen:

```
npm install
```

Dette vil installere de pakkene som ligger i package.json når du kloner prosjektet med git

---

### Sjekk om du er i riktig mappe

Dette kan du teste ved å gå inn i terminalen og skrive inn følgende kommando:

```
ls
```

Du skal se blant annet `app.js`, `package.json`, `public` og `views`. Hvis ikke, bruk `cd DenUsynligeSekken`.

### Kontroller at serveren kjører

Når du kjører følgende kommando i terminalen:

```
nodemon app.js
```

Hvis det ikke funker, bruk:

```
npx nodemon app.js
```

Skal terminalen vise følgende ved oppstart av serveren:

[![Skjermbilde av nodemon](public/img/nodemon.png)](public/img/nodemon.png)

Hvis serveren stopper og du får en feilmelding, må du lese feilmeldingen. De vanligste er:

- `Cannot find module`: kjør `npm install`
- `EADDRINUSE`: port 4000 er allerede i bruk. Stopp den gamle serveren med Ctrl + C

### Kontroller port

Kontroller at porten i app.js stemmer overens med nettadressen som er oppgitt i nettleseren.

Hvis prosjektet bruker port 4000, må nettadressen være følgende:

```
http://localhost:4000
```

### Start serveren på nytt

Hvis serveren oppfører seg rart eller uventet, kan du stoppe serveren med:

Ctrl + C (Windows og Mac)

Start serveren deretter på nytt med følgende kommando i terminalen:

```
nodemon app.js
```

Hvis det ikke funker, bruk:

```
npx nodemon app.js
```