let Welcome = document.getElementById('Welcome');
let Person = prompt('Wie heißen Sie?');

if (Person && Person.trim() !== '') {
    Welcome.innerHTML = "Willkommen " + Person + " zu Café de la Armenier";
} else {
    Welcome.innerHTML = "Willkommen Gast zu Café de la Armenier";
}
