//* Cloud Load Balancing:
/* Distribuye el tráfico de las instancias de una aplicación en una región o multiples regiones

    Features importantes:
        - Tiene Health check = Recuperación de instancias si fallan.
        - Auto-Scaling = Se incrementan uso de instancias o decrementan dependiendo del uso.
        - Global load balancing with single anycast ip.

    Habilita:
        - Alta disponibilidad.
        - Auto-Scaling.
        - Resiliency = Solo se distribuirá tráfico en las healthy instances.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* HTTP, HTTPS, TCP, TLS, UDP.
/*
    - Las computadoras usan protocolos para comunicarse .
    - Existen layers:
        - Network layer: Transfiere bits y bytes.
        - Transport layer: Asegura que los bytes se transfieran correctamente.
        - Application layer: Hace Rest API calls y envia correos.
    importante:
        - Cada layer hace uso de los layers de debajo. (Primero esta application, transport y al final network).
        - La mayoria de las apps se comunican con application layer, pero para aquellas apps que requieren
          un mayor performance, se comunican con network layer directamente

    Protocolos que usa cad layer:
        Network layer:
            IP - internet protocol.
        Transport layer:
            TCP - transmission control. (Confiabilidad)
            TLS - Secure TCP. (Seguridad)
            UDP - User data protocol (Performance)
        Application layer:
            Http
            HTTPS
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Terminología de Load Balancing.
// Cliente to Load-Balancer: Over internet.
    // - HTTPS es recomendado
// Load Balancer to VM instance: A travéz de Google internal network.
    // - Https es preferido.

// SSL/TLS Termination/Offloading
    // - Client to Load Balancer: HTTPS/TLS.
    // - Load balancer to VM instance: HTTP/TCP