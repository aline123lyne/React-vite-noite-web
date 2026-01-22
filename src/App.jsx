import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import ping from '/teste.jpg'


function App() {
  const[qualAparece, setQualAparece] = useState('')
  console.log(qualAparece)
  return (
    <>
    {qualAparece === 'texto' && <h1 className={style.titulo}>Teste</h1>}
    {qualAparece === 'imagem' && <img src={ping} alt="Foto de paisagem"/>}
    {qualAparece === 'outro' && <p>outro</p>}
    
  
    <h1 className={style.titulo}>
      Teste
    </h1 >
    <img src={ping} alt="Imagem de paisagem" />
    <button onClick={() => setQualAparece('texto')}>
      Texto
    </button><br>
    </br>
    
    <button onClick={() => setQualAparece('imagem')}>
      Imagem
    </button>
    </>
  );
}

export default App
