//! PREGUNTAS MÁS COMPLEJAS:
/* You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. 
Which range should you use? */
//? R = 10.0.0.0/8.

/* You want to configure autohealing for network load balancing for a group of Compute Engine instances 
that run in multiple zones, using the fewest possible steps.You need to configure re-creation of VMs 
if they are unresponsive after 3 attempts of 10 seconds each. What should you do? */
//? R = Create a managed instance group. Set the Autohealing health check to healthy (HTTP).

/* Cuales son los pre-requisitos para poder habilitar una VM instance */
/* R = 1. Project.
       2. Billing Account.
       3. Compute Engines API should be enabled
*/

/* You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. 
You are working with a small set of operational data in one geographic location. 
You need to support point-in-time recovery. What should you do?
*/
//? Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.

/* You are using multiple configurations for gcloud. You want to review the configured Kubernetes 
Engine cluster of an inactive configuration using the fewest possible steps. What should you do ?
*/
//? Use kubectl config use-context and kubectl config view to review the output.

/* Your company uses Cloud Storage to store application backup files for disaster recovery purposes. 
   You want to follow Google's recommended practices. Which storage option should you use?
*/
//? C. Nearline Storage

/* You want dedicated hardware for your compliance, licensing and managment needs */
//? R = Sole-tenant nodes

/* I have 1000s of VM and I want to automate OS patch managment, OS inventory managment,
   and OS configuration managment */
//? R = Use VM Manager

/* You want to login your VM instance to install software */
//? R = You can SSH into it.

/* You dont want to expose a VM to internet */
//? R = Do NOT assign an external IP address

/* You want to allow HTTP traffic to your VM */
//? R = Configure Firewall Rules



//! PREGUNTAS FÁCILES:
/* What is on-demand resource provisioning? */
//? R = Provisioning (renting) resources when you want them and releasing them back when you dont 
//?     need them.

/* Which of these statements about Region is TRUE ? */
//? R = GCP has Regions across different continents.

/* Which of these is an availability zone in the region of the The Dalles, Oregon, North America - us-west1? */
//? R = us-west1-a

/* Which of these are the advantages of the Cloud? */
//? R = Ventajas de Cloud:
//?         - Trade capital expense for variable expense.
//?         - Benefit from massive economies of scale.
//?         - Stop Guessing capacity

/* How can you get high availability for global applications? */
//? R = Distribute virtual servers across multiple regions and multiple zones.

/* Which machine type family is best suited to run CPU intensive workloads? */
//? R = Compute Optimized.

/* What does 2 in the Machine Type e2-standard-2 represent? */
//? R = 2 vCPUs

/* Which of these statements about static IP addresses is FALSE ? */
//? R = Static IP address CANNOT be switched to another VM instance in the same project.

/* Which of these statements about static IP addresses is TRUE ? */
//? R = La static IP permanecerá igual a pesar de detener la VM. Y se cobrará por una IP estática cuando no 
//?     sea usada.

/* How can you avoid specifying all the VM instance details (Image, Machine Type, Firewall settings etc)
every time you create a VM? */
//? R = Create an instance Template.

/* Which of these is the preferred option to reduce the launch time of an VM instance ? */
//? R = Use a Custom Hardened Image.

/* What of these statements about Preemptible VM are TRUE ? */
/* 1. Can be stopped by GCP anytime within 24 hours.
   2. Instances get a 30 second warning to react.
   3. Preemptible VM's are the cheapest VM options.
*/

/* Which of these is recommended to save costs for a non-critical fault tolerant batch program ? */
//? R = Preemptible VM.

/* Which of the following statements is TRUE ? */
//? R = You cannot change the machine type of a running instance.

/* Which of these metrics is available by default (without installing Cloud Monitoring agent) 
for a Compute Engine Virtual Machine? */
//? R = CPU Utilization.

/* Which of these commands lists all properties of the active configuration in Gcloud ? */
//? R = gcloud config list.

/* Which of these commands is used to set the active project ? */
//? R = gcloud config set core/project my-project-abc or gcloud config set project my-project-abc. ambas son validas.

/* Which of these has the highest priority (to decide the zone) when you execute a gcloud command ? */
//? R = --zone option specified along with the command.

/*
 Escenario: Estas trabajando en varios projects. Lo que quieres es poder ejecutar comandos usando diferentes
 configuraciones:
    - Para esto, se crean y activan configuraciones de la siguiente manera:
      - crear nueva configuración: gcloud config configurations create/delete/describe/activate/list NAME
      - Activar una configuración: gcloud config configurations active NAME
      - Listar las configuraciones: gcloud config configurations list
 */

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Google Cloud Associate Cloud Engineer Practice Exam 1:

/* 1. Your organization has created multiple projects in several folders. You have been assigned to 
   manage and want to get descriptive information about each project. What command would you use 
   to get metadata about a project?
*/ // Ambas respuestas debajo son válidas.
//? R1 = gcloud projects describe [PROJECT_ID]
//? R2 = gcloud projects describe [PROJECT_NAME]

