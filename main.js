  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const items = document.getElementById("items");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchTerm = input.value.toLowerCase();
    let matches = [];

    for (let i = 0; i < items.children.length; i++) {
      const item = items.children[i];
      if (item.textContent.toLowerCase().includes(searchTerm)) {
        matches.push(item);
      }
    }

    // Clear the list of items
    items.innerHTML = "";

    // Add the matching items back to the list
    for (const match of matches) {
      items.appendChild(match);
    }
  });


