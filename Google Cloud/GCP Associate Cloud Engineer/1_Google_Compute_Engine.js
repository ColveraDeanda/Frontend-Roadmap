//* Concepto de la Cloud:
/* La nube (cloud) proveerá de los recursos cuando se necesite, y en caso de que no esté 
utilizando muchos recursos, puede regresarlos y así no se despedician recursos. */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Ventajas de Cloud:
//* On demand resource provisioning:
/* Utilizar solo los recursos necesarios cuando se necesiten. A esto también se le llama
   "elasticity". */
//* Trade "capital expense" for "variable expense":
/* En vez de invertir dinero pensando en una infraestructura a futuro, se puede rentar 
por los servicios necesarios. */
//* Benefit from massive economies of scale: Se tendrá el mejor hardware.
//* Stop guessing capacity: 
/* Ya no es necesario analizar cuanta capacidad de servidores se necesitarán */
//* No es necesario gastar en mantenimiento de data centers.
//* "Go global" in minutes:
/* En cualquier momento que se requiera expandir algún servicio o app a otras regiones,
   se puede hacer con un sencillo click. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Ventajas adicionales de Google Cloud:
//* Se encuentra en el top 3 de los mejores servicos de la nube:
    /* 1. Google Cloud Platform
       2. AWS 
       3. Microsoft Azure   */
//* GCP provee 200+ servicios.
//* Confiable, seguro y High performant: La infraestructura provee servicios a mas de 1 billion de users.
//* Cleanest Cloud: Net carbon-neutral cloud:
/* La electricidad que se usa es 100% renovable */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Uso de Regiones and Zonas:
// Region: Lugar geográfico específica para hostear los recursos.
/* Al tener un servicio / app en una sola region es muy riesgoso y puede ocasionar problemas como Alta 
   latencia en otras partes del mundo, y si llega a fallar una region, el servicio se perdería.
   
   Es por eso que se usan varias regiones al proveer de algún servicio, servirá para garantizar 
   "alta disponibilidad" y "Baja latencia a los usuarios."*/

   /* Google provee de 20+ regiones alrededor del mundo, las cuales están en constante expansión cada año. */

   /** Ventajas de uso de regiones y zonas:
    * Alta disponibilidad: Google provee de mcuhas regiones alrededor del mundo.
    * Baja latencia: Con la region adecuada, los usuarios tendrán baja latencia.
    * Go global: Impacto en todo el mundo.
    * Adherence to goverment regulations: Se pueden adherir a las regulaciones del gobierno.
    */

//* Para obtener "Alta disponibilidad en la misma region, se utilizan zonas:"
//* Cada región cuenta con al menos 3 zonas.
//* Ventajas de zonas: "Incrementan disponibilidad y tolerancia a fallo en la misma región".
//* Una zona tiene 1 o mas clusters. Un cluster es la infraestructura física que se almacena en un data center. 
//* Las zonas estan conectadas entre si a travéz de "low-latency" links. 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Google Compute Engine: 
// Es el servicio en el cual proveerá y administrará maquinas virtuales.
/* Donde se deployan applicaciones en Cloud ?: 
   R = En virtual servers.
   Virtual Servers son también conocidas como Virtual Machines
   
   Virtual servers === Virtual machines
   
   Google Compute Engine (GCE) = Proveerá y administrará maquinas virtuales.*/

//* Características de Google compute engine:
/*  - Crear y administrar el ciclo de vida de una VM.
    - Permite Load balancing: Si una app esta deployada en multiples maquinas virtuales es necesario un load 
                              balancer para distribuir la carga entre las maquinas virtuales.
    - Permite auto-scaling: Permite aumentar el numero de instancias y decrementarlas, dependiendo del load. 
    - Attach storage: Se adjuntara storage a cada instancia de la maquina virtual.
    - Permite adminstrar la network connectivity y la configuración de las instancias de cada VM. */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* En cloud.google.com
/* Se creó una VM instance, para eso se fue a la sección de "Compute Engine" y luego "Create Instance". 
   De ahi pedirá varias cosas para configurar la VM, como la region, la zona, el nombre, los labels. 
   Mucha conf ya se hace por defecto como el machine configuration (general purpose), boot disk (debian), 
   Firewall (http) y click en crear */

//* Dentro de la opción machine configuration (machine family). Es posible escoger entre las siguientes:
/* Que tipo de hardware se va a necesitar ?: Las opciones con las siguientes:
   - General purpose (E2, N2, N2D, N1): Best price. Sirve para web applications servers, small-medium DB, 
                                        Dev envirionments
   - Memory optimized (M2, M1): Ultra High memory. Si quieres mucha RAM, ésta es la opción. 
                                 Sirve para Large in-memory DB, in-memory analitics. 
   - Compute Optimized (C2): Compute intensive (mucha CPU). Sirve para gaming applications. */

//* Una vez que se escoge una machine family. Se procede a escoger una Machine Type:
/* Las machines types disponibles, dependerán de la machine family que se escoga.
   La machine type sirve para definir cuanta CPU, memory o disk se necesita. 
   
   Ejemplo: Tomando como referencia: e2-standard-2 
            e2: machine type family
            standard: tipo de workload. 
            2: número de CPU's
Nota: Memory, disk and networking van a ir incrementando dependiendo los vCPUs */

//* Qué sistema operativo vas a querer en la instancia ? = Aquí se escoge la image.
/* Tipos de images: 
       - Public images: Prooveidos por Google, Open Source o third party vendors.
       - Custom Images: Created by you for your proyects.  */

