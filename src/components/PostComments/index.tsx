import React from 'react';

const App = () => {
const comentarios = [
    "Este é o primeiro comentário!",
    "Este é o segundo comentário!"
];

return (
    <div>
    <h1>Comentários</h1>
    {comentarios.map((texto, index) => (
        <div key={index} data-testid={`comentario-${index + 1}`}>
        {texto}
        </div>
    ))}
    </div>
);
};

export default App;