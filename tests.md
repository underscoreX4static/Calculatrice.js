# Tests Manuels pour la Calculatrice

## **1. Interface Utilisateur**
- **Test 1.1 : Vérification de l'affichage**
  - L'écran affiche `0` au démarrage.
  - Les boutons sont bien alignés et leurs couleurs respectives correspondent à leur type.
- **Test 1.2 : Résolution responsive**
  - L'application s'affiche correctement sur un mobile (écran < 768px).
  - L'application s'affiche correctement sur un desktop.

---

## **2. Fonctionnalités de base**
### **2.1. Nombres**
- Appuyer sur un chiffre met à jour l'écran avec le chiffre correspondant.
- Appuyer sur plusieurs chiffres les concatène correctement.

### **2.2. Opérations**
- Addition (`+`) :
  - Exemple : `5 + 3 =` → Résultat affiché : `8`.
- Soustraction (`−`) :
  - Exemple : `10 − 4 =` → Résultat affiché : `6`.
- Multiplication (`×`) :
  - Exemple : `7 × 2 =` → Résultat affiché : `14`.
- Division (`÷`) :
  - Exemple : `8 ÷ 2 =` → Résultat affiché : `4`.
  - Division par zéro affiche un message d'erreur.
- Modulo (`%`) :
  - Exemple : `10 % 3 =` → Résultat affiché : `1`.

### **2.3. Effacement**
- Bouton `AC` réinitialise tous les champs à leur état initial.
- Bouton `←` supprime le dernier caractère :
  - Exemple : `123 ←` → Résultat affiché : `12`.

### **2.4. Résultat**
- Le bouton `=` affiche le résultat de l'opération.
- Réutilisation du résultat pour une nouvelle opération :
  - Exemple : `5 + 5 =` (résultat : `10`), puis appuyer sur `+ 5 =` → Résultat affiché : `15`.

---

## **3. Cas Limites**
- Appuyer sur `=` sans entrer d'opération : Aucun changement.
- Appuyer sur plusieurs `=` consécutifs : Aucun effet supplémentaire.
- Appuyer plusieurs fois sur `.` ne doit pas ajouter un autre point :
  - Exemple : `3..` → Résultat affiché : `3.`.

---

## **4. Bouton Spécial 🖩**
- Vérifier que le bouton spécial (s'il est implémenté) change de mode ou effectue une autre action spécifique.

---

## **5. Performance**
- Tester les calculs avec des nombres grands et petits :
  - Exemple : `9999999 × 9999999` ou `0.0001 ÷ 0.0001`.