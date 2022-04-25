# Leaflet Maps a React

## Crear un mapa Leaflet bàsic (1 punt)

1. Instal·lar i importar el mòdul [leaflet-react](https://react-leaflet.js.org/docs/start-introduction/). Consultar la informació en la seva pàgina
2. Centrar el mapa a:
   ```js
   const center = [41.390205, 2.154007];
   // Zoom = 12
   ```
   ![Mapa inicial](https://i.imgur.com/QzlS5HD.png)

## Afegir el contorn dels districtes (2 punts)

1. A partir d'un arxiu *GeoJson* **districtes_geo.json** crea el contorn i el color de fons dels districtes de Barcelona.
![Mapa districtes](https://i.imgur.com/Z53McW2.png)  
   
## Afegir funcionalitats a la capa GeoJson (4 punts)

1. Quan es fa *hover* en un districte
   1. Es mostra el títol del districte
   2. Canvia el color del districte
   ![Mapa districtes](https://i.imgur.com/DjwMnxK.png)  
   
2. Quan es fa *clic* s'obre la pàgina web del districte en una finestra nova

Totes les dades per realitar els punts anteriors s'agafen de l'arxiu **districtes_geo.json**

## Crear un *heatmap* (3 punts)
<h4 style="color:red">Opcional per alumnes que cursen dual</h4>

1. instal·lar i importar el mòdul [leaflet](https://leafletjs.com/SlavaUkraini/)
2. Importa l'arxiu *2019_censcomercialbcn_detall.csv* a una bases de dades per poder consultar-lo 
3. Crea un component:
   + Ha de carregar els punts des de la base de dades i crei el *heatmap* utilitzant [leaflet](https://leafletjs.com/SlavaUkraini/)
   + Ha de recòrrer el punts obtinguts i afegir-los al mapa
   + Ha d'especificar les opcions de configuració radius, max, blur, gradient i minOpacity
   + Aquest component se situa dins del component principal creat per *react-leaflet*
   + Accedeix al mapa mitjançant [useMap](https://react-leaflet.js.org/docs/api-map/#usemap)


![heatmap](https://i.imgur.com/dZnX7dG.png)

## Funcionalitats extra (1 punt)

Afegir un control de les propietats de configuració que permeti modificar-les dinàmicament

![controls](https://i.imgur.com/IN0gf1D.png)