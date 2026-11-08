// Filter the directory as you type, and the Ko-fi "Support me" button.
const filter = document.getElementById('dir-filter');
filter.addEventListener('input', () => {
  const q = filter.value.trim().toLowerCase();
  document.querySelectorAll('.dir-section').forEach((section) => {
    let shown = 0;
    section.querySelectorAll('li').forEach((li) => {
      const hit = !q || li.textContent.toLowerCase().includes(q);
      li.hidden = !hit;
      if (hit) shown++;
    });
    section.hidden = shown === 0;
  });
});

if (window.kofiWidgetOverlay) {
  kofiWidgetOverlay.draw('cursedentertainment', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#323842',
    'floating-chat.donateButton.text-color': '#fff'
  });
}
