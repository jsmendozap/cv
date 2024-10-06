import About from './pages/About'
import Education from './pages/Education'
import Interest from './pages/Interest'
import Experiences from './pages/Experiences'
import Publications from './pages/Publications'

const info = [
    {
        id: "about",
        title: {es: "Acerca de mí", en: "About me"},
        subtitle: {es: "Un breve resumen de mis fortalezas",
                     en: "A brief summary of my skills"},
        component: About,
        info: { es:
                    [
                    "¡Hola!, soy Juan Mendoza",
                    "Poseo una sólida formación en ingeniería y ciencias de la tierra que se complementa con una amplia gama de habilidades en \
                    modelación lineal y no lineal, análisis de series de tiempo y análisis espacial utilizando herramientas como QGIS y\
                    lenguajes de programación tales como R y Python. Además, destaco por mi capacidad en el análisis de datos, la comunicación\
                    efectiva de resultados a través de la construcción de plataformas web y la pasión con la que realizo cada una de mis resposabilidades."
                    ],
                en:
                    [
                    "¡Hi!, I am Juan Mendoza",
                    "I have a strong engineering and geoscience background that is complemented by a wide range of skills including linear and \
                    non-linear modeling, time series analysis and spatial analysis, using tools such as QGIS and the R and Python programming languages.\
                    In adittion, I excel in data analysis and efective comunication of results through web \
                    platforms development and the passion I bring to each one of my compromises."    
                    ]}
    },
    {
        id: "education",
        title: {es: "Educación", en: "Education"},
        subtitle: {es: "Formación profesional y complementaria",
            en: "Professional and complementary formation"},
        component: Education,
        info: {es: ["Educación formal",
                    "Ingeniero Forestal",
                    "Universidad Nacional de Colombia",
                    "Estudiante de maestria en Earth and Climate System Science",
                    "University of Hohenheim",
                    "Educación complementaria",
                    "Programa de formación habilidades en programación con énfasis en desarrollo de aplicaciones web",
                    "Universidad de Antioquia",
                    "Diplomado en inteligencia artificial",
                    "Universidad Sergio Arboleda"
                ],
               en: ["Formal education",
                    "Forest Engineer",
                    "Universidad Nacional de Colombia",
                    "M.Sc. student in Earth and Climate System Science",
                    "University of Hohenheim",
                    "Complementary education",
                    "Certified course in programming skills with emphasis in web development",
                    "Universidad de Antioquia",
                    "Certified course in artificial intelligence",
                    "Universidad Sergio Arboleda"

                ]
            }
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
                        description: ["Contribución al desarrollo de scripts de Python para adquirir y procesar \
                                imágenes satelitales de servicios en la nube, como parte de un projecto enfocado \
                                a la clasificación de coberturas de la tierra usando técnicas de aprendizaje profundo."]
                    },
                    {
                        id: 1, rol: "Investigador asociado voluntario", place: "KU Leuven",
                        date: "Mayo 2024 - Actual", city: "Remoto", 
                        description: ["Apoyo en el proyecto sobre automatización, análisis estadístico y \
                                quimiometría para la deshidrogenación oxidativa de propano en el \
                                grupo Dusselier.", 
                                "Desarrollo de una plataforma web para integrar y analizar datos provenientes \
                                del reactor, cromatógrafo de gases (GC) y espectrómetro de masas (EM) en un sistema\
                                unificado."
                            ]
                    }      
                ],
               en: [
                    {
                        id: 0, rol: "Satellite Imagery Analyst", place: "Universidad de Antioquia",
                        date: "August 2023 - December 2023", city: "Medellín, Colombia", 
                        description: ["Contributed to the development of Python scripts for acquiring \
                                    and processing satellite imagery from cloud services, as part of a \
                                    project focused on land cover classification using deep learning \
                                    techniques."
                                ]
                    },
                    {
                        id: 1, rol: "Voluntary research associate", place: "KU Leuven",
                        date: "May 2024 - Present", city: "Remote", 
                        description: ["Support of the project on automation, statistical analysis and\
                            chemometrics for the oxidative dehydrogenation of propane at the Dusselier group.",
                            "Development of a web platform to integrate and analyze data coming from the reactor,\
                            gas chromatograph (GC) and mass spectrometer (MS) in a unified system."]
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
                        name: "Trends in planted native tree biomass established in a tropical Andes city water basins",
                        auth: "Juan S. Mendoza-Páez, Jorge A. Giraldo, Mauricio A. Mazo-Lopera, Juan M. Giraldo-Salazar, Luis F. Osorio-Vélez",
                        doi: "10.1111/rec.14296"
                    },
                    {
                        name: "Allometric equations to quantify aboveground biomass in mixed-species plantations with restoration purposes in the tropical Andes.",
                        auth: "Juan M. Giraldo-Salazar, Jorge A. Giraldo, Juan S. Mendoza-Páez, Juan C. Sierra, Jairo A. Rueda, Luis F. Osorio-Vélez",
                        doi: "Aceptado"
                    }
                   ],
               en: [
                    {
                        name: "Trends in planted native tree biomass established in a tropical Andes city water basins",
                        auth: "Juan S. Mendoza-Páez, Jorge A. Giraldo, Mauricio A. Mazo-Lopera, Juan M. Giraldo-Salazar, Luis F. Osorio-Vélez",
                        doi: "10.1111/rec.14296"
                    },
                    {
                        name: "Allometric equations to quantify aboveground biomass in mixed-species plantations with restoration purposes in the tropical Andes.",
                        auth: "Juan M. Giraldo-Salazar, Jorge A. Giraldo, Juan S. Mendoza-Páez, Juan C. Sierra, Jairo A. Rueda, Luis F. Osorio-Vélez",
                        doi: "In press"
                    }
               ]
            }
    }
]

export default info;