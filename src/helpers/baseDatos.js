//Crear una base de datos.

export let productos = Array(
    {
        nombre:"Ducati",
        descripcion:"El lado versátil de la deportividad: sin renunciar nunca a su impronta deportiva, SuperSport combina confort y versatilidad gracias a soluciones que logran un componente perfecto para el uso diario. La SuperSport ahora disponible en un nuevo color: Gris Titanium",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/DucatiBlanca.png?alt=media&token=5bd29589-ae85-4ad8-bc8a-80bab1e07df0","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/DucatiRoja.png?alt=media&token=f0f42db0-5d98-4eb0-9853-581b150c9231"),
        precio:12000000,
        popularidad:5
    },
    {
        nombre:"MT09",
        descripcion:"La MT-09 es un concepto totalmente innovador en el segmento de las motocicletas HYPER NAKED DEPORTIVAS. Con un nuevo concepto de chasis compacto y un motor tricilíndrico de alto par, esta nueva generación de motocicletas de alto rendimiento, se ha diseñado especialmente para pilotos que buscan imponerse con una dosis de carácter a su paso. El corazón que late dentro de este animal salvaje, es un ligero motor de 3 cilindros y 850cc que proporciona una contundente aceleración lineal y potencia en bruto, perfecta para hacer fluir tu adrenalina. Por si fuera poco, para mejorar la agilidad del conjunto, la motocicleta cuenta con un chasis de aluminio pensado para una conducción vertical y cómoda, que simplificará todos tus trayectos, ya sea para ir al trabajo, o para una escapada de fin de semana.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/MT09-AZUL.webp?alt=media&token=ee8f2ef1-b9d0-49bd-85af-995a27b4668a","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/MT09-NEGRO.webp?alt=media&token=bdd47e54-527f-4d21-9d30-e7521ecc26e4"),
        precio:12000000,
        popularidad:5
    },
    {
        nombre:"MT10",
        descripcion:"Siendo tope de gama en la familia MT, este modelo ofrece una experiencia única y lleva al extremo las emociones. Con un motor basado en el desarrollo de la YZF-R1, y un chasis ligero, el MT-10 ha sido diseñado para una conducción versátil y desafiante que permitirá llegar a donde nadie había llegado antes.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Mt10_negra.png?alt=media&token=049abf1d-69a3-48a5-8c4f-b77c0e9da370","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Mt10_azul.png?alt=media&token=5676719e-a0e1-421f-97ee-d5cce386d923"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"KAWASAKI NINJA H2R",
        descripcion:"La Kawasaki Ninja H2R es una moto exclusiva de circuito con un empuje que bien podría recordar a una MotoGP. Su preparación hace que rinda tranquilamente 310 cv de potencia, pero que incluso con Ram Air llega a los brutales 326 cv...",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Ninja%20H2R.png?alt=media&token=56fcfc27-9b61-40df-9539-b130ad2971f8","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Ninja%20H2R2.png?alt=media&token=a7fb9753-f2f7-4ec6-b147-2b01deaaaa8c"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"YAMAHA R1",
        descripcion:"La YZF-R1 es el buque insignia de la gama súper deportiva de Yamaha, es la moto súper sport más avanzada que se ha construido. Con la tecnología crossplane de la YZR-M1 de MotoGP, un diseño de cigüeñal crossplane, una distancia reducida entre ejes y unos sofisticados controles electrónicos, se adapta a ti y lleva tu experiencia de conducción a un nuevo nivel. Desarrollada con la tecnología de MotoGP de la YZR-M1, esta motocicleta ha nacido para la pista. 200 CV, 199 kg y una distancia entre ejes de 1405 mm son una pequeña muestra de sus credenciales. Pero lo que la hace especial es todo lo que no se puede ver.  ",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/R1-AZUL.jpg?alt=media&token=31efb175-fe34-49ca-b098-8a61f3bc04ee","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/R1-NEGRO.jpg?alt=media&token=324eceb5-94a6-4a54-b560-994f0b2b99e9"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"KAWASAKI Z900",
        descripcion:"Su gran atractivo se ve acentuado por un conjunto de funciones avanzadas completamente nuevas, como los modos de conducción integrados (que combinan las nuevas opciones del KTRC y los modos de potencia), una nueva instrumentación TFT a color, conectividad smartphone, alumbrado completamente LED y emisiones más limpias.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Z900.png?alt=media&token=fa3a5a46-fc72-4736-bdf2-923b091c279a","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/Z9002.png?alt=media&token=7ed5bfdd-3022-4e6e-a63b-f388f7e80b69"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"KTM DUKE890",
        descripcion:"Siempre ágil, pero con más potencia, la KTM 890 DUKE R toma todo lo que nos gusta de la KTM 790 DUKE y sube la nota de un 10 a un 11. Se trata de una motocicleta naked de cilindrada media sin compromisos, tanto en carretera como en circuito, que ofrece más potencia, más par y más “dukeness” que cualquier moto equipada con un motor bicilíndrico paralelo conocida hasta ahora.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/DUKE8902.webp?alt=media&token=f5d92605-e883-4d33-a501-4f1b45ac5edc","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/DUKE890.webp?alt=media&token=8444157b-1cff-4478-aea0-97e9fc5a49e5"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"YAMAHA MT03",
        descripcion:"Con su estilo robusto y rendimiento repleto de adrenalina, la nueva MT03 viene con mayores prestaciones, tecnología ABS y una presencia imponente.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/mt03_gris.png?alt=media&token=57b4955d-61e8-4b7a-b077-f7e4ee5fd2ca","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/mt03_azul.png?alt=media&token=18e0662f-2907-482c-bf6c-87334fa77c3b"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"YAMAHA MT07",
        descripcion:"La MT-07 está diseñada para ofrecer la máxima diversión. Todas las características de esta naked versátil tienen ese principio en mente, desde su ágil chasis hasta su bajo consumo, lo que la hace irresistible tanto para nuevos usuarios como para los más experimentados.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/mt07-black.webp?alt=media&token=aa8de9f1-9bd0-4c1e-910c-43b80e00d49c","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/mt07-gris.webp?alt=media&token=bad23e66-80da-4148-bfbc-7d4474792e32"),
        precio: 12000000,
        popularidad:5
    },
    {
        nombre:"YAMAHA R15",
        descripcion:"Yamaha R15 3.0, una motocicleta de aspecto deportivo gracias al lenguaje gráfico Yamaha Racing característico originalmente de los modelos superdeportivos. También disfruta de un chasís deportivo Deltabox (heredado de la R1) y un peso de 137 kg.",
        fotos:Array("https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/r15-gris.webp?alt=media&token=095bc053-36e8-4503-a2c3-7dfa8e71cf94","https://firebasestorage.googleapis.com/v0/b/katienda.appspot.com/o/r15-azul.webp?alt=media&token=4e759785-8677-467c-8682-023c68b58f7b  "),
        precio: 12000000,
        popularidad:5
    },
)