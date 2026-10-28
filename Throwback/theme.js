// Throwback: Spotify blendet den Hintergrund der sticky Titelleiste nicht mehr ein.
// Sobald die Aktionsleiste unter die Titelleiste scrollt, markieren wir das per Klasse.
(function throwbackTopbar() {
  const update = () => {
    const bar = document.querySelector('[data-testid=action-bar-row]');
    const solid = !!bar && bar.getBoundingClientRect().top < 110 && !!document.querySelector('.main-entityHeader-topbarContent');
    document.body.classList.toggle('tb-topbar-solid', solid);
  };
  document.addEventListener('scroll', update, true);
  new MutationObserver(update).observe(document.body, { childList: true, subtree: true });
  update();
})();
