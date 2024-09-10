//* Cloud computing:
/* Cloud computing is the on-demand delivery of compute resources, database
storage, applications, and other IT resources through a cloud services
platform via internet with pay as-you-go pricing.
*/

/*
Es el medio por el cual el usuario puede pagar por recursos, almacenamiento DB
y todo lo que necesite mediante cloud service. Lo único que se necesita es
conexión a internet y pagar por lo que se ocupe.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Virtualization:
/* La virtualización se refiere a crear una versión virtual de un recurso (como 
un servidor o un sistema operativo) en lugar de usar recursos físicos directamente.

Esto es de gran ayuda para dividir el costo, y aprovechar mucho mejor los recursos
físicos.

Sin virtualización, manejar cloud computing sería muy complicado y no sería rentable.

- Virtualization fúe usado por mainframe en 1960 by IBM.
- 1999 - VMware introdujo vistualización a x86 platform (pc envirionment).
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Why use Cloud Computing:
/* Una compañia tiene la opción de comprar servidores físicos. Pero esto conlleva
invertir en infraestructura. 

- Todo ésto se évita con cloud computing, en donde tienes los mismos recursos y 
  solo pagas exactamente por lo que usas.

- Google could. Proveera de los recursos que se necesiten (automated basis).
*/

//? KEY POINTS:
//! - Cloud computing is on demand delivery.
//! - Cloud computing and virtualization are complementary, not the same.
//! - In Cloud computing you pay for resources used.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Google_LLC_Bengaluru - Cloud Sessions:

//* 1. GCP Session 1: 
/* Para hacer uso de recursos virtuales, se utiliza Cloud. Existen 3 cloud services muy populares:
        - GCP: Google
        - AWS: Amazon
        - Azure: Microsoft
   Para ejecutar, contruir algo es necesario de un recurso se crea un 'engine' el cual se llama Virtual Machine.
   VM es usado para 'load balancing'.

 //* Para crear una VM es necesario de una VM Instance. En una VM Instance se especifican:
        - Name: Nombre de la virtual instance. (only small letters, hyphen and alphanumeric).
        - Label: Ambiente de la instancia. (dev, testing).
        - Region: En cual region se quiere la instancia. (USA, INDIA... etc).
        - Zone: En cual zona. (in USA - east, west).
        - Machine: Type of machine (General purpose, Memory optimized, Compute optimized).
              - General purpose: Mejor precio, usado para web applications, development phase.
              - Memory optimized: High memory performance, big-data analysis.
              - Compute optimized: Computer interactive like gaming apps.
        - OS - Cual OS se usará (ubuntu, debian). Se escográ el OS a travéz de una imágen de 2 tipos:
              - Public image: Proveeido por Google.
              - Custom image: Se puede customizar basado en nuestras necesidades.
        - Firewall - Seleccionar firewall (http, https).

  //* Running VM:
  - Para empezar a ejecutar la VM instance, se da click en SSH. Ésto abrirá una nueva pantalla.
    Dentro de la pantalla, se pueden usar comandos como:
    sudo su = para cambiar al root directory.
    apt update = para actualizar cambios o updates.
    apt install apache2 = para instalar Apache.
  - Dándole click en 'External IP' abrirá la instancia de una url.

  //* Comandos:
  - ls = Para visualizar el listado de files o folders de esa ruta. ejem: ls /var/www/html.
  - echo "This is a Google project" > /var/www/html/index.html = Ésto servirá para modificar index con lo que 
    se especifique en echo.

  NOTA: En caso de detener mi instancia, se eliminará la external IP. Y al momento de darle 'resume', se 
        asignará uns nueva External IP a mi instancia. 
        - En la opción de 'SHOW INFO PANEL' se podrán ver gráficas con los detalles que se están usando.
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* 2. GCP Session 2: 

