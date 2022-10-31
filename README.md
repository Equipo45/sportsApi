# SportsApi

A crossfit api for a company application

EL funcionamiento de la API es similar al de muchas APIs creadas previamente:

	1.Primero tenemos un router , este dependiendo de la URL que metamos y del protocolo HTTP(GET,POST,PATCH,DELETE...) , hara una accion en nuestra base de datos gracias al controlador

	2.La accion del controlador que sera eleguida dependiendo de la ruta lo que hace es capturar el metodo HTTP y utilizar el servicio correspondiente para modificar la base de datos o hacer una consulta

	3.El servicio al que llama el controlador , en nuestro caso no solo devuelve los datos , sino que modifica parametros ,como la hora ala que se modifico el archivo.

	4.Finalmente el apartado database , que se encarga de recoger o modificar estos datos directamente en la base de datos, este tiene contacto directo con la base de datos.