
const TiposBasicos = () => {

    // * Si no le pongo el tipo de dato, TS infiere el tipo de manera automatica.
    const nombre: string | number = 'Cristobal';
    const edad: number = 35;
    const isActive: boolean = false;
    const powers: (string | number)[] = ['volar', 'velocidad', 23443, 4234];


    return (
        <>
            <h3>TiposBasicos</h3>
            {nombre}
            {powers.join('')}
        </>
    )
}

export default TiposBasicos;