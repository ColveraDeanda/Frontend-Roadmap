
// * Interfaces: Sirven para decirle a TS como lucen mis objetos.
// * Las interfaces sirven para ponerle reglas de validación a los objetos

interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion,
    company: string
}

// ! Por cada definición que haga de algún objeto, es necesario hacer su propia interface.
interface Direccion {
    pais: string,
    casaNo: number,
    calle: string
}

const ObjetosLiterales = () => {

    // Creación de objeto literal. 
    // Nota: Un objeto literal es aquel que se crea sin la necesidad de usar new ó una función constructora.
    const persona: Persona = {
        nombre: 'Cristobal',
        edad: 24,
        direccion: {
            pais: 'Mexico',
            casaNo: 2344,
            calle: 'Lomas 34'
        },
        company: 'Deloitte'
    }



    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                    {JSON.stringify(persona, ['direccion'], 2)}
                </pre>
            </code>
        </div>

    )
}

export default ObjetosLiterales