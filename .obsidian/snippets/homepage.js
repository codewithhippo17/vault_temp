// Obsidian Homepage Dashboard
setTimeout(() => {
  const app = window.app;

  // 1. Get Todos (all unchecked checkboxes in vault)
  let todos = [];
  app.vault.getMarkdownFiles().forEach(file => {
    app.vault.read(file).then(content => {
      let matches = content.match(/- \[ \] .+/g);
      if (matches) todos.push(...matches);
      document.getElementById("todos").innerHTML =
        "<ul>" + todos.slice(0,10).map(t => `<li>${t}</li>`).join("") + "</ul>";
    });
  });

  // 2. Get Recent Files
  let recent = app.workspace.getLastOpenFiles().slice(0,5);
  document.getElementById("recent-files").innerHTML =
    "<ul>" + recent.map(f => `<li>${f}</li>`).join("") + "</ul>";

  // 3. Word Count Progress
  let totalWords = 0;
  app.vault.getMarkdownFiles().forEach(file => {
    app.vault.read(file).then(content => {
      totalWords += content.split(/\s+/).length;
      document.getElementById("progress").innerText =
        "Total words in vault: " + totalWords;
    });
  });
}, 1000);

