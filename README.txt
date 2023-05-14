Idee: wir  nutzen React für das Frontend und Node für das Backend. Jetzt am Anfang können wir
nur das Design und alles was wir im letzen Projekt hatten "importieren"..
Ein Paar Sachen werden wir klar ändern müssen , z.b. die Tabelle kann nicht so bruteforce
gerendert werden. wir können eine Datenstruktur wählen (ich denke einfach eine Liste) und alles
dynamisch programmieren (das ist der Vorteil von React.) d.h. im Code würden wir mit javascript
die Daten aus eine Liste rausholen und dynamisch HTML erzeugen.

scheint mir eine gute Idee zu sein - Jakub


Nur zur Info:
ich wollte noch das was ich gemacht habe mit MySQL kontrollieren und ausprobieren.
ich habe leider immer einem error und kann dem nicht beheben (schon paar Stunden damit verbracht):
    TypeError: Cannot read properties of undefined (reading 'isServer')
    ...
    [nodemon] app crashed - waiting for file changes before starting...
deswegen bin ich auch nicht sicher ob die Tabelle dynamisch arbeitet.
sag bescheid ob es bei dir funktioniert