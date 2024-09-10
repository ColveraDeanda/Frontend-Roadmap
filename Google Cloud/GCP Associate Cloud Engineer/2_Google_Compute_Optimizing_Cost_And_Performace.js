//* Que es sustained use discounts ?
/* Son descuentos automatizados que se aplican al correr VM instances del costo mensual. */
/* Por ejemplo: Si utilizas N1, N2 machine types por mas del 25% del tiempo en un mes, obtienes 
   un descuento. */
/* - Mientras mas uso se haga, mayor será el descuento.
   - Esto se aplica totalmente automatico. 
   - Esto es aplicable para instancias que son creadas desde Compute engine y Kubernates Engine.
   - RESTRICTION: No se aplican descuentos para las machine types: E2 y A2.
                  No se aplican para VMs creadas desde App Engine flexible y Dataflow.*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Que es comitted use discounts ?
/* Este es otro tipo de descuento para aquellos worloads que son predecibles, es decir que ya sabes 
   que se van a utilizar por un periodo de tiempo determinado.
   - Se puede aplicar un commit por 1 o 3 años.
   - Se puede lograr hasta un 70% de descuento, dependiendo machine type y GPUs.
   - Se aplica para instancias creadas desde Compute engine y Kubernates Engine. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Que son Preemptible VM ? 
/* Son aquellas instancias con un tiempo de vida mas corto duran un max de 24 hrs, 
   por lo que son mas baratas.
   - Son detenidas por GCP en cualquier momento dentro de las 24 hrs. 
   - Las instancias obtienen 30 segundos de warning para guardar cualquier cosa antes de detenerse.
   Usar Preempt VM de preferencia cuando:
      - Las aplicaciones son tolerantes a fallos.
      - Quieres ahorrar mucho en costos.
      - El workload no es inmediato, por ejemplo un bath job que se ejecutará en unos días.
    Restricciones:
      - No está siempre disponible.
      - No SLA y no puede ser migrada a una regular VM.
      - No hay restarts automaticos.
      - Free tier credits no se aplican para este tipo de VM. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Que es una Spot VMs ? 
/* Es la versión actualizada de una preemptible VM.
   La key difference es que una Spot VM no tiene un max run-time como lo tiene una preemptible VM de 24 hrs max. 
   Lo demás es exactamente igual a una Preemptible VM. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Entendiendo Google compute Engine - Billing:
/* - Se te cobrará por segundo, despues de 1 min de uso.
   - No se te cobrará la VM, cuando la instancia está detenida. Tomar en cuenta que si algún storage está 
     ligada a esa VM detenida, se cobrará.
   - Recomendación: Hacer uso de Budget alerts para recibir alertas cuando se llega a cierta cantidad de 
     billing y usar Budget exports para estar al tanto del billing.
   - Cuales son las maneras para ahorrar dinero: 
     - Escoger la machine type e imagen adecuada para el workload.
     - Estar al tanto de los discounts disponibles:
       - Sustained discount
       - Committed discount
       - Discount for preemptible VM */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Como mantienes una VM corriendo cuando se actualiza un software o hardware (por mantenimiento por ejemplo):
/* Para ello existe un concepto llamado LIVE MIGRATION:
   - Cuando ocurre esto, nuestra VM será migrada a otro host en la misma zona.
   - Ésta opción no afecta alguna otra propiedad de la VM.
   - Soporta instancias con local SSDs.
   - No está disponible para GPUs ni tampoco para preemptible instances. */
//? Esta configuración se encuentra al crear una VM dentro de "Availability Policy"
//* Aquí habrá 2 opciones:
/* 1. On host maintanance: (Que debería pasar durante un mantenimiento)
      - Migrate (default).
      - Terminate: Stop de VM.
   2. Automatic restart: Se reiniciará la VM si es detenida por algún mantenimiento o hardware failure. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Custom machine types:
/* En caso de que las opciones por default de machine type no sean apropiedas para nuestro workload,
   es posible crear una custom machine type.
En esta opción puedes ajustar vCPUs, memory and GPUs.
- Se pueden escoger entre E2, N1 O N2 machine types.
- Soporta una gran cantidad de OS.
- El cobro se hará por vCPUs y memory para cada instancia. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* GPU (Graphic Processing Unit):
/* Sirve para acelarar apps que tengan Math-intensive o graphic intensive. */
/* En caso de utilizar app con Math-intensive o graficos intensivos (AI/ML), es importante 
   agregar GPU a la maquina virtual.
   - GPU ayuda a tener alto rendimiento con math-intensive o graficos intensivos.
   - Esto costo será mayor.
   - Importante: Usar imágenes que tengan librerías GPU, si no, GPU no será usado.
   
   Restricciones:
   - GPU no es soportado en todas las machine types. (No soporta shared-core o memory-optimized 
     machine types).
   - Al ocurrir un mantenimiento solo tendrá la opción de: "Terminate VM instance".
   
   Recomendación: En availability policy GPUs, tenerlo como: Automatic restart - on. 
   
   Hay 2 formas de crear una instancia con GPU:
    - Escoger directamente la machine family GPU, y tendrá como opción en series = N1.
    - Escoger general purpose machine family, seleccionar en series A2 o N2 y solo así se habilitará 
      la opción de agregar GPU a la VM.
   */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Cosas importantes a recordar:
/*
1. Una VM estará asociada a un proyecto.
2. La disponibilidad de una machine type puede variar de región en región.
3. Solo se podrá cambiar la machine type cuando la VM está detenida.
4. En la sección de VM's, hay un filter que puede ayudar a visualizar las VM's. Por Name, Zone, machine type.
5. Las instacias que se crean, solo serán creadas en esa específica zona donde se establezca.
6. Las images son globales. (Se pueden acceder desde diferentes proyectos).
7. Las instances templates son globales.
8. Automatic basic monitoring estará habilitado.
   - Métricas por defecto: CPU Utilization, Network Bytes.
   - Para visualizar la memory utilization y Disk space utilization se ocupará de: Cloud monitoring agent.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Best Practices en una VM:
/* - Escoger la zona y región adecuadamente, basandose en: Costo, disponibilidad, Latency.
   - Ditribuir la instancia en múltiples regiones para alta disponibilidad.
   - Escoger adecuadamente la machine type, de acuerdo a necesidades.
   - Reservar "Comitted use discounts" para workloads constantes. Como una pagina web.
   - Usar Preemptible instances que son tolerantes a fallos y no son criticos.
   - Hacer uso de labels para indicar el environment, team, etc...
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Preguntas a recordar: (Scenarios)
/**
 * 1. Cuales son los pre-requisitos para crear una VM ?
 * R = Un proyecto, Billing Acount, Compute Engine API habilitado
 * 
 * 2. Quieres hardware dedicado para complience, licesing and managment needs
 * R = Usar Sole-tenant nodes.
 * 
 * 3. Tienes 1000 VM's y quieres automatizar OS patch managment, OS inventory. (Manage software installed).
 * R = Usar "VM Manager"
 * 
 * 4. Quieres logearte a tu VM e installar software.
 * R =  Se puede hacer mediante SSH
 * 
 * 5. No quieres exponer tu VM a internet
 * R = No asignarle uns IP externa
 * 
 * 6. Quieres habilitar trafico HTTP en la VM:
 * R = Configurar Firewall Rules.
 * 
 * 7. Which of these metrics is available by default (without installing Cloud Monitoring agent) 
 *    for a Compute Engine Virtual Machine?
 * R = CPU Utilization 
 */