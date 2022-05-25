import './App.css';

function App() {
  return (
    <div className="App">
      <div className="textarea">
        <textarea># `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)</textarea>
      </div>
      <div className="code">
        <code>test</code>
      </div>
    </div>
  );
}

export default App;