//* Para conectarse a la instancia mediante SSH, solo se le da click al boton ssh:
/*
   COMANDOS:
      - whoami = mostrará el username.
      - pwd = mostrará la current working directory.
      - ls = Mostrará los archivos en ese directorio.

      Comandos extra de la sesión:
         sudo su = become a root user
         apt update = actualiza el package.
         apt install apache2
         ls /var/www/html = var/www/html es el document root por defecto de Debian.
         echo "Hello World!"
         echo "Hello World!" > /var/www/html/index.html = Se imprime hello world en index.html
         echo $(hostname)
         echo $(hostname -i) = dara la ip address
         echo "Hello World from $(hostname)"
         echo "Hello World from $(hostname) $(hostname -i)"
         echo "Hello world from $(hostname) $(hostname -i)" > /var/www/html/index.html
         sudo service apache2 start
*/

//? Hasta este punto, instalé apache y se inició un server en apache, imprimiendo Hello World. Todo se 
//? hizo mediante SSH.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Internal IP address vs External IP address: 
/* External ip: Con este ip address es posible entrar fuera de Google Cloud.
   Internal ip: Solo es posible entrar desde dentro de Google Cloud.
   KEY POINTS:
     - No es posible tener 2 recursos con la misma ip publica.
     - Es posible que varios recursos tengan la misma internal IP, siempre y cuando pertenezcan a diferente corporate network.
     - Una VM instance tendrá siempre su internal ip.
     - La creacion de una ip externa sera opcional para cada VM instance. Nota: Cuando se detiene una VM, se perderá la external ip.
       Y la internal IP quedará ahí sin cambios.
     - 
   */
  //* Como es posible tener una constant external IP address ? = Una forma de hacerlo es asignando una static IP address.
  /* Para asignar una static ip address a la VM, nos dirijimos a "VPC Network" (Virtual Private Cloud) y a IP Addresses. Y click en 
     "RESERVE EXTERNAL STATIC ADDRESS". 
     Por defecto aquí se encontrará asignada la internal IP address.
     Nota: Si se va a seleccionar regional, es necesario poner la misma región en la que se encuentra nuestra VM.
     Una vez que se asigna una External static ip address a la VM, se eliminará la anterior external IP automaticamente.
     Nota: Ahora, cuando se detenga la VM y se le dé resume, la static IP se mantendrá ahí sin cambios. */
//! Key points:
/* - Una static IP puede ser asignada de una VM a otra sin problema.
   - Una static IP permanecerá en la VM, a pesar de detener la instacia. (Se tendría que quitar manualmente).
   - Se te cobrará por el uso de una IP estática, se esté usando o no. Se cobrará más en caso de no hacer uso de la IP estática. 
     Es por ello que es mejor liberar esa ip estática que no está siendo usada.
   - Escenario: Cuando se elimina una VM que está haciendo uso de una static ip, la static ip permanecerá sin uso y se cobrará por ello.
                En este escenario será necesario darle release para eliminar la ip estática.
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* COMANDOS para configurar in startup script:
/* 
#!/bin/bash
apt update 
apt -y install apache2
echo "Hello world from $(hostname) $(hostname -I)" > /var/www/html/index.html 
*/
/* Bootstrapping: Una forma rapida y sencilla para instalar OS, software o lo que sea necesario al empezar 
   una VM se le llama bootstrapping */
//* Se puede configurar un startup script para hacer bootstraping.
/* La opción para configurar una startup script está en advanced options, managment, automation */
/* Tener un startup script es de gran ayuda para mantener actualizado la VM con todo el software 
   necesario. */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* INSTANCE TEMPLATE:
/* Una forma rápida y sencilla de poder crear una virtual machine es mediante una instance template.  
   Una instance template nos va a servir para definir machine type, image, labels, startup scripts etc.
   - Se puede utilizar esta opción para crear una virtual machine o crear un grupo de instancias,
     a esto se le llama manage instance groups.
   - Cuando creas una instance template esta no puede ser modificada. Para hacer un cambio será necesario 
     copiar una instance template y modificarla.
   - Cuando especificas una image family esta va a utilizar la última versión no-deprecated de la 
     image family.
   - No hay costo por crear una instance template. Pero pero cuando creas una o varias instancias con una 
     instance template ahí sí habrá un costo.
 */ 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* CUSTOM IMAGE:
/* Al instalar un sistema operativo o software en una virtual machine instance puede aumentarse el tiempo 
   de arranque.
     - Una solución es crear una custom image. Una custom image tendrá el sistema operativo y el
       software preinstalado.
     - Una Custom image puede ser creada a partir de una instancia, un persistent disk, snapshot,  otra imagen 
       o un archivo en cloud storage.
     - Puedes ser compartida en diferentes proyectos.
     - Se puede establecer como deprecated y reemplazar esa custom image que está siendo usada por alguna 
       VM por una nueva.
     - Hardening an image: Esto es cuando customizas tus imágenes de acuerdo a los estándares de seguridad 
       de la corporación.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Los últimos pasos que se hicieron fueron:
/*
   1. Crear una VM instance nornal con un startup script.
   2. Asignarle una IP estática a esta VM instance creada.
   2. Crear una custom image a partir del disk de esa instancia que se creó.
   3. Crear una instance template con el uso de esta custom image y el startup script.
   4. Crear una VM instance con el uso de la instance template que se creó con la custom image y startup script.
*/