/* 2. A new team member has just created a new project in GCP. What role is automatically granted to 
   them when they create the project?
*/
//? R = roles/owner: When you create a project, you are automatically granted the roles/owner role.

/* 3. Your organization has created multiple folders, one for each department. In each folder, departments
   have one or more projects. What would you expect resources within the folder to share?
*/
//? R = IAM Policies: Folders are used to group resources that share common IAM policies
/** Explicación:
 *  las carpetas sirven para agrupar recursos. A nivel de carpeta se pueden compartir las politicas IAM con todos 
 *  los recursos (proyectos).
 */

/* 4. A manager in your company is having trouble tracking the use and cost of resources across several 
   projects. In particular, they do not know which resources are created by different teams they manage. 
   What would you suggest the manager use to help better understand which resources are used by which team?
*/
//? R = Label
/** Explicación:
 * En resumen, al usar etiquetas en Google Cloud, el gerente podrá obtener una mejor comprensión de qué recursos pertenecen 
 * a cada equipo, lo que facilitará el seguimiento del uso y el costo de los recursos, y permitirá una gestión más eficiente 
 * y organizada de los proyectos en el entorno en la nube.
 */

/* 5. An auditor is reviewing your GCP use. They have asked for access to any audit logs available in GCP. 
   What audit logs are available for each project, folder, and organization?
*/
//? = Admin Activity logs, Data Access logs, and System Event logs.
/**
 * Estos tres tipos de registros de auditoría (Admin Activity logs, Data Access logs y System Event logs) están disponibles 
 * para cada proyecto, carpeta y organización en Google Cloud Platform. Proporcionan una visión completa de las actividades 
 * realizadas en el entorno de GCP y son esenciales para la seguridad, la conformidad y el seguimiento de eventos en la plataforma. 
 * La disponibilidad de estos registros permite a los auditores revisar y analizar las operaciones y eventos relevantes en la 
 * infraestructura y servicios de Google Cloud.
 */

/* 6. To avoid potentially violating a regulation, your company has determined that it will only use GCP resources in North America. 
How would you ensure no resources are created outside of North America? */
//? R = Create policy at the oranization level of the resource hierarchy that includes a constraint using a Resource Location Restriction.

/* 7. You want to use Cloud Identity to create identities. You have received a verification record for your domain. 
Where would you add that record? */
//? R = In the domain's DNS setting.
/** Explicacion:
 * Cloud Identity es un servicio de administración de identidades que permite a las organizaciones crear y gestionar identidades 
 * para sus usuarios y aplicaciones. Cuando deseas utilizar Cloud Identity y agregar un dominio para verificar la propiedad del 
 * mismo, Google requiere que demuestres que eres el propietario del dominio antes de permitirte gestionar las identidades 
 * asociadas a ese dominio.
 */

/* 8. As a consultant to a new GCP customer, you are asked to help set up billing accounts. What permission must an identity have in 
order to create a billing account? */
//? R = billing.accounts.create
/** Explicación:
 *  billing.accounts.creat es el permiso necesario para crear una Billing Account.
 */

/* 9. Your company has a complicated billing structure for GCP projects. You would like to set up multiple configurations for use 
with the command line interface. What command would you use to create those? */
//? R = gcloud config configurations create.

/* 10. As a developer using GCP, you will need to set up a local development environment. You will want to authorize the use of 
   gcloud commands to access resources. What commands could you use to authorize access? */
//? R = gcloud init y gcloud auth login.
/** Explicación:
 *  El proceso de autorización se completa mediante la ejecución de ambos comandos. "gcloud init" te ayuda a configurar la 
 *  herramienta "gcloud" con la cuenta y el proyecto predeterminado, mientras que "gcloud auth login" te permite autenticarte 
 *  y autorizar el acceso a tus recursos en Google Cloud Platform.
 */

/* 11. A client of yours has a Python 3 application that provides an API endpoint that runs continually. The service usually 
has very little load but sometimes experiences sudden and extreme spikes in traffic. They want to run it in GCP but they 
want to keep costs as low as possible. They also want to minimize management overhead. What service would you recommend? */
//? R = App Engine.
/** Explicación:
 *  App Engine es una excelente opción para el cliente debido a sus capacidades de autoescalado, manejo de tráfico y gestión reducida, 
 *  lo que permite mantener bajos los costos y simplificar el proceso de implementación y administración de su aplicación Python 3.
 */

/* 12. You will be running an application that requires high levels of security. You want to ensure the application does not run 
on a server that has been compromised by a rootkit or other kernel-level malware. What kind of virtual machine would you use? */
//? R = Shielded VM
/** Explicación:
 *  Shielded VMs are hardened virtual machines that use Secure Boot, virtual trusted platform module enabled Measured Boot, 
 *  and integrity monitoring.
 */

