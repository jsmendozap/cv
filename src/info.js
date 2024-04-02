import About from './pages/About'
import Home from './pages/Home'
import Interest from './pages/Interest'
import Experiences from './pages/Experiences'
import Publications from './pages/Publications'

const info = [
    {
        id: "home",
        title: "",
        subtitle: "",
        component: Home,
        info: {es: ["Sensores Remotos", "Análisis espacial", "Modelación Forestal"],
               en: ["Remote Sensing", "Spatial Analysis", "Forest Modeling"]}
    },
    {
        id: "about",
        title: {es: "Acerca de mí", en: "About me"},
        subtitle: {es: "Un breve resumen de mis fortalezas",
                     en: "A brief summary of my skills"},
        component: About,
        info: { es:
                    [
                    "¡Hola!, soy Juan Mendoza",
                    "Ingeniero Forestal, Universidad Nacional de Colombia",
                    "Poseo una sólida formación en ingeniería y ciencias de la tierra que se complementa con una amplia gama de habilidades en \
                    modelación lineal y no lineal, análisis de series de tiempo y análisis espacial utilizando herramientas como QGIS y\
                    lenguajes de programación tales como R y Python. Además, destaco por mi capacidad en el análisis de datos, la comunicación\
                    efectiva de resultados a través de la construcción de plataformas web y la pasión con la que realizo cada una de mis resposabilidades."
                    ],
                en:
                    [
                    "¡Hi!, I am Juan Mendoza",
                    "Forest Engineer, Universidad Nacional de Colombia",
                    "I have a strong engineering and geoscience background that is complemented by a wide range of skills including linear and \
                    non-linear modeling, time series analysis and spatial analysis, using tools such as QGIS and the R and Python programming languages.\
                    In adittion, I excel in data analysis and efective comunication of results through web \
                    platforms development and the passion I bring to each one of my compromises."    
                    ]}
    },
    {
        id: "interest",
        title: {es: "Intereses", en: "My Interests"},
        subtitle: {es: "Áreas de enfoque y continuo aprendizaje",
                    en: "Areas of focus and continue learning"},
        component: Interest,
        info: {es: {label: ["Sensores Remotos", "Análisis Espacial", "Modelación Forestal"],
                    text:  ["A lo largo de mi formación he cultivado un profundo interés en la aplicación de la tecnología de sensores \
                                remotos en el estudio de la dinámica forestal y climática a nivel global. La capacidad para \
                                monitoriar la evolución de estos sistemas en el espacio y en el tiempo a través de la integración de \
                                información proveniente de sensores remotos con técnicas estadísticas y de machine learning son una fuente constante de \
                                motivación en mi carrera.",
                            
                                "Mi interés en el análisis espacial se centra en la aplicación de técnicas de estadística espacial para comprender y modelar los\
                                procesos que ocurren en el espacio geográfico. Además, mi pasión se extiende a la presentación efectiva de los resultados. Considero fundamental\
                                la construcción de geovisores y otras herramientas de visualización interactiva para comunicar de manera clara y accesible los resultados\
                                a diversos públicos.",

                                "Poseo un profundo interés por comprender los procesos biológicos y ecológicos que influencia el crecimiento forestal y la acumulación de biomasa.\
                                Asimismo, estoy interesado en emplear métodos estadísticos para describir estas relaciones. Por otro lado, me apasiona la idea de explorar los últimos avances\
                                en el uso de tecnologías geoespaciales modernas como SAR y LIDAR ya que considero que estas herramientas tienen el potencial de proveer información\
                                invaluable de la dinámica compleja de los ecosistemas forestales."
                            ]
                        },
                en: {label: ["Remote Sensing", "Spatial Analysis", "Forest Modeling"],
                     text: ["Throughout my education, I have cultivated a deep interest in the application of remote sensing technology to the study of global\
                            forest and climate dynamics. The ability to monitor the evolution of these systems in space and time by integrating remote \
                            sensing information with statistical and machine learning techniques has been a constant source of motivation in my career.",
                            
                            "My interest in spatial analysis focuses on the application of spatial statistical techniques to understand and model processes\
                            occurring in geographic space. In addition, my passion extends to the effective presentation of results. I believe it is essential\
                            to develop geoviewers and other interactive visualization tools to communicate results in a clear and accessible way to different audiences.",
                            
                            "I have a profound interest in understanding the biological and ecological processes that influence forest growth and biomass accumulation, along\
                            with a keenness about employing statistical methods to describe these relationships. Furthermore, I am also interested in delve into the latest advancements in modern geospatial\
                            technologies such as SAR and LIDAR, as I believe these tools have the potential to provide valuable insights into the complex dynamics of forest ecosystems."
                        ]
                        }}
    },
    {
        id: "experiences",
        title: {es: "Experiencia Laboral", en: "Work Experience"},
        subtitle: {es: "", en: ""},
        component: Experiences,
        info: {es: [
                    {
                        id: 0, rol: "Analista de imágenes satelitales", place: "Universidad de Antioquia",
                        date: "Agosto 2023 - Diciembre 2023", city: "Medellín, Colombia", 
                        description: "Participación en el desarrollo de algoritmos para procesamiento de \
                                imágenes satelitales con fines de clasificación de coberturas utilizando \
                                técnicas de aprendizaje automático."
                    },
                    {
                        id: 1, rol: "Estudiante auxiliar", place: "Universidad Nacional de Colombia",
                        date: "Mayo 2023 - Junio 2023", city: "Medellín, Colombia", 
                        description: "Participación en el análisis de datos y generación de modelos de \
                                crecimiento para cuatro especies de árboles establecidas en el marco del \
                                proyecto 'Más bosques para Medellín'."
                    },
                    {
                        id: 2, rol: "Estudiante auxiliar", place: "Universidad Nacional de Colombia",
                        date: "Marzo 2021 - Junio 2022", city: "Medellín, Colombia", 
                        description: "Apoyo en la labor docente al ofrecer talleres de introducción al lenguage\
                                      de programación R a estudiantes de estadística I."
                    }      
                ],
               en: [
                    {
                        id: 0, rol: "Remote sensing analyst", place: "Universidad de Antioquia",
                        date: "August 2023 - December 2023", city: "Medellín, Colombia", 
                        description: "Contribution to the development of algorithms for processing satellite \
                                    imagery to classify land cover using deep learning techniques."
                    },
                    {
                        id: 1, rol: "Auxiliar student", place: "Universidad Nacional de Colombia",
                        date: "May 2023 - June 2023", city: "Medellín, Colombia", 
                        description: "Participation in the data analysis and generation of growth models for \
                                    four native tree species established as part of 'Más bosques para \
                                    Medellín' project."
                    },
                    {
                        id: 2, rol: "Auxiliar student", place: "Universidad Nacional de Colombia",
                        date: "March 2021 - June 2022", city: "Medellín, Colombia", 
                        description: "Support the teaching work to offering workshops in introduction to R\
                                      programming language for students of first level of statistics."
                    }      
               ]}
    },
    {
        id: "publications",
        title: {es: "Publicaciones", en: "Publications"},
        subtitle: {es: "", en: ""},
        component: Publications,
        info: {es: [
                    {
                        name: "Dynamics of aboveground biomass of native tree species established in degraded areas of the tropical Andes",
                        auth: "Juan Mendoza, Jorge A. Giraldo, Mauricio A. Mazo-Lopera, Juan M. Giraldo, Luis F. Osorio V.",
                        doi: "En evaluación", id: 0
                    }
                   ],
               en: [
                    {
                        name: "Dynamics of aboveground biomass of native tree species established in degraded areas of the tropical Andes",
                        auth: "Juan Mendoza, Jorge A. Giraldo, Mauricio A. Mazo-Lopera, Juan M. Giraldo, Luis F. Osorio V.",
                        doi: "In submission", id: 0
                    }
               ]
            }
    }
]

export default info;