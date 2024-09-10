//? Instance Group
//* Es la forma de poder crear un grupo de VM instances manejadas como una sola entidad
/* Existen 2 tipos de instance groups: 
        - Managed: Creadas desde una instance template
            Características:
                - Auto scaling.
                - Auto healing.
                - Managed releases.
        - Unmanaged: Diferente configuración para las VM's del mismo grupo.
            Características:
                - No ofrece auto-scaling, ni auto-healing.
                No se recomienda a menos de tener diferentes tipos de VM's.
        
Una instance group puede estar a nivel zona o nivel region. Region dará mayor disponibilidad.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Managed Instance Group:
/* Se usa ésta opción para crear VMs idénticas usando una instance template */
//* Características importantes:
/*      - Mantiene cierto número de instancias. Si una falla, MIG lanzará otra instancia.
        - Detecta fallas en la aplicación usando health checks.
        - Incrementa o decremente el número de instancias basándose en el LOAD (Auto Scaling).
        - Agrega Load Balancer para distribuir el LOAD.
        - Las MIG regionales proveeran de mayor disponibilidad comparadas que a nivel Zona.
        - Puede lanzar una nueva versión de la app sin un downtime.
            Rolling updates: Lanza una nueva versión de la app step by step (gradualmente).
            Canary deployemnt: Testea la nueva versión con un grupo de instancias antes de lanzarla
                               a todas las instancias.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Configuración al crear una Managed Instance Group:
/* - Tener una instance template es mandatorio.
   - Puedes configurar auto-scaling, y automaticamente se ajustará el num. de instancias, basándose en load.
       - Para auto-scaling se puede configurar: max número de instancias y min. número de instancias.
   - Se tiene Auto-scaling metrics: Aquí se pueden ver métricas de CPU Utilization o Load Balancer Utilization.
       - Cool down period: Cuanto tiempo esperar para ver las metricas de auto-scaling de nuevo ?
       - Scale in controls: Sirve para prevenir una caida inésperada.
   - Autohealing: Se puede configurar health check con algún delay (tiempo que quieres que se tarde para 
                  ejecutar el health check después de inicializar la app ).
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Actualizando una Instance Group Managed:
//* Rolling Update: Es una actualización gradual de instancias a una nueva instance template.
    /* Configuración de rolling update: 
        - Se debe especificar la nueva instance template. Opcional, si se quiere se puede poner
          una instance template para un canary testing.
        - Se especifica cuando debe suceder la actualización, hay 2 opciones:
            - Proactive: Empieza el update inmediatamente.
            - Opportunistic: Cuando el instance group sea resized despuúes.
        - Se especifica como debe ser el update, hay 2 opciones:
            - Maximum surge: Se refiere a la cantidad de instancias que pueden ser agregadas en 
                             cualquier momento. Por ejemplo. Si se tiene 10 instancias, y se pone 2 como
                             maximum surge, quiere decir que en total habrá 12 instancias.
            - Maximum unavailable: Se refiere a la cantidad de instancias que pueden estar offline durante
                                   el update.                      
    */

//* Rolling Restart/replace: Se usa en caso de que se requiera un restart ó replace de instancias.
    /* Ésta opción permite una actualización gradual o reemplazo de todas las instancias.
         - No se cambiará la instance template, SOLO remplazará o reiniciará las VM's.
         - Se puede configurar maximum surge y Maximum unavailable
    */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Instance Groups Scenarios:
/*
1. You want MIG managed application to survive Zonal Failures:
   R = Create multiple zone (or regional MIG).

2. You want to create VMs of different configurations in the same group:
   R = Create Un-managed instance group.

3. You want to preserve VM state in a MIG
   R = Stateful MIG - Preserve VM state.

4. You want high availability in an MIG even when there are hardware / software updates.
   R = Use an instance template with availability policy automatic restart: enabled & on-host
       maintenance.

5. You want unhealthy instances to be automatically replaced
   R = Configure health check on the MIG (self-healing)

6. Avoid frequent scale up & downs:
   R = Cool-down period/initial delay
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Managed instance groups - Command Line:
/*
    Create instance group: create
    gcloud compute instance-groups managed create my-mig --zone us-central1-a --template my-instance-template --size 1
        --health-check=HEALTH_CHECK: How do you decide if an instance is healthy?
        --initial-delay: How much time should you give to an instance to start?
    Other similar commands - gcloud compute instance-groups managed delete/describe/list

    Setup Autoscaling: set-autoscaling/stop-autoscaling
    gcloud compute instance-groups managed set-autoscaling my-mig --max-num-replicas=10
        --cool-down-period (default - 60s): How much time should Auto Scaler wait after initiating an autoscaling action?
        --scale-based-on-cpu --target-cpu-utilization --scale-based-on-load-balancing --target-load-balancing-utilization
        --min-num-replicas --mode (off/on(default)/only-scale-out)
    gcloud compute instance-groups managed stop-autoscaling my-mig

    Update existing MIG policies (ex: auto healing policies):
    gcloud compute instance-groups managed update my-mig
        --initial-delay: How much time should you give to the instance to start before marking it as unhealthy?
        --health-check: How do you decide if an instance is healthy?

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Managed instance groups - Command Line (haciendo updates):
/*
Resize the group:
  gcloud compute instance-groups managed resize my-mig --size=5

Recreate one or more instances (delete and recreate instances):
  gcloud compute instance-groups managed recreate-instances my-mig --instances=my-instance-1,my-instance-2

Update specific instances:
  gcloud compute instance-groups managed update-instances my-mig --instances=my-instance-3,my-instance-4 (Update specific instances from the group)
    --minimal-action=none(default)/refresh/replace/restart
    --most-disruptive-allowed-action=none(default)/refresh/replace/restart

Update instance template:
  gcloud compute instance-groups managed set-instance-template my-mig --template=v2-template
    - After updating the instance template, you can trigger a roll out of the new template using update-instances, recreate-instances, or rolling-action start-update commands.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Managed instance groups - Command Line (Rolling actions):
/*
    Scenario: You want to manage your new release - v1 to v2 - without downtime:

    Restart(stop & start)- gcloud compute instance-groups managed rolling-action restart my-mig.
      --max-surge=5 or 10% (Max no of instances updated at a time).

    Replace(delete & recreate)- gcloud compute instance-groups managed rolling-action replace my-mig.
      --max-surge=5 or 10% (Max no of instances updated at a time)
      --max-unavailable=5 or 10% (Max no of instances that can be down for the update)
      --replacement-method=recreate/substitute (substitute (default) creates instances with new names. recreate
        reuses names)

    Updates instances to a new template:

        Basic Version (Update all instances slowly step by step) - gcloud compute instance-groups managed 
        rolling-action start-update my-mig --version=template=v1-template.

        Canary Version (Update a subset of instances to v2) - gcloud compute instance-groups managed 
        rolling-action start-update my-mig --version=template=v1-template --canary-version=template=v2-template,
        target-size=10%
            Options: --max-surge, --max-unavailable, --replacement-method
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Escenarios:
/*
1. I want to ensure that I have one healthy instance running all the time:
   R = gcloud compute instance-groups managed set-autoscaling my-group --max-num-replicas=1 --min-num-replicas=1

2. I want to make a new release with no reduction in available number of instances. I want to update one 
instance at a time:
 R = gcloud compute instance-groups managed rolling-action start-update my-group --version=template=my-v1-template 
--max-surge 1 --max-unavailable 0

3. I want to make a new release without a reduction in capacity. Which of these options should I configure 
with a value of 0?
 R = --max-unavailable

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


