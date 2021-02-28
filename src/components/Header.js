import React from 'react';


//children apresentar o conteudo contido dentro do componente, nesse caso do header
export default function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}