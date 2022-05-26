//Lib
import { marked } from 'marked';
import React, { useState } from 'react';
import './App.css';



function App() {

  //State
  const [text, setText] = useState("# Editeur Markdown \n ---- \n # Titre H1 \n ## Titre H2 \n ### Titre H3 \n **Texte en gras** \n\n *Texte en italic* \n\n ~Texte barré~ \n\n Liste à puces : \n * première ligne \n * deuxième ligne \n\n Liste numérotée : \n 1. première ligne \n 2. deuxième ligne \n\n Bloc de citation : \n\n > Ceci est une citation d'auteur \n\n Bloc de code : \n\n```\n helloWorld.textContent = \"Hello World !\"; \n``` \n [Un joli lien URL vers mon blog :)](https://r4ven.fr)");

  // // Etats
  // // componentDidMount
  // useEffect(() => {
  //   console.log('[App.js] componentDidMount');
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('[App.js] componentDidUpdate');
  // });

  // // componentWillUnmount
  // useEffect(() => {
  //   return() => {
  //     console.log('[App.js] componentWillUnmount');
  //   }
  // }, []);

  //Methodes
  const changeTextHandler = event => {
    setText(event.target.value);
  };

  const markdownToHTML = () => {
    return {__html: marked(text)};
  }

  // const textTransformHandler = () => {
  //   console.log("Modification zone texte");
  //   let textarea = document.querySelector("textarea").value;
  //   let code = document.querySelector("code");
  //   code.innerHTML = marked(textarea);
  // }

  return (
    <div className="App">
      <header>
        <div className="title"><h1>Éditeur de Markdown - ReactJS</h1></div>
      </header>
      <div className="flex-container">
        <div className="flex-child" id="textarea">
          <textarea 
          rows="30"
          onChange={(e) => changeTextHandler(e)} 
          value={text}
          >
          </textarea>
        </div>
        <div className='flex-child' id="markdownRender">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>
      <div className="footer">
        <p>Made with <span class="heart-pulse">❤️</span> by <a href='https://r4ven.fr'>Raven</a></p>
      </div>
    </div>
  );
}

export default App;
