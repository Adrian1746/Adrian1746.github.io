/*
 * EDITA AQUÍ EL CONTENIDO
 * Los siete registros con información están transcritos de la base de datos.
 * En las filas vacías solo aparecen el artefacto y su destino, tal como están
 * identificados para este sitio. Completa los campos vacíos cuando tengas datos.
 * story, discoveries e image también son espacios para que agregues contenido.
 */
const missions = [
  {
    id: 'apollo-11', name: 'Apollo 11 LM Descent Stage', world: 'Luna', mark: '11',
    officialName: 'Etapa de descenso del Módulo Lunar Apollo (designación de la misión: parte del Lunar Module 5 o LM-5, bautizado como Eagle).',
    launch: '16 de julio de 1969 (13:32:00 UTC), Complejo de Lanzamiento 39A, Centro Espacial Kennedy, Florida; cohete Saturno V.',
    end: '20 de julio de 1969 a las 20:17:40 UTC, momento en el cual alunizó con éxito y completó su función principal de descenso. Operó como plataforma estática y base de lanzamiento durante las horas que los astronautas pasaron en la superficie hasta el 21 de julio de 1969 (a las 17:54:00 UTC), cuando la etapa de ascenso despegó de regreso al Módulo de Mando, dejando atrás permanentemente la etapa de descenso.',
    purpose: 'Servir como el vehículo autónomo propulsado capaz de frenar y descender de manera controlada el Módulo Lunar desde la órbita lunar hasta la superficie de la Luna.',
    endReason: 'Su cese operativo fue planificado por diseño. Cumplió por completo con su ciclo de vida útil: una vez que la etapa de ascenso despegó utilizando la sección inferior como plataforma de despegue, la etapa de descenso se quedó sin propósito operacional y fue abandonada permanentemente en el satélite.',
    finalPlace: 'Se encuentra permanentemente en la Base Tranquilidad (Tranquility Base), situada en el sur de la planicie lunar conocida como Mar de la Tranquilidad (Mare Tranquillitatis).',
    nasaUrl: 'https://ntrs.nasa.gov/api/citations/19700024568/downloads/19700024568.pdf',
    story: '¿Te imaginas dejar tu primer escalón en otro mundo? El Apollo 11 LM Descent Stage llevó a los astronautas a pisar la Luna en 1969 y sirvió de pista para que pudieran regresar a casa. Al terminar su trabajo, se quedó cuidando solo el satélite para siempre, lo más loco es que como en este cuerpo celeste no hay viento ni lluvia, las huellas de las botas siguen intactas. Hoy descansa pacíficamente en el Mar de la Tranquilidad, luciendo sus patas brillantes mientras espera que algún día volvamos a visitarla.',
    discoveries: 'Permitió el primer alunizaje tripulado seguro de la historia humana. Aunque su propósito principal era de ingeniería, sirvió como plataforma fundacional para instalar los primeros instrumentos científicos lunares, incluyendo un sismógrafo y el reflector láser para medir con precisión milimétrica la distancia entre la Tierra y la Luna.', 
    image: 'https://www.nasa.gov/wp-content/uploads/2023/06/337294main-pg62-as11-40-5903-full.jpg',
    color: 'moon'
  },
  {
    id: 'alsep', name: 'Paquetes ALSEP (Apollo 12 a 17)', world: 'Luna', mark: 'A',
    officialName: 'ALSEP (Apollo Lunar Surface Experiments Package)',
    launch: 'Apollo 12: 14 de noviembre de 1969 (Alunizaje: 19 de noviembre de 1969), Apollo 14: 31 de enero de 1971 (Alunizaje: 5 de febrero de 1971), Apollo 15: 26 de julio de 1971 (Alunizaje: 30 de julio de 1971), Apollo 16: 16 de abril de 1972 (Alunizaje: 21 de abril de 1972), Apollo 17: 7 de diciembre de 1972 (Alunizaje: 11 de diciembre de 1972) ',
    end: 'Todos los paquetes ALSEP operaron de forma continua transmitiendo datos a la Tierra durante años, superando ampliamente sus expectativas de diseño (1 año). La NASA ordenó el apagado definitivo y la desconexión de todas las estaciones ALSEP el 30 de septiembre de 1977 por recortes presupuestarios en el seguimiento de misiones pasadas y debido a la degradación de sus componentes tras múltiples años expuestos al duro entorno lunar.',
    purpose: 'Dejar un conjunto autónomo y avanzado de estaciones científicas geofísicas en la superficie lunar para monitorear a largo plazo el entorno del satélite una vez que los astronautas abandonaban el lugar.',
    endReason: 'El cese no se debió a una falla técnica instantánea de los equipos, sino a una decisión administrativa y presupuestaria de la NASA. Para el año 1977, mantener operativas las estaciones requería personal y presupuesto continuo en la Tierra, por lo que se cortaron las transmisiones y se apagaron de forma remota.',
    finalPlace: 'Apollo 12: Oceanus Procellarum (Océano de las Tormentas), Apollo 14: Fra Mauro, Apollo 15: Hadley-Apennine, Apollo 16: Descartes, Apollo 17: Taurus-Littrow',
    nasaUrl: 'https://ntrs.nasa.gov/api/citations/20180008613/downloads/20180008613.pdf',
    story: 'Imagínate dejar un montón de cajitas científicas regadas por la Luna para que vigilen todo por nosotros, eso hicieron los Paquetes ALSEP desde 1969, midiendo temblores y el polvo del suelo sin descansar ni un solo día estos aguantaron fieles hasta que en 1977 las personas tuvieron que apagar sus señales por recortes de presupuesto. Desafortunadamente, les tocaba soportar unas noches lunares de dos semanas que congelan hasta el alma. Aunque hoy duermen en silencio, nos dejaron ver cómo late el corazón de nuestro satélite natural algo que nos emociona a todos.',
    discoveries: 'Demostraron mediante sismología que la Luna posee una estructura diferenciada en corteza, manto y núcleo, y midieron el flujo de calor interno que aún conserva el satélite. Asimismo, analizaron su tenue atmósfera de gases nobles y su interacción directa con el viento solar a lo largo de varios años.',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/02/as12-46-6789-alsep.jpg',
    color: 'moon'
  },
  {
    id: 'surveyor-1', name: 'Surveyor 1', world: 'Luna', mark: 'S1',
    officialName: 'Surveyor 1, primera nave de la serie Surveyor.',
    launch: '30 de mayo de 1966 (14:41:01 UTC), Complejo 36A, Cabo Cañaveral, Florida; cohete Atlas-Centaur.',
    end: '7 de enero de 1967. Aunque su misión principal concluyó con éxito a mediados de julio de 1966 tras enviar miles de imágenes, la NASA mantuvo contacto intermitente y realizó pruebas de ingeniería hasta esa fecha, cuando se recibió la última transmisión antes de dar por terminada la vida útil de la sonda.',
    purpose: 'Ser la primera sonda estadounidense en realizar un alunizaje suave y controlado en la superficie lunar.',
    endReason: 'Su cese no se debió a un accidente o choque destructivo, sino al agotamiento definitivo de sus sistemas de energía y componentes internos. La sonda operaba con baterías recargadas por paneles solares que sufrían enormemente bajo las extremas y prolongadas noches lunares (donde las temperaturas caen drásticamente). Tras sobrevivir varios meses y superar con creces su expectativa de vida operativa de un mes, las comunicaciones se perdieron de manera definitiva en enero de 1967.',
    finalPlace: 'Se encuentra ubicado en el Oceanus Procellarum (Océano de las Tormentas), específicamente en el interior de una antigua formación craterizada llamada Flamsteed P (dentro del cráter Flamsteed).',
    nasaUrl: 'https://science.nasa.gov/mission/surveyor-1/',
    story: 'Antes de mandar personas a nuestro satélite, los científicos necesitaban saber si el suelo no era un peligro. Por eso lanzaron en 1966 al Surveyor 1, una simpática araña de metal que logró el primer alunizaje suave en la Luna este mandó miles de fotos a la Tierra demostrando que el terreno era totalmente firme y seguro, lo más increíble y divertido es que con la poca gravedad que hay allí cada uno de nosotros podría saltar como un superhéroe sin esfuerzo, este equipo dejó de funcionar porque las baterías no resistieron el frío de las noches lunares, más helado que la Antártida, pero quedó para siempre en el Océano de las Tormentas.',
    discoveries: 'Validó con absoluto éxito la tecnología de alunizaje suave y demostró que la superficie lunar era mecánicamente capaz de soportar el peso de naves y futuros astronautas. Además, transmitió más de 11,000 imágenes detalladas del terreno, disipando el temor de que el módulo se hundiera en polvo profundo.',
    image: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia02/pia02976/PIA02976.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
    color: 'moon'
  },
  {
    id: 'sojourner', name: 'Sojourner (Mars Pathfinder)', world: 'Marte', mark: 'SP',
    officialName: 'Sojourner (el vehículo principal de la misión Mars Pathfinder de la NASA). Fue el primer rover planetario en operar con éxito en la superficie de otro mundo.',
    launch: '4 de diciembre de 1996 (a las 06:58:07 UTC) desde el Complejo de Lanzamiento 17B en Cabo Cañaveral, Florida, a bordo de un cohete Delta II.',
    end: '27 de septiembre de 1997 fue el día en que se recibió la última transmisión de datos desde la estación base (Mars Pathfinder). Aunque el rover continuaba funcional, la misión se dio oficialmente por concluida el 10 de marzo de 1998 tras agotar los intentos de reanudar el contacto.',
    purpose: 'Demostrar la viabilidad tecnológica de un sistema de bajo costo para aterrizar en Marte y desplegar un vehículo móvil autónomo.',
    endReason: 'El cese no se debió a una falla mecánica directa del rover, sino al colapso de la batería principal de la estación base (el lander). El Sojourner dependía enteramente del módulo de aterrizaje para transmitir sus datos a la Tierra. Tras múltiples ciclos de carga y descarga durante el crudo invierno marciano, la batería falló, impidiendo la comunicación y dejando los componentes sin la energía necesaria para sobrevivir a las bajas temperaturas nocturnas.',
    finalPlace: 'Se encuentra inmóvil en una llanura de inundación de Marte conocida como Ares Vallis, dentro de la región de Chryse Planitia.',
    nasaUrl: 'https://science.nasa.gov/mission/mars-pathfinder/',
    story: 'Conozcamos al abuelo de los rovers originado en 1997, el pequeño Sojourner llegó al planeta Marte montado sobre seis ruedas para explorar el suelo rojo este contaba con una misión muy valiosa la cual era demostrar que podíamos manejar robots a distancia usando únicamente los rayos del Sol, es gracioso pensar que andaba por un mundo donde está el Monte Olimpo un volcán casi tres veces más alto que el Everest sin embargo este llego a su fin cuando su estación base en Marte se quedó sin batería de tal manera que el simpático carrito se durmió para siempre en Ares Vallis.',
    discoveries: 'Probó con éxito el primer sistema de movilidad autónoma (rocker-bogie) en otro mundo. Su espectrómetro analizó rocas marcianas con composiciones similares a la andesita terrestre, apuntando a procesos volcánicos e hídricos complejos, y recopiló datos clave sobre la temperatura, la presión y las propiedades magnéticas del polvo.',
    image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA01122.jpg',
    color: 'mars'
  },
  {
    id: 'spirit', name: 'Spirit (MER-A)', world: 'Marte', mark: 'A',
    officialName: 'Spirit (Designación oficial de la NASA: MER-A o Mars Exploration Rover - A).',
    launch: '10 de junio de 2003 (17:58:47 UTC), Estación de la Fuerza Espacial de Cabo Cañaveral, Florida; cohete Delta II.',
    end: 'El 22 de marzo de 2010 fue el día en que envió su última comunicación a la Tierra. Posteriormente, tras meses de intentos fallidos por restablecer el contacto, la NASA declaró oficialmente finalizada la misión el 25 de mayo de 2011.',
    purpose: 'El objetivo principal de la misión fue buscar y caracterizar una amplia variedad de rocas y suelos en Marte que contuviera pistas sobre la actividad pasada del agua.',
    endReason: 'A finales de 2009, el Spirit quedó atrapado en un banco de arena blanda conocido como «Troy». A pesar de los intensivos esfuerzos por liberarlo, la rueda delantera derecha (que ya venía fallando desde 2006) impidió la maniobra. Como consecuencia, el rover quedó estacionado en un ángulo desfavorable que le impidió inclinar sus paneles solares hacia el Sol durante el invierno marciano. Esto causó una severa pérdida de energía y el congelamiento crítico de sus sistemas internos, interrumpiendo permanentemente el contacto.',
    finalPlace: 'Se encuentra ubicado en Troy, al pie de las colinas Columbia (Columbia Hills), dentro del cráter Gusev.',
    nasaUrl: 'https://science.nasa.gov/mission/mer-spirit/',
    story: 'Este valiente explorador de acero llamado Spirit viajó en 2003 para buscar pistas y ver si el planeta Marte tuvo ríos o lagos en un pasado muy lejano, este querido amigo recorrió medio terreno hasta que un día se metió en una trampa de arena blanda donde una rueda se le trabó y no pudo captar los rayos del Sol por eso durante el invierno marciano apagó sus sistemas dejándonos una tremenda lección de aguante en el cráter Gusev.',
    discoveries: 'Halló pistas de que Marte tuvo agua caliente en el pasado: en las colinas Columbia encontró rocas alteradas por agua, con minerales como la goethita, y cerca de la formación Home Plate y en un suelo removido por una de sus ruedas descubrió depósitos de sílice casi pura, señal de antiguos manantiales termales o fumarolas. También detectó carbonatos en un afloramiento llamado Comanche, un tipo de roca que se forma en ambientes con agua poco ácida.',
    image: 'https://www.nasa.gov/wp-content/uploads/2023/03/141613main_image_feature_497_ys_full.jpg',
    color: 'mars'
  },
  {
    id: 'opportunity', name: 'Opportunity (MER-B)', world: 'Marte', mark: 'B',
    officialName: 'Opportunity (Designación oficial de la NASA: MER-B o Mars Exploration Rover - B, gemelo del Spirit).',
    launch: '7 de julio de 2003 (03:18 UTC), Estación de la Fuerza Espacial de Cabo Cañaveral, Florida; cohete Delta II Heavy.',
    end: 'El 10 de junio de 2018 fue el día en que envió su última comunicación a la Tierra. La NASA declaró finalizada la misión el 13 de febrero de 2019.',
    purpose: 'Al igual que su hermano Spirit, su objetivo principal era buscar y caracterizar una amplia variedad de rocas y suelos en Marte para buscar pruebas de la actividad pasada del agua líquida.',
    endReason: 'A mediados de 2018, una intensa tormenta global de polvo en Marte bloqueó por completo la luz solar en la región de Perseverance Valley. Como el Opportunity dependía exclusivamente de energía solar, la falta de luz hizo que entrara en modo de bajo consumo y se quedara sin energía. Se presume que las bajas temperaturas extremas de la noche marciana, combinadas con una capa de polvo que cubrió sus paneles, provocaron fallas críticas internas de las cuales ya no pudo recuperarse, a pesar de que la NASA envió más de mil señales de radio intentando reactivarlo.',
    finalPlace: 'Se encuentra ubicado en Perseverance Valley, en el borde interior del gigantesco cráter Endeavour (en la región de Meridiani Planum).',
    nasaUrl: 'https://science.nasa.gov/mission/mer-opportunity/',
    story: 'Le pidieron que trabajara solo tres meses pero el rover Opportunity se quedó explorando Marte durante catorce años enteros este arduo viaje fue con la misión de confirmar si de verdad existió agua líquida por los alrededores y vaya que encontró pruebas en las rocas del planeta rojo, algo bastante tierno es que a veces pasaban remolinos de viento locos que le limpiaban los paneles solares de la nada hasta que en 2018 una tormenta global gigante tapó el sol por completo y lo hizo dormir ganándose el apodo del robot más viajero.',
    discoveries: 'Encontró pruebas de que en Meridiani Planum hubo agua líquida y salada en el pasado: rocas ricas en sulfatos y pequeñas esferas de hematita, los llamados arándanos marcianos, formadas en presencia de agua. En 2005 identificó Heat Shield Rock, el primer meteorito de hierro hallado en otro planeta, y en el borde del cráter Endeavour descubrió vetas de yeso y arcillas, señales de agua menos ácida que la de sus primeros hallazgos.',
    image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA07372.jpg',
    color: 'mars'
  },
  {
    id: 'insight', name: 'InSight Lander', world: 'Marte', mark: 'I',
    officialName: 'InSight (acrónimo de Interior Exploration using Seismic Investigations, Geodesy and Heat Transport; designación del programa: Discovery 12).',
    launch: '5 de mayo de 2018 (a las 11:05:01 UTC) desde el Complejo de Lanzamiento Espacial 3E (SLC-3E) de la Base de la Fuerza Espacial Vandenberg, en California, a bordo de un cohete Atlas V-401. (Aterrizó en Marte el 26 de noviembre de 2018)',
    end: '15 de diciembre de 2022 fue el día en que envió su última comunicación a la Tierra. Tras dos intentos fallidos consecutivos de establecer contacto, la NASA declaró oficialmente finalizada la misión el 21 de diciembre de 2022.',
    purpose: 'A diferencia de los rovers anteriores que estudiaron la superficie y el historial de agua, InSight fue una estación geofísica fija diseñada para tomar los "signos vitales" del interior profundo de Marte y comprender cómo se formaron y evolucionaron los planetas rocosos (como la Tierra). ',
    endReason: 'Su cese se debió al agotamiento gradual de sus baterías por la acumulación de polvo marciano en sus paneles solares. Durante más de cuatro años en la superficie (más del doble de su misión primaria de dos años), el polvo fino se fue depositando sobre las celdas solares sin que ocurrieran remolinos de viento (dust devils) lo suficientemente fuertes cerca del módulo para limpiarlas. Al final de 2022, la generación de energía cayó a una fracción mínima de su capacidad inicial, provocando que el vehículo entrara en un estado conocido como "dead bus" (sin energía suficiente para mantener los sistemas encendidos ni responder a señales de radio).',
    finalPlace: 'Se encuentra estacionado en una extensa y plana llanura volcánica llamada Elysium Planitia, justo al norte del ecuador marciano.',
    nasaUrl: 'https://science.nasa.gov/mission/insight/',
    story: 'Imagínate ser un doctor espacial y ponerle un estetoscopio gigante al planeta Marte para escuchar sus latidos, eso fue lo que hizo el InSight Lander en 2018 este desplegó un súper oído para detectar cientos de temblores y caídas de meteoritos en el suelo marciano. Es impresionante saber que un temblor allá puede hacer vibrar la superficie durante horas enteras cuando eso en la tierra sería devastador. Al final, el polvo del desierto fue cubriendo poquito a poco sus paneles hasta dejarlo sin energía en Elysium Planitia completando su misión de contarnos qué hay oculto en las entrañas de este mundo.',
    discoveries: 'Reveló la estructura interna profunda de Marte al medir con precisión el grosor de su corteza, el tamaño y estado líquido de su núcleo y el perfil de su manto. Registró más de 1,300 sismos marcianos e impactos de meteoritos en tiempo real, demostrando que el planeta sigue geológicamente activo.',
    image: 'https://science.nasa.gov/wp-content/uploads/2024/03/pia22876.png',
    color: 'mars'
  },
  {
    id: 'ingenuity', name: 'Ingenuity Helicopter', world: 'Marte', mark: 'H',
    officialName: 'Ingenuity (también conocido por su apodo Ginny).',
    launch: '30 de julio de 2020 (a las 11:50 UTC) desde la Estación de la Fuerza Espacial de Cabo Cañaveral en Florida, a bordo de un cohete Atlas V (viajó acoplado en la panza del rover Perseverance y aterrizó en Marte el 18 de febrero de 2021).',
    end: '25 de enero de 2024 fue el día en que la NASA anunció oficialmente el fin de la misión tras confirmar daños irreparables en sus palas.',
    purpose: 'Ser una demostración tecnológica experimental para probar por primera vez la viabilidad del vuelo propulsado y controlado en la atmósfera extremadamente tenue de otro planeta (equivalente a apenas el 1% de la densidad de la Tierra). Aunque su diseño original contemplaba realizar únicamente 5 vuelos de prueba en un mes, su enorme éxito hizo que la misión se extendiera durante casi tres años para servir como explorador aéreo adelantado del rover Perseverance.',
    endReason: 'Durante su 72.º vuelo, el helicóptero sobrevoló un terreno plano y muy uniforme que carecía de elementos visuales distintivos (featureless terrain). Esto confundió el sistema de navegación autónomo del aparato, provocando un aterrizaje brusco. Como resultado del impacto, al menos una de las palas del rotor principal sufrió daños estructurales graves, lo que imposibilitó permanentemente que volviera a generar sustentación y lo dejó incapacitado para volar.',
    finalPlace: 'Se encuentra inmóvil en un área apodada Valinor Hills, ubicada en el sector de Neretva Vallis, dentro del cráter Jezero en Marte.',
    nasaUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
    story: '¿Quién dijo que no se puede volar en otro planeta? El Ingenuity Helicopter demostró lo contrario al hacer 72 vuelos históricos sobre el suelo de Marte, su trabajo era ayudar al rover Perseverance a buscar los caminos más seguros desde el aire usando sus propias alas y como el aire marciano es bastante delgado las aspas tenían que girar a una velocidad impresionante para mantenerse arriba. Lamentablemente durante un aterrizaje bastante duro le rompió las hélices en 2024, terminando su gran aventura quedando para siempre en el cráter Jezero.',
    discoveries: 'Hizo historia al realizar el primer vuelo propulsado, controlado y autónomo en la atmósfera extremadamente tenue de otro planeta. Validó tecnologías aeronáuticas extremas y abrió la era de la exploración aérea planetaria como explorador visual complementario para los rovers.',
    image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/PIA26237.jpg',
    color: 'mars'
  },
  {
    id: 'pioneer-venus-2', name: 'Pioneer Venus 2 (Sondas)', world: 'Venus', mark: 'PV',
    officialName: 'Pioneer Venus Multiprobe (oficialmente Pioneer 13 o Pioneer Venus 2).',
    launch: '8 de agosto de 1978 (a las 07:33 UTC) desde el Complejo de Lanzamiento 36A en Cabo Cañaveral, Florida, a bordo de un cohete Atlas-Centaur.',
    end: '9 de diciembre de 1978, el mismo día en que las cinco piezas ingresaron de forma escalonada a la atmósfera de Venus y transmitieron datos hasta desintegrarse o impactar contra la superficie (las últimas transmisiones cesaron cerca de las 20:55 UTC de ese día).',
    purpose: 'Estudiar en profundidad la estructura, la composición química, la dinámica y el clima de la compleja atmósfera de Venus desde las capas altas hasta la superficie, complementando la información del orbitador gemelo (Pioneer Venus Orbiter)',
    endReason: 'Fin de misión programado por diseño. Ninguna de las sondas ni el bus poseía sistemas de paracaídas de aterrizaje a baja altura ni escudos térmicos permanentes para soportar la presión y temperatura de la superficie (excepto la sonda grande que usó un paracaídas parcial en sus capas altas). Entraron a la atmósfera a velocidades hipersónicas y terminaron destruyéndose por la intensa fricción térmica, la presión extrema y el calor antes o justo al momento del impacto.',
    finalPlace: 'A diferencia de las naves diseñadas para posarse suavemente, sus cuatro sondas atmosféricas impactaron directamente contra la superficie del planeta tras descender durante casi una hora. Por su parte, la nave principal (Bus) se desintegró en la atmósfera superior a unos 110 kilómetros de altitud',
    nasaUrl: 'https://science.nasa.gov/mission/pioneer-venus-2/',
    story: 'Imagínate una nave que se parte en cinco piezas justo antes de llegar a su destino. Eso hizo el Pioneer Venus 2 en 1978: soltó cuatro sondas, una grande y tres pequeñas, que se lanzaron hacia Venus desde distintos lados del planeta. Ninguna estaba diseñada para sobrevivir a la caída, pero todas midieron la temperatura, la presión y las nubes de ácido mientras bajaban durante casi una hora. Lo más sorprendente es que una de ellas, la sonda del Día, sobrevivió al golpe y siguió mandando señales desde la superficie por más de una hora, aun con un calor capaz de derretir el plomo. Mientras tanto, la nave principal se desintegró en las capas altas de la atmósfera, cerrando una aventura que nos enseñó cómo funciona el planeta más caliente del sistema solar.',
    discoveries: 'Investigó simultáneamente desde cuatro puntos la estructura térmica y la composición química de la densa atmósfera de Venus. Confirmó la existencia de tres capas de nubes de ácido sulfúrico y aportó los datos clave que ayudaron a comprender el extremo efecto invernadero desbocado del planeta.',
    image: 'https://images-assets.nasa.gov/image/ARC-1978-AC78-0238/ARC-1978-AC78-0238~orig.jpg',
    color: 'venus'
  },
  {
    id: 'magellan', name: 'Magellan', world: 'Venus', mark: 'M',
    officialName: 'Magellan (también conocida como Venus Radar Mapper).',
    launch: '4 de mayo de 1989 (a las 18:46:59 UTC) desde el Complejo de Lanzamiento 39B en el Centro Espacial Kennedy, Florida, a bordo del transbordador espacial Atlantis (durante la misión STS-30) y propulsada posteriormente fuera de la órbita terrestre mediante un cohete de etapa superior IUS.',
    end: '12 de octubre de 1994. Tras completar con éxito su fase principal de mapeo y experimentos científicos adicionales de aerofrenado, la sonda fue guiada intencionalmente a descender y desintegrarse en la atmósfera densa de Venus para recopilar datos finales sobre su densidad y composición.',
    purpose: 'Ser la primera misión de mapeo por radar de la NASA dedicada a Venus, con el fin de revelar los secretos ocultos bajo la densa y perpetua capa de nubes del planeta.',
    endReason: 'Fin de misión programado y controlado por la NASA. Hacia el final de su vida operativa, los ingenieros utilizaron el combustible restante para ejecutar un experimento pionero de aerofrenado (aerobraking), sumergiendo deliberadamente la sonda en las capas superiores de la atmósfera venusiana para circularizar su órbita. Una vez agotados los recursos científicos y completados los objetivos, la misión finalizó oficialmente cuando la nave se sumergió y se desintegró en la atmósfera de Venus en octubre de 1994.',
    finalPlace: 'Se desintegró y fundió en la atmósfera superior de Venus, por lo que sus restos microscópicos se dispersaron en la densa atmósfera y la superficie del planeta. Las coordenadas aproximadas del punto de impacto final de sus fragmentos en la superficie se estiman en la región de Atla Regio',
    nasaUrl: 'https://science.nasa.gov/mission/magellan/',
    story: 'Como el planeta Venus tiene unas nubes tan densas que no lo dejan ver por fuera, mandamos a la nave Magellan en 1989 con un súper radar para que dibujara sus mapas. Gracias a eso descubrimos que este vecino infernal está lleno de volcanes gigantes y ríos de lava seca increíbles. Además, este cuerpo celeste tiene su gracia: gira al revés que nosotros y un solo día allá dura más que un año entero. Cuando terminó su trabajo, la mandaron a dar un clavado en la atmósfera para desintegrarse brillando como una estrella fugaz.',
    discoveries: 'Mapeó mediante radar más del 98% de la superficie de Venus a través de sus nubes impenetrables, revelando un mundo dominado por llanuras volcánicas, estructuras tectónicas únicas llamadas coronas y una renovación global de su superficie por vulcanismo hace cientos de millones de años.',
    image: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia18/pia18175/PIA18175.jpg',
    color: 'venus'
  },
  {
    id: 'messenger', name: 'MESSENGER', world: 'Mercurio', mark: 'ME',
    officialName: 'MESSENGER (acrónimo de MErcury Surface, Space ENvironment, GEochemistry, and Ranging).',
    launch: '3 de agosto de 2004 (a las 06:15:19 UTC) desde el Complejo de Lanzamiento 17B en Cabo Cañaveral, Florida, a bordo de un cohete Delta II.',
    end: '30 de abril de 2015. Tras agotar por completo el propergol (combustible) que utilizaba para mantener su órbita y combatir la inmensa atracción gravitacional del Sol, la sonda se precipitó de forma controlada contra la superficie de Mercurio.',
    purpose: 'Ser la primera misión espacial en entrar en órbita alrededor de Mercurio y realizar un estudio global y exhaustivo del planeta más cercano al Sol.',
    endReason: 'Fin de misión programado por el agotamiento total de combustible. Durante sus más de cuatro años en órbita (superando con creces su misión primaria de un año), la nave utilizó sus propulsores para corregir constantemente su altitud. Al quedarse sin propulsor para contrarrestar la gravedad solar y los efectos de perturbación orbital, la sonda colisionó inevitablemente contra la superficie a más de 14,000 kilómetros por hora.',
    finalPlace: 'Se estrelló en la región norteña de Mercurio, en la planicie volcánica de Shakespeare Planitia (cerca del cráter Janáček).',
    nasaUrl: 'https://science.nasa.gov/mission/messenger/',
    story: 'Imagínate viajar cerquísima del Sol sin derretirte en el intento, eso fue lo que hizo la sonda MESSENGER en 2004 para estudiar de cerca el pequeño y rocoso planeta Mercurio al cual le tomó fotos a miles de cráteres y descubrió algo rarísimo y de película hay hielo escondido en los rincones oscuros de los polos de este mundo tan caluroso, pasa que como este cuerpo celeste no tiene aire, un lado se quema de calor y el otro se congela de manera masiva y desafortunadamente cuando se quedó sin combustible en 2015, se estrelló dejando un cráter nuevo en la superficie del planeta.',
    discoveries: 'Completó el primer mapeo global de Mercurio, confirmando la presencia sorprendente de depósitos de hielo de agua y compuestos orgánicos en los cráteres permanentemente sombreados de sus polos. También descubrió evidencias de antiguo vulcanismo explosivo y reveló que el planeta se ha contraído significativamente al enfriarse.',
    image: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia18/pia18145/PIA18145.jpg',
    color: 'mercury'
  },
  {
    id: 'deep-impact', name: 'Cometa 9P/Tempel 1', world: 'Cometa 9P', mark: 'DI',
    officialName: '9P/Tempel 1 (es un cometa periódico del sistema solar descubierto por el astrónomo Ernst Wilhelm Tempel en 1867, y que sirvió como el "dispositivo" o cuerpo natural estudiado de forma directa por misiones espaciales humanas).',
    launch: 'Lanzada el 12 de enero de 2005 a bordo de un cohete Delta II (el impacto controlado ocurrió el 4 de julio de 2005).',
    end: 'No aplica como tal para el cometa, ya que es un cuerpo celeste natural que continúa su órbita alrededor del Sol. Sin embargo, las naves que lo estudiaron concluyeron sus misiones: Deep Impact finalizó en 2013 tras perder contacto, y Stardust finalizó en 2011 tras agotar su combustible después de sobrevolar el cometa.',
    purpose: 'Estudiar la composición interna, la estructura y la morfología del núcleo de un cometa por primera vez en la historia mediante la colisión controlada de un proyectil de cobre (de unos 370 kg) lanzado por la misión Deep Impact.',
    endReason: 'Al tratarse de un cometa natural, no cesa su actividad, sino que sigue orbitando el Sol periódicamente (completa una vuelta cada ~5.5 años). Las naves artificiales que lo visitaron terminaron sus operaciones por el cumplimiento exitoso de sus objetivos científicos y el posterior agotamiento de combustible y sistemas de comunicación.',
    finalPlace: 'El núcleo del cometa 9P/Tempel 1 sigue activo y viajando por el espacio en su órbita elíptica alrededor del Sol',
    nasaUrl: 'https://science-nasa-gov.translate.goog/solar-system/comets/9p-tempel-1/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc',
    story: '¿Quieres ver qué pasa si le tiras una bala de cobre gigante a un viajero congelado? Eso hicieron los científicos en 2005 con el Deep Impact, un impactor que se separó de su nave madre para chocar contra el Cometa 9P/Tempel 1. La idea era hacer un cráter enorme para echarle un ojo al polvo viejísimo guardado en el núcleo de este cuerpo celeste desde el origen del sistema solar estos cuerpos son bolas de nieve sucia volando por el espacio y como podrán imaginarse el choque fue un espectáculo. El explorador se volvió polvo cósmico al instante, volviéndose parte del cometa para siempre.',
    discoveries: 'Mostró que el núcleo del cometa es muy poroso y está hecho de un polvo finísimo, con más polvo que hielo. En el material que salió disparado por el impacto se detectaron hielo de agua, arcillas, carbonatos y compuestos orgánicos. La nube de polvo ocultó el cráter, así que fue la nave Stardust la que lo fotografió años después, en 2011.',
    image: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia13/pia13857/PIA13857.jpg',
    color: 'comet'
  },
  {
    id: 'galileo', name: 'Galileo (Orbiter)', world: 'Júpiter', mark: 'G',
    officialName: 'Galileo (compuesto por el orbitador principal y una sonda atmosférica de descenso).',
    launch: '18 de octubre de 1989 (a las 12:53:40 UTC) desde el Complejo de Lanzamiento 39B en el Centro Espacial Kennedy, Florida, a bordo del transbordador espacial Atlantis (durante la misión STS-34) y propulsada posteriormente hacia Júpiter mediante una etapa superior inercial (IUS).',
    end: '21 de septiembre de 2003. Tras más de 14 años en el espacio y para evitar una posible contaminación biológica futura de la luna Europa (la cual podría albergar un océano subterráneo apto para la vida), la NASA dirigió intencionalmente a la sonda para que se desintegrara en la atmósfera de Júpiter.',
    purpose: 'Estudiar de forma exhaustiva y a largo plazo el sistema joviano (el planeta Júpiter, su intensa magnetosfera, sus anillos y sus lunas principales).',
    endReason: 'Fin de misión programado y controlado por la NASA. Hacia el año 2003, la nave ya había agotado prácticamente todo su combustible de control de actitud y sus instrumentos científicos sufrían una grave degradación debido a los intensos cinturones de radiación de Júpiter. Para garantizar que la sonda fuera destruida de forma segura sin riesgo de estrellarse accidentalmente contra la luna Europa en misiones futuras, se ejecutó una inmolación controlada en la atmósfera joviana.',
    finalPlace: 'Se desintegró y fundió en las capas profundas de la densa atmósfera de Júpiter el 21 de septiembre de 2003. Sus restos vaporizados y microscópicos pasaron a formar parte del propio gigante gaseoso.',
    nasaUrl: 'https://science.nasa.gov/mission/galileo/',
    story: 'Una reina magnifica la nave Galileo, que llegó en 1995 a echar chisme en los dominios del gigantesco planeta Júpiter y sus lunas que por si no lo sabían tiene más de noventa lunas conocidas esta reina encontró pistas de que debajo de la costra de hielo de la luna Europa hay un océano inmenso donde podría haber vida. Para que lo notes, este colosal cuerpo celeste es tan monstruosamente grande que la Tierra cabría más de mil veces adentro pero trágicamente hacia el 2003, para evitar que la nave cayera por accidente en las lunas, la mandaron a disolverse dentro de las coloridas nubes del planeta como un rayo brillante.',
    discoveries: 'Descubrió la existencia de vastos océanos líquidos subterráneos bajo las cortezas heladas de las lunas jovianas (especialmente Europa), fotografió erupciones volcánicas activas en la luna Ío impulsadas por fuerzas de marea, y midió directamente la dinámica extrema de la atmósfera y la intensa radiación de Júpiter.',
    image: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia18/pia18176/PIA18176.jpg',
    color: 'jupiter'
  }
];

