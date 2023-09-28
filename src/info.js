import About from './pages/About'
import Home from './pages/Home'
import Interest from './pages/Interest'
import Experiences from './pages/Experiences'
import Publications from './pages/Experiences'

const info = [
    {
        "id": "home",
        "title": "",
        "subtitle": "",
        "component": Home,
        "info": ""
    },
    {
        "id": "about",
        "title": {"es": "Acerca de mí", "en": "About me"},
        "subtitle": {"es": "Un breve resumen de mis fortalezas",
                     "en": "A short summary of my path"},
        "component": About,
        "info": {"es":
                    [
                    "¡Hola!, soy Juan Mendoza",
                    "Ingeniero Forestal, Universidad Nacional de Colombia",
                    "Mi sólida formación en ingeniería y ciencias de la tierra se complementa con una amplia gama de habilidades que incluyen \
                    modelación lineal y no lineal, análisis de series de tiempo y análisis espacial utilizando herramientas como QGIS, así como\
                    lenguajes de programación como R y Python. Además, destaco por mi capacidad en el análisis de datos y la comunicación\
                    efectiva de resultados a través de la construcción de plataformas web."
                    ],
                 "en":
                    [
                    "¡Hi!, I am Juan Mendoza",
                    "Forest Engineer, Universidad Nacional de Colombia",
                    "My strong engineering and geoscience background is complemented by a wide range of skills including linear and \
                    non-linear modeling, time series analysis and spatial analysis using tools such as QGIS and programming languages such as\
                    R and Python. In adittion, I excel in data analysis and efective comunication of results through the \
                    construction of web platforms."    
                    ]}
    },
    {
        "id": "interest",
        "title": {"es": "Intereses", "en": "My Interests"},
        "subtitle": {"es": "sub esp", "en": "sub eng"},
        "component": Interest,
        "info": {"es": "lorem ipsum", "en": "lorem ipsum ingles"}
    },
    {
        "id": "experiences",
        "title": {"es": "Experiencia Laboral", "en": "Work Experience"},
        "subtitle": {"es": "sub esp", "en": "sub eng"},
        "component": Experiences,
        "info": {"es": "lorem ipsum", "en": "lorem ipsum ingles"}
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