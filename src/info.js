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
        info: ""
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
        subtitle: {es: "Mis áreas de enfoque y continuo aprendizaje",
                    en: "Areas of focus and continue learning"},
        component: Interest,
        info: {es: {label: ["Sensores Remotos", "Análisis Espacial", "Modelación Forestal"],
                    text:  ["A lo largo de mi formación he cultivado un profundo interés en la aplicación de la tecnología de sensores \
                                remotos en el estudio de la dinámica forestal y climática a nivel global. La capacidad para \
                                monitoriar la evolución de estos sistemas en el espacio y en el tiempo a través de la integración de \
                                información proveniente de sensores remotos con técnicas estadísticas y de machine learning son una fuente constante de \
                                motivación en mi carrera."]},
                en: {label: ["Remote Sensing", "Spatial Analysis", "Forest Modeling"],
                     text: ["Throughout my education, I have cultivated a deep interest in the application of remote sensing technology to the study of global\
                            forest and climate dynamics. The ability to monitor the evolution of these systems in space and time by integrating remote \
                            sensing information with statistical and machine learning techniques has been a constant source of motivation in my career."]}}
    },
    {
        id: "experiences",
        title: {es: "Experiencia Laboral", en: "Work Experience"},
        subtitle: {es: "sub esp", en: "sub eng"},
        component: Experiences,
        info: {es: [
                    {
                        id: 0, rol: "Analista de imágenes satelitales", place: "Universidad de Antioquia",
                        date: "Agosto 2023 - Presente", city: "Medellín, Colombia", 
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
                    }      
                   ],
               en: "lorem ipsum ingles"}
    },
    {
        "id": "publications",
        "title": {"es": "Publicaciones", "en": "Publications"},
        "subtitle": {"es": "sub esp", "en": "sub eng"},
        "component": Publications,
        "info": {"es": "lorem ipsum", "en": "lorem ipsum ingles"}
    }
]

export default info;