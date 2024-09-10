//? IAAS: Infraestructure as a Service:
//* Este tipo de servicio usa solo infraestructura de cloud, usa solo: virtualización, hardware físico y networking.
//* Ejemplo: Usar una VM para hacer deploy de apps.
/* En este tipo de servicio, eres responsable de:
        - Application Code and Runtime.
        - Configuración de Load Balancing.
        - Auto-Scaling.
        - OS updagrades and patches.
        - Disponibilidad.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? PASS (Platform as a Service):
//* Uso de la plataforma que provee Google Cloud.
/* Google Cloud será responsable de:
        - OS(upgrades and patches).
        - Application Runtime.
        - Auto-Scaling, Availability, Load balancer etc.

   Eres responsable de:
        - Configuración (de applicación y servicio).
        - Código.
*/

//* Variantes:
/*      - CAAS (Container as a service): Uso de contenedores en lugar de apps.
        - FAAS (Function as a Service): Uso de funciones en vez de apps.
        - Databases - Relacional y NoSQL.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Containers:
/* Un tipo de arquitectura excelente son microservicios. Pero una desventaja miu grande es el deploy.
   Es aquí cuando entran los contenedores:

   //* Containers Docker:
    - Se puede crear una docker image para cada microservicio.
    - Una ventaja es que correrá de la misma manera en cualquier infraestructura ya sea local machine, cloud...
   //* Más ventajas de Docker:
    - Son muy ligeros.
    - Docker provee isolation para contenedores.
    - Docker es cloud neutral.
*/
