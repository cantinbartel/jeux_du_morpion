-- Instructions :

-- avec Docker

-----
# Dans le terminal, à la racine du dossier principal entrez la commande 'docker build -t morpion_app . ' (le point . est important) pour créer l'image.

## Entrez la commande 'docker run --name morpion_app_container -p 3000:3000 --rm morpion_app' pour créer et lancer le container, l'application s'ouvrira sur le port 3000.
## La commande 'docker stop morpion_app_container' permet de stopper et de supprimer le container.

-- sans Docker
# Vous devez avoir Node.js installé sur votre machine pour pouvoir lancer React

## Dans le terminal utilisez la commande 'npm install' pour télécharger les dépendences nécessaire au bon fonctionnement de l'application.

### Dans le terminal utilisez la commande 'npm start', l'application s'ouvrira sur le port 3000 de votre localhost

------
#### N'oubliez pas de mettre le volume de votre ordinateur sur 'unmute' pour profiter de la petite musique d'ascenseur proposée pendant la partie

##### 3 console.log sont laissés de manière volontaire afin de jeter un oeil aux différents states durant la partie


-- Description :

# Le point d'entrée de l'application est le fichier index.js du dossier src mais ce dernier ne nous interesse pas

## App.js est le fichier principale, il contient les différents states de l'application ainsi que les différents imports

### Grid.js est le composant qui est utilisé pour représenter la grille du jeux

#### Le dossier music dans src contient la musique et le son gagnant du jeux


-- Librairies tierces :

# Utilisation de la librairie 'react-icons' 

## Utilisation du framework CSS Tailwind.css pour le style et le responsive de l'application

### tailwind.config.js permet de modifier et de customiser Tailwind

### L'import de Tailwind se fait dans le fichier index.css