// Copy and placeholders not found in the database can be edited here.
const pageContent = {
  launchStory: 'Eres un joven curioso que quiere aprender de unas reliquias bastante importantes que aunque permanecen sin vida nos ofrecieron una enorme ayuda para el descubrimiento sobre el espacio a su vez unos amigos que están en nuestro sistema solar llamados planetas que ofrecen muchos datos interesantes con esto deseamos que disfrutes este recorrido a través de todo lo que tenemos para ofrecerte mientras juegas y te diviertes con muchas curiosidades que te harán emocionarte.',
  launchTrail: [
    
  ],
  gamesIntro: '¡La exploracion tambien es un juego!, descubre las misiones espaciales, supera retos y demmuestra cuanto sabes sobre los artefactos que han dejado huella en nuestro sistema solar.',
  gameModules: [
  {
    title: 'Exploración espacial',
    description: 'Pon a prueba tus conocimientos sobre las misiones espaciales, descubre datos interesantes y explora los secretos del universo mediante este juego interactivo.',
    link: 'https://sircum123.github.io/Game-/',
    label: 'Jugar ahora'
  }
],
  teamIntro: 'En corvus te quisimos presentar una nueva manera de divertirte y conocer los rastros de nuestro sistema solar.',
  teamMembers: ['Josue Mojica', 'Valentina Diaz', 'Adrian Alvarez', 'Isaac Zurita']
};