/* 13. A developer is trying to upload files from their local device to a Compute Engine VM using the gcloud scp command. 
The copy command is failing. What would you check to try to correct the problem? */
//? R = Ensure firewalls rules allow traffic to port 22 to allow SSH connections. 
/** Firewall:
 *  To copy files to a VM, a firewall rule must be in place to allow traffic on port 22, the default SSH port,
 */

/* 14. You want to clone a persistent disk. What characteristics of the source and cloned disk must be the same? */
//? R = Region, zone and disk type.

/* 15. You have a set of snapshots that you keep as backups of several persistent disks. You want to know the source 
disk for each snapshot. What command would you use to get that information? */
//? R = gcloud compute snapchots describe
/** Explicación: The correct command is gcloud compute snapshots describe which shows information about the snapshot, 
 *  including source disk, creation time, and size.
 */

/* 16. Your department runs a legacy application on an on premises cluster. The nodes in the cluster are heterogeneous. 
You want to migrate this cluster to Google Cloud. What Compute Engine resource would you use? */
//? R = Unmanaged instance group.
/** Explicación:
 *  Heterogeneous clusters can be run on unmanaged instance groups but not managed instance groups.
 */

/* 17. An application running in Compute Engine sometimes gets spikes in load. You want to add instances automatically when 
load increases significantly and plan to use managed instance groups. What would you need to create in order to automatically 
scale the cluster? */
//? R = Instance template
/* Explicación: En resumen, utilizar un Instance Template es esencial para implementar la escalabilidad automática con grupos 
de instancias administradas en GCP. Proporciona coherencia, facilidad de gestión y flexibilidad al permitirte ajustar la 
configuración centralizada para todas las instancias en el grupo. 

An instance template is needed to enable Compute Engine to automatically add instances to a managed instance group.*/

/* 18. You have deployed a sole tenant node in Compute Engine. How will this restrict what VMs run on that node. */
//? R = Solo VM´s del mismo proyecto correrán en ese Nodo.
/* Explicación: On a sole tenant node, only VMs from the same project will run on that node.  */

/* 19. You have created a target pool with instances in two zones which are in the same region. The target pool is not 
functioning correctly. What could be the cause of the problem? */
//? R = Al target pool le hace falta un health check. 
/* Explicación: Target pools must have a health check to function properly. */

/* 20. A startup has an app that allows users to upload images to Cloud Storage. The images should be analyzed as soon as 
possible once they are loaded. Processing takes approximately 1 second for each image. There are periods when no images 
are uploaded and other times when many images are upload in short periods of time. What compute option would you use to 
process images? */
//? R = Cloud Functions.
/* Explicación: Cloud Functions is used to respond to events in GCP, including uploading of files in Cloud Storage. 
Since there are periods when no images are uploaded, there is no need to have an application running continuously 
and checking for new image uploads. */

/* 21. The CFO of your company wants to improve an existing data warehouse by migrating it to Google Cloud. They want to 
minimize operational overhead while ensuring existing SQL tools can be used with the migrated data warehouse. 
What GCP service would you recommend? */
//? R = BigQuery 
/* Explicación: BigQuery is a managed, petabyte scale data warehouse, which uses SQL. Bigtable does not support SQL. Cloud SQL and Cloud 
Spanner support SQL but are designed for transaction processing, not analytical applications like data warehouses. */

/* 22. As a consultant to a mid-sized retailer you have been asked to help choose a managed database platform for the company's 
inventory management application. The retailer's market is limited to the Northeast United States. 
What service would you recommend? */
//? R = Cloud SQL.
/* Explicación: Cloud SQL is a managed relational database service suitable for regionally used applications. 
Cloud Spanner is also a managed relational database but it is designed for multi-region and global applications */

/* 23. A startup has created an IoT application that analyzes data from sensors deployed on vehicles. 
The application depends on a database that can write large volumes of data at low latency.  The startup has used HBase 
in the past but wants to migrate to a managed database service. What service would you recommend? */
//? R = BigTable 
/* Explicación: Bigtable is a wide column database with low latency writes that is well suited for IoT data storage. 
BigQuery is a data warehouse service */

/* 24. A startup is implementing an IoT application that will ingest data at high speeds. The architect for the startup 
has decided that data should be ingested in a queue that can store the data until the processing application is able 
to process it. The architect also wants to use a managed service in Google Cloud. What service would you recommend? */
//? R = Cloud Pub/Sub. It is a queuing service that is used to ingest data and store it until it can be processed. 

/* 25. Your company has an on premises Hadoop cluster that is to be migrated to Google Cloud. The CFO wants to minimize 
operational overhead. What GCP service would you recommend? */
//? R = Cloud Dataproc.
/* Explcacion: Cloud Dataproc is a managed Spark/Hadoop service that can be used to migrate Hadoop clusters GCP. */















