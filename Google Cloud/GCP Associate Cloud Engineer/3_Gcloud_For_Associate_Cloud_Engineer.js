//* Que es Gcloud:
/* Es el Command Line Interface para poder interactuar con los recursos de Google cloud.
   - La mayoria de los servicios pueden pueden ser administrados desde Gcloud, por ejem:
     - Compute Engiene Virtual Machines.
     - Managed Instance Groups.
     - Databases.
     - y mas...
   - Con Gcloud, es posible create/delete/update/read diferentes recursos y hacer acciones como
     deployment.
   - (importante) Algunas GCP tools tienen su propio CLI, por ejemplo:
     - Cloud Storage - gsutil.
     - Cloud BigQuery - bq
     - Cloud BigTable - cbt
     - Kubernates - kubectl
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Instalación:
/* Gcloud es parte de Google Cloud SDK:
     - Cloud sdk requiere python.
     - Ó también se puede usar Gcloud en "Cloud Shell".

   Para conectarse en GCP estando en Cloud Shell:
     - gcloud init: servirá para inicializar o re-inicializar gcloud.
        - Es necesario a gcloud para que use las credenciales.
        - Y se hace la configuración.
     - gcloud config list: servirá para listar todas las propiedades de la configuración activa.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Los comandos para setear cierta infomación son los siguientes:
/*
  - Para setear una propiedad específica en la configuración activa:
     - gcloud config set core/project VALUE
     - gcloud config set core/verbosity VALUE(debug)
     - gcloud config set compute/region VALUE
     - gcloud config set compute/zone VALUE

  - Syntax: gcloud config set SECTION/PROPERTY VALUE
    - core, compute = sections.
    - project, region, zone, etc = properties.
    - Poner core es opcional, ya que es la sección por default.
      - gcloud config set project VALUE
      - gcloud config set verbosity VALUE(debug).
    - Comando para obtener mas detalles: 
      - gcloud config set --help
    - Tambien hay un comando unset:
      - gcloud config unset
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Escenario: Estas trabajando en varios projects. Lo que quieres es poder ejecutar comandos usando diferentes
 configuraciones:
    - Para esto, se crean y activan configuraciones de la siguiente manera:
      - crear nueva configuración: gcloud config configurations create/delete/describe/activate/list NAME
      - Activar una configuración: gcloud config configurations active NAME
      - Listar las configuraciones: gcloud config configurations list
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Estructura de comandos:
/* Sintaxis general para ejecutar comandos en los servicios de GCP:
    - gcloud GROUP SUBGROUP ACTION...
    - Group puede ser: compute, container, dataflow, etc...
    - Subgroup puede ser: instances, images, instance-templates, machine-types. (aqui se escoge el subgrupo del
      servicio que quieras).
    - Action: create, list, start, etc...

    - Ejemplos:
     - gcloud compute instances list.
     - gcloud compute zones list.
     - gcloud compute machine-types list --filter="zone:us-central1-b".
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Al usar el comando para crear una instancia, es posible usar flags para establecer cierta información:
// Por ejemplo: gcloud compute instances create [name] 
/* options:
      --machine-type (default type is n1-standard-1 - gcloud compute machine-types list)
      --custom-cpu --custom-memory --custom-vm-type(n1/n2) (Custom Machine)
      --custom-cpu 6 --custom-memory 3072MB --custom-vm-type n2
      --image or --image-family or --source-snapshot or --source-instance-template or --source-machine-image (beta)
      --service-account or --no-service-account
      --zone=us-central1-b
      --tags (List of tags - Allow network firewall rules and routes to be applied to VM instances)
      --preemptible
      --restart-on-failure(default) --no-restart-on-failure --maintenance-policy(MIGRATE(default)/TERMINATE)
      --boot-disk-size, --boot-disk-type --boot-disk-auto-delete(default) --no-boot-disk-auto-delete
      --deletion-protection --no-deletion-protection(default)
      --metadata/metadata-from-file startup-script/startup-script-url
      --metadata-from-file startup-script=/local/path/to/script/startup OR --metadata startup-script="echo 'hello world'"
      shutdown-script
      --network --subnet --network-tier (PREMIUM (default), STANDARD)
      --accelerator="type=nvidia-tesla-v100,count=8" --metadata="install-nvidia-driver=True" (GPU)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Para configurar la region y zona, existen 3 opciones diferentes:
/*
    Three Options:
      Option 1 (Centralized Configuration): gcloud compute project-info add-metadata
                --metadata=[google-compute-default-region=REGION | google-compute-default-zone=ZONE].
                Ésta opción 1 se aplica al servicio, entonces se aplica a cualquier usuario del proyecto.
                Y es probable que ese User use los comandos de las opciones 2,3 y entonces se sobreescribe.
      Option 2 (Local gcloud configuration): gcloud config set compute/region REGION.
      Option 3 (Command Specific): --zone or --region in the command.

      Priority: Option 3 (if exists) overrides Option 2 (if exists) overrides
      Option 1.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* List y Describe commands:
//* List = Dará una lista de los recursos.
//* Describe = Sirve para describir los recursos.
/*
  Typically list commands are used to list a set of resources
  gcloud compute RESOURCES list
  gcloud compute images/regions/zones/disk-types list
  gcloud compute instances/disks/snapshots list
  Most list commands support a few common options
  --filter="zone:VALUE"
  --sort-by (NAME, ~NAME)
  --uri (
  )
  gcloud compute images list --sort-by NAME --filter "PROJECT:(windows-cloud ubuntu-os-cloud)"

  Typically describe commands are used to describe a specific resource
  gcloud compute images describe ubuntu-1604-xenial- v20210203 --project ubuntuos-cloud
  gcloud compute regions describe us-central1
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  //* Playing with compute instances:
  gcloud compute instances list/start/stop/delete/reset/describe/move
  gcloud compute instances start example-instance
  gcloud compute instances stop example-instance-1 example-instance-2
  gcloud compute instances delete example-instance
  --delete-disks=VALUE (all or data or boot)
  --keep-disks=VALUE (all or data or boot)
  gcloud compute instances move example-instance-1 --zone us-central1-b --destination-zone uscentral1-f
  Move a VM from one zone to another
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Playing with instance templates:
/*
    gcloud compute instance-templates create/delete/describe/list
    gcloud compute instance-templates create INSTANCE-TEMPLATE
    --source-instance=SOURCE_INSTANCE --source-instance-zone (Which instance to create a template
    from?)
    Supports almost all options supported by gcloud compute instances create [NAME]
    --image or --image-family or --source-snapshot or --source-instance-template
    --service-account or --no-service-account
    --tags
    --preemptible
    --restart-on-failure(default) --no-restart-on-failure --maintenance-policy(MIGRATE(default)/TERMINATE)
    --boot-disk-size, --boot-disk-type --boot-disk-auto-delete(default) --no-boot-disk-auto-delete
    --deletion-protection --no-deletion-protection(default)
    --metadata/metadata-from-file startup-script/startup-script-url
    --network --subnet --network-tier (PREMIUM (default), STANDARD)
    --accelerator="type=nvidia-tesla-v100,count=8" --metadata="install-nvidia-driver=True" (GPU)
    Using Instance Tempate to create an instance
    gcloud compute instances create my-test-vm --sourc e-instance-template=my-instance-templatewith-custom-image
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Para conectarse en GCP estando en Cloud Shell:
/* - gcloud init: servirá para inicializar o re-inicializar gcloud. */

//* Comandos para setear una propiedad específica en la configuración activa:
/*
     - gcloud config set core/project VALUE
     - gcloud config set core/verbosity VALUE(debug)
     - gcloud config set compute/region VALUE
     - gcloud config set compute/zone VALUE
*/

//* Comandos para crear y activar configuraciones:
/* - Crear nueva configuración: gcloud config configurations create/delete/describe/activate/list NAME
   - Activar una configuración: gcloud config configurations active NAME
*/

//* Sintaxis general para ejecutar comandos en los servicios de GCP:
/* - gcloud GROUP SUBGROUP ACTION.
   - Group puede ser: compute, container, dataflow, etc...
   - Subgroup puede ser: instances, images, instance-templates, machine-types.

   Ejemplos:
    - gcloud compute instances list.
    - gcloud compute zones list.
    - gcloud compute machine-types list --filter="zone:us-central1-b".
    - gcloud compute instances/disks/snapshots list
*/

//* Ejemplo de comando para para mover una VM de una zona a otra:
/* gcloud compute instances move example-instance-1 --zone us-central1-b --destination-zone uscentral1-f
*/