const destinations = [
  { name: 'Todos', icon: '✳', color: '#f0c56c', detail: 'Una colección de huellas que cruzan el sistema solar.' },
  { name: 'Luna', icon: '☾', color: '#beb5ee', detail: 'Misiones que dejaron equipos y experimentos en la superficie lunar.' },
  { name: 'Marte', icon: '♂', color: '#ef8067', detail: 'Exploradoras robóticas que hicieron camino por Marte.' },
  { name: 'Venus', icon: '♀', color: '#f1aa77', detail: 'Equipos que se aventuraron entre las nubes y la superficie venusiana.' },
  { name: 'Mercurio', icon: '☿', color: '#94bdc3', detail: 'Una viajera dejó una huella en el planeta más cercano al Sol.' },
  { name: 'Cometa 9P', icon: '☄', color: '#c1a6ec', detail: 'Una misión visitó el núcleo de un cometa.' },
  { name: 'Júpiter', icon: '♃', color: '#e1b27e', detail: 'Una exploradora viajó hasta el planeta gigante.' }
];
let selectedDestination = 'Todos';
let searchTerm = '';
const tabHost = document.querySelector('#destinationTabs');
const missionGrid = document.querySelector('#missionGrid');
const banner = document.querySelector('#destinationBanner');

function renderMissions() {
  const active = destinations.find(d => d.name === selectedDestination) || destinations[0];
  tabHost.innerHTML = destinations.map(d => `<button class="destination-tab" type="button" data-destination="${d.name}" aria-pressed="${d.name === selectedDestination}" style="--planet-color:${d.color}"><span>${d.icon}</span>${d.name}<small>${d.name === 'Todos' ? missions.length : missions.filter(m => m.world === d.name).length}</small></button>`).join('');
  banner.innerHTML = `<div class="banner-world" aria-hidden="true">${active.icon}</div><div><span class="mini-label">DESTINO SELECCIONADO</span><h3>${selectedDestination === 'Todos' ? 'Sistema solar' : selectedDestination}</h3><p>${active.detail}</p></div><span class="banner-count">${missions.filter(m => selectedDestination === 'Todos' || m.world === selectedDestination).length.toString().padStart(2, '0')} <small>HUELLAS</small></span>`;
  const records = missions.filter(m => (selectedDestination === 'Todos' || m.world === selectedDestination) && `${m.name} ${m.world}`.toLocaleLowerCase('es').includes(searchTerm.toLocaleLowerCase('es')));
  missionGrid.innerHTML = records.length ? records.map(m => {
    const complete = Boolean(m.launch);
    return `<button class="mission-card ${m.color}" type="button" data-mission="${m.id}"><span class="card-orbit" aria-hidden="true"></span><span class="card-top"><span class="mission-mark">${m.mark}</span><span class="mission-world">${m.world}</span></span><span class="mission-name">${m.name}</span><span class="card-bottom"><span class="record-status ${complete ? 'ready' : 'empty'}">${complete ? 'REGISTRO EN BASE' : 'ESPACIO PARA COMPLETAR'}</span><span class="card-open" aria-hidden="true">↗</span></span></button>`;
  }).join('') : '<p class="no-results">No hay misiones con ese nombre. Prueba otra búsqueda.</p>';
}

