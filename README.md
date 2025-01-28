# Application Frontend SilverTest

Ceci est la partie frontend de l'application SilverTest, construite avec Svelte. Elle communique avec un service backend pour la gestion des données et de l'authentification.

## Prise en main

### Cloner le dépôt
Clonez le dépôt sur votre machine locale :

```bash
https://github.com/farouk527/SilverTestFront.git
```

### Installer les dépendances
Accédez au répertoire du projet et installez les packages nécessaires :

```bash
cd SilverTestFront
npm install
```

### Lancer le serveur de développement
Démarrez le serveur de développement :

```bash
npm run dev
```

L'application sera disponible par défaut à l'adresse `http://localhost:5173`.

---

## Intégration avec le backend

Le service backend de cette application est hébergé dans un dépôt séparé. Vous pouvez le trouver ici :

[Répertoire Backend SilverTest](https://github.com/farouk527/SilverTestBack.git)

### Utilisation d'un serveur backend local
Si vous souhaitez utiliser un serveur backend local et une base de données locale, vous devez modifier les fichiers de service dans le répertoire `src/service/` pour utiliser la variable d'environnement suivante :

```javascript
import.meta.env.VITE_API_URL
```

Définissez cette variable sur l'URL de votre serveur local :

```
http://localhost:8000/api
```

### Application hébergée
Alternativement, vous pouvez accéder à la version hébergée de l'application directement via le lien suivant :

[Frontend SilverTest sur Vercel](https://silver-test-front.vercel.app/)

---

## Remarques

1. **Hébergement du backend sur Render :** Le service backend est hébergé sur Render avec un plan gratuit. Cela peut entraîner des délais (jusqu'à 50 secondes ou plus) pour la première requête lors des périodes d'inactivité.

2. **Enregistrement/Connexion :** La première requête de type `register` ou `login` peut subir un délai en raison de l'état inactif du backend.

3. **Configuration de l'environnement local :** Assurez-vous que votre serveur backend local est en cours d'exécution avant de tester l'application en local.

---

## Contribution
Si vous rencontrez des problèmes ou avez des suggestions d'amélioration, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le dépôt.

---

## Licence
Ce projet est sous licence [MIT License](LICENSE).

