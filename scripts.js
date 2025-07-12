document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('#task-list input[type="checkbox"]');

  checkboxes.forEach(box => {
    const saved = localStorage.getItem(box.dataset.id);
    if (saved === "true") {
      box.checked = true;
    }

    box.addEventListener('change', () => {
      localStorage.setItem(box.dataset.id, box.checked);
    });
  });
});