function valueOrEdit(value) {
  return value ? `<span>${value}</span>` : '<span class="field-empty">[EDITAR ESTE CAMPO EN app.js]</span>';
}

function openMission(id) {
  const m = missions.find(item => item.id === id);
  if (!m) return;
  const dialogContent = document.querySelector('#missionDetail');
  const techRows = [
    ['Nombre del dispositivo / designación oficial', m.officialName],
    ['Fecha de lanzamiento', m.launch],
    ['Fecha de cese de operaciones', m.end],
    ['Propósito principal de la misión', m.purpose],
    ['Razón de cese de operaciones', m.endReason],
    ['Lugar de descanso final', m.finalPlace],
    ['Imagen representativa', m.image ? `<img class="mission-image" src="${m.image}" alt="Imagen representativa de ${m.name}">` : ''],
    ['Enlace oficial de NASA', m.nasaUrl ? `<a class="source-link" href="${m.nasaUrl}" target="_blank" rel="noopener">Abrir recurso de NASA ↗</a>` : '']
  ];
  const introName = m.id === 'spirit' ? 'Conozcamos al' : 'Conozcamos';
  dialogContent.innerHTML = `<div class="detail-cover ${m.color}"><span class="detail-world">${m.world} · REGISTRO DE MISIÓN</span><span class="detail-glyph" aria-hidden="true">${destinations.find(d => d.name === m.world)?.icon || '✳'}</span><h2 id="dialogTitle">${introName} ${m.name}</h2><p>${m.finalPlace || '[EDITAR: ubicación exacta en app.js]'}</p></div><div class="detail-body"><div class="detail-story"><span class="mini-label">HISTORIA PARA EXPLORADORES</span><p>${m.story || '<span class="field-empty">[EDITAR: escribe aquí la historia de esta misión con la información que recopiles.]</span>'}</p></div><div class="detail-discoveries"><span class="mini-label">¿QUÉ NOS DIO?</span>${m.discoveries ? `<p>${m.discoveries}</p>` : '<p class="field-empty">[EDITAR: agrega descubrimientos o datos de la misión.]</p>'}</div><h3 class="tech-title">Para saber más…</h3><dl class="tech-list">${techRows.map(([label, value]) => `<div><dt>${label}</dt><dd>${valueOrEdit(value)}</dd></div>`).join('')}</dl></div>`;
  document.querySelector('#missionDialog').showModal();
}

