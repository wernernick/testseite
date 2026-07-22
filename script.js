document.addEventListener("DOMContentLoaded", () => {
    // Alle Elemente auswählen, die die Klasse 'fade-in' haben
    const faders = document.querySelectorAll(".fade-in");

    // Optionen für den Observer definieren
    const appearOptions = {
        threshold: 0.15, // Das Element muss zu 15% sichtbar sein, bevor es triggert
        rootMargin: "0px 0px -50px 0px" // Feuert leicht bevor das Element den unteren Rand erreicht
    };

    // Intersection Observer initialisieren
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Klasse 'visible' hinzufügen, um die CSS-Animation auszulösen
                entry.target.classList.add("visible");
                // Element nicht weiter beobachten, wenn es einmal eingeblendet wurde
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Jedes gefundene Element vom Observer überwachen lassen
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
