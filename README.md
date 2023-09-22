## Willkommen zu Phone Magic

Diese Anwendung ist Teil meiner Bewerbung bei der Geomagic GmbH Leipzig

## Starten der Anwendung 

Client und Server sind in diesem Projekt getrennt und müssen in zwei separaten Terminals gestartet werden. 

### Client

Unter /client:

Installieren der Packete: 
```
npm install 
```
Starten der Anwendung: 
```
npm start
```
Nun läuft das React-Frontend auf http://localhost:3000/

### Server 

Unter /server:

Installieren der Packete: 
```
npm i --legacy-peer-deps
```
Starten der Anwendung: 
```
npm start
```
Nun läuft das express-Backend auf http://localhost:5000/

Endpoint ist: http://localhost:5000/graphql


### Ausblick

Folgende Schritte "sollten" umgesetzt werden, um die Anwendung abzurunden. 

* Auflösen der LegacyDependencies auf Serverseite 
* Testing der Komponenten und der Middleware (Server)
* Front- und Backend "Containerisieren" (Docker + Kubernetes zB)
* Integration der Anwendung mittels Pipeline: Testing und Deployment (inkl. Staging)

## letzte Worte

Viel Spaß beim Ausprobieren der Anwendung. 
Beste Grüße 

Alexander Linß 