tabHost.addEventListener('click', event => {
  const button = event.target.closest('[data-destination]');
  if (!button) return;
  selectedDestination = button.dataset.destination;
  renderMissions();
});
missionGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-mission]');
  if (button) openMission(button.dataset.mission);
});
const searchInput = document.querySelector('#searchInput');
const clearSearch = document.querySelector('#clearSearch');
searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value;
  clearSearch.hidden = !searchTerm;
  renderMissions();
});
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  clearSearch.hidden = true;
  renderMissions();
  searchInput.focus();
});
document.querySelector('#dialogClose').addEventListener('click', () => document.querySelector('#missionDialog').close());
document.querySelector('#missionDialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

// These slots are intentionally empty content, ready for collaborators' game modules.
document.querySelector('#launchStory').textContent = pageContent.launchStory;
document.querySelector('#storyTrail').innerHTML = pageContent.launchTrail.map(item => `<article class="trail-stop"><span>${item.date}</span><i></i><b>${item.title}</b><p>${item.note}</p></article>`).join('');
document.querySelector('#gamesIntro').textContent = pageContent.gamesIntro;
document.querySelector('#teamCopy').textContent = pageContent.teamIntro;
document.querySelector('#teamList').innerHTML = pageContent.teamMembers.map(person => `<span>${person}</span>`).join('');
const modules = document.querySelector('#gameModules');
modules.innerHTML = pageContent.gameModules.length ? pageContent.gameModules.map(game => `<article class="game-module"><span class="module-star">✳</span><span class="mini-label">ACTIVIDAD INTERACTIVA</span><h3>${game.title}</h3><p>${game.description}</p>${game.link ? `<a href="${game.link}" target="_blank" rel="noopener" class="module-link">${game.label || 'Abrir juego'} ↗</a>` : ''}</article>`).join('') : `<article class="module-empty"><div class="empty-orbit" aria-hidden="true"><span>+</span></div><div><span class="mini-label">ESPACIO ABIERTO</span><h3>Tu juego puede vivir aquí.</h3><p>Este apartado está preparado para integrar los juegos del equipo. Agrega título, descripción y enlace en <code>gameModules</code>, dentro de <code>app.js</code>.</p></div><span class="empty-index">01 / ∞</span></article>`;
// JUEGO DE MESA: pega aquí el enlace de Google Drive del archivo (PDF, ZIP, etc.).
// Sirve el enlace de "Compartir" (https://drive.google.com/file/d/ID/view...).
// En Drive: clic derecho > Compartir > "Cualquier persona con el enlace" > Copiar enlace.
const boardGame = {
  driveLink: 'https://drive.google.com/drive/folders/1TDacXMSjlUCOWD-7mw9E-3znonuKOvoA', // <-- PEGA AQUÍ EL ENLACE DE DRIVE
  description: 'Este juego de mesa es un recurso descargable el cual podra ser usado de manera autonoma o tambien como material de estudio para los niños de primaria, de esta manera buscamos que puedas aprender de manera ludica y a su vez entretenida para niños de 7 a 12 años.',
  kit: ['Tablero', 'Fichas', 'Tarjetas', 'Instrucciones'], // Edita o borra lo que no aplique
  buttonLabel: 'Descargar juego'
};

function driveLinks(url) {
  const clean = (url || '').trim();
  if (!clean) return null;
  const file = clean.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || clean.match(/[?&]id=([\w-]+)/);
  if (/\/folders\//.test(clean) || !file) return { download: clean, view: null }; // carpetas u otros enlaces: se abren tal cual
  return { download: `https://drive.google.com/uc?export=download&id=${file[1]}`, view: `https://drive.google.com/file/d/${file[1]}/view` };
}
(function renderBoardGame() {
  const links = driveLinks(boardGame.driveLink);
  const download = document.querySelector('#boardDownload');
  const view = document.querySelector('#boardView');
  document.querySelector('#boardDescription').textContent = boardGame.description;
  document.querySelector('#boardKit').innerHTML = boardGame.kit.map(item => `<li>${item}</li>`).join('');
  if (links) {
    download.href = links.download;
    download.firstChild.textContent = boardGame.buttonLabel + ' ';
    if (links.view) { view.href = links.view; view.hidden = false; }
  } else {
    download.setAttribute('aria-disabled', 'true');
    download.removeAttribute('target');
    download.classList.add('is-disabled');
    download.addEventListener('click', event => event.preventDefault());
    download.innerHTML = 'Enlace por agregar <span>…</span>';
    document.querySelector('#boardHint').textContent = 'ESPACIO DE CONTENIDO · PEGA EL ENLACE DE DRIVE EN boardGame.driveLink (app.js)';
  }
})();

const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
mainNav.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
});

// One scroll reveal system creates a gentle, coordinated entrance for sections.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
const progressBar = document.querySelector('#scrollProgress');
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    ticking = false;
  });
}, { passive: true });

renderMissions();
