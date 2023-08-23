const index.htmlContent = () => {
  return `<div class="command-line">cat ./about.md</div>
        <div class="command-out">Hi, I'm Arthur!<br/>
Actually studying Computer Egineering in CEFET.<br/>
Interested in software development.</div>`;
};

const projectsContent = () => {
  return `<div class="command-line">ls projetos</div>
        <div class="command-out">
          <div class="out">Adocao</div>
          <div class="out">Project 2</div>
          <div class="out">Project 3</div>
          <div class="out">Project 4</div>
        </div>`;
};

const clientsContent = () => {
  return `<div class="command-line">cat ./clientes.md</div>
        <div class="command-out">Escallo</div>
        <div class="command-out">Adocao</div>
        <div class="command-out">Desenvolvedor web</div>
        <div class="command-out">Desenvolvedor web</div>
        `;
};

const contactsContent = () => {
  return `<div class="command-line">cat ./clientes.md</div>
        <div class="command-out">Escallo</div>
        <div class="command-out">Adocao</div>
        <div class="command-out">Desenvolvedor web</div>
        <div class="command-out">Desenvolvedor web</div>
        `;
};

const getHtmlContent = (tabId) => {
  switch (tabId) {
    case "projects":
      return projectsContent();
    case "clients":
      return clientsContent();
    case "contacts":
      return contactsContent();
    default:
      return index.htmlContent();
  }
};

const onClick = (event) => {
  const content = document.getElementById("content-area");
  const tabId = event.srcElement.id;
  const htmlContent = getHtmlContent(tabId);
  content.innerHTML = htmlContent;
};

window.addEventListener("load", () => {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs.item(i);

    tab.addEventListener("click", onClick);
  }
});
