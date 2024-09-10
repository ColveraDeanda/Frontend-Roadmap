//? App Engine:
/* Es la forma más sencilla de deployar aplicaciones en GCP.
    - Soporta: Go,Java, Node.js, PHP usando pre-configured runtimes.
    - Se puede usar custom run-time y escribir código en cualquier lenguaje.
    - Se puede conectar a una variedad de Google Cloud storage (Cloud SQL, etc).

   No cargos por uso: Se paga por los recursos provisionados.

   Features:
    - Load balancing y auto-Scaling automático.
    - Managed platform updates y application health monitoring.
    - Application versioning.
    - Traffic splitting.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Compute Engine vs App Engine.
//* Compute engine:
/*      - IAAS
        - Más flexibilidad.
        - Más responsabilidad (escoger imagen, escoger hardware / software) etc.
*/

//* App Engine:
/*      - PaaS
        - Serverless
        - Menos responsabilidad.
        - Menos flexibilidad.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? App Engine tiene 2 tipos de envirionments:
/*  Standard: Las aplicaciones corren en sadbox específicos.
        - V1: Java, Python, PHP, Go (OLD versions). Solo para Python y PHP tiene: Restricted network access.
              No hay restricciones para Java y Go.
        - V2: Java, python, PHP, Node.JS, Ruby, Go (Newer versions).
              Full network access y no restricciones.
    Flexible - Las instancias corren dentro de contenedores Docker:
        - Hace uso de compute engine Virtual Machines.
        - Support any runtime.
        - Provee accessos a procesos del background and local disks.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? App engine - Jerarquía:
/* 1. Application: Una app por proyecto.
   2. Service: Multiples microservices o app components.
        - Se pueden tener varios services en una application.
        - Cada servicio puede tener diferente configuración.
   3. Version(s): Cada versión tendrá su código y configuración.
        - Cada versión puede correr en una o varias instancias.
        - Multiples version pueden co-existir.
        - Tiene la opción de rollback y dividir tráfico.     
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Comparación de ambientes en App Engine: Standard vs Flexible
/*
//*Feature                                  Standard                               Flexible
1. Pricing factors                          Instance hours                         vCPU, Memory & Persistent Disks
2. Scaling                                  Manual, Basic, Automatic               Manual, Automatic.
3. Scaling to zero                          Yes                                    No
4. Instance startup time                    Seconds                                Minutes
5. Rapid Scaling                            Yes                                    No
6. Max. request timeout                     1 to 10 minutes                        60 minutes
7. Local Disk                               Mostly(except python y php)            yes. Ephemeral. New Disk on startup
                                            can write to /tmp.
8. SSH for debugging                        No                                     Yes
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? App engine - Scaling instances:
/*
//* Automatic: Scale instances automaticamente basandose en el load.
        - Es recomendado para workloads corriendo continuamente.

//* Basic: Las instancias son creadas cuando se recibe la request.
        - Es recomendado para adhoc worloads
        - Ésta opción basic no la soporta el tipo en ambiente flexible.

//* Manual: Se configura el número específico de instancias a correr.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Request routing:
/* Para enrutar traffic en diferentes versiones se puede hacer de 3 maneras:
   1. Routing con URL's.
   2. Routing con dispach file. (dispath.yaml).
   3. Routing con Cloud Load balancing.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Como se puede deployar de la V1 a la V2 sin downtime?
/* Option 1: Eres muy confident - Deploy & Shift all traffic at once.
   Option 2: Administrar la migración de v1 a v2.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Como divides el trafico entre multiples versiones ?
//* Existen 3 opciones:
/*      - IP splitting - Based on request IP address.
        - Cookie Splitting - Based on a cookie.
        - Random.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////






