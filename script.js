/* ===== Datos de la malla ===== */
const malla = {
    "Semestre 1": [
        { nombre: "Estrategias y herramientas digitales para el aprendizaje", creditos: 4 },
        { nombre: "Fundamentos de matemática", creditos: 4 },
        { nombre: "Economía 1", creditos: 3 },
        { nombre: "Introducción a la administración y negocios internacionales", creditos: 3 },
        { nombre: "Comprensión y producción de textos 1", creditos: 3 },
        { nombre: "Laboratorio de liderazgo e innovación", creditos: 3 }
    ],
    "Semestre 2": [
        { nombre: "Comprensión y producción de textos 2", creditos: 4 },
        { nombre: "Fundamentos de contabilidad", creditos: 4 },
        { nombre: "Matemática 2.1", creditos: 4 },
        { nombre: "Administración global", creditos: 3 },
        { nombre: "Economía 2", creditos: 3 },
        { nombre: "Ciudadanía y desafíos éticos", creditos: 3 }
    ],
    "Semestre 3": [
        { nombre: "Derecho empresarial", creditos: 5 },
        { nombre: "Estadística y probabilidades", creditos: 4 },
        { nombre: "Matemáticas financieras", creditos: 4 },
        { nombre: "Comportamiento organizacional", creditos: 3 },
        { nombre: "Gestión de la información y del aprendizaje", creditos: 3 },
        { nombre: "Laboratorio de liderazgo e innovación intermedio", creditos: 2 }
    ],
    "Semestre 4": [
        { nombre: "Costos y presupuestos", creditos: 4 },
        { nombre: "Estadística inferencial", creditos: 4 },
        { nombre: "English course 1", creditos: 3 },
        { nombre: "Marketing", creditos: 3 }
    ],
    "Semestre 5": [
        { nombre: "Investigación de mercados", creditos: 5 },
        { nombre: "Gestión internacional e intercultural", creditos: 4 },
        { nombre: "English course 2", creditos: 3 },
        { nombre: "Finanzas 1", creditos: 3 },
        { nombre: "Gestión del talento humano", creditos: 3 },
        { nombre: "Laboratorio de liderazgo e innovación avanzado", creditos: 3 }
    ],
    "Semestre 6": [
        { nombre: "Distribución física internacional", creditos: 4 },
        { nombre: "Finanzas 2", creditos: 4 },
        { nombre: "Gestión del comercio internacional", creditos: 4 },
        { nombre: "English course 3", creditos: 3 },
        { nombre: "Herramientas tecnológicas aplicadas a los negocios 1", creditos: 3 },
        { nombre: "Investigación académica", creditos: 3 }
    ],
    "Semestre 7": [
        { nombre: "Gerencia de operaciones", creditos: 4 },
        { nombre: "Herramientas tecnológicas aplicada a los negocios 2", creditos: 4 },
        { nombre: "Agilidad para la gestión de proyectos", creditos: 3 },
        { nombre: "English course 4", creditos: 3 },
        { nombre: "Estándares internacionales de calidad", creditos: 3 },
        { nombre: "Gestión aduanera y cambiaria", creditos: 3 }
    ],
    "Semestre 8": [
        { nombre: "Desarrollo de productos y servicios internacionales", creditos: 4 },
        { nombre: "Formulación y evaluación de proyectos", creditos: 4 },
        { nombre: "Análisis de recursos y capacidades organizacionales", creditos: 3 },
        { nombre: "Entorno global para los negocios", creditos: 3 },
        { nombre: "Legislación del comercio internacional", creditos: 3 },
        { nombre: "Política económica internacional", creditos: 3 }
    ],
    "Semestre 9": [
        { nombre: "Decisiones basadas en datos", creditos: 4 },
        { nombre: "Inteligencia de mercados internacionales", creditos: 4 },
        { nombre: "Plan de negocios internacionales", creditos: 4 },
        { nombre: "Costos, precios y cotizaciones internacionales", creditos: 3 },
        { nombre: "Estrategia competitiva", creditos: 3 },
        { nombre: "Investigación 1 en administración", creditos: 3 }
    ],
    "Semestre 10": [
        { nombre: "Investigación 2 en administración", creditos: 4 },
        { nombre: "Gerencia comercial internacional", creditos: 3 },
        { nombre: "Inteligencia artificial aplicada a los negocios", creditos: 3 },
        { nombre: "Negociaciones y transacciones internacionales", creditos: 3 },
        { nombre: "Negocios digitales globales", creditos: 3 },
        { nombre: "Simulación de negocios digitales", creditos: 3 },
        { nombre: "Transformación digital", creditos: 3 }
    ]
};

/* ===== Requisitos ===== */
const requisitos = {
    "Comprensión y producción de textos 2": ["Comprensión y producción de textos 1"],
    "Matemática 2.1": ["Fundamentos de matemática"],
    "Economía 2": ["Economía 1"],
    "Ciudadanía y desafíos éticos": ["Comprensión y producción de textos 1"],
    "Derecho empresarial": ["20cr"],
    "Matemáticas financieras": ["20cr"],
    "Comportamiento organizacional": ["Administración global"],
    "Gestión de la información y del aprendizaje": ["Estrategias y herramientas digitales para el aprendizaje"],
    "Laboratorio de liderazgo e innovación intermedio": ["Laboratorio de liderazgo e innovación"],
    "Costos y presupuestos": ["Fundamentos de contabilidad"],
    "Estadística inferencial": ["Estadística y probabilidades"],
    "English course 1": ["60cr"],
    "Marketing": ["40cr"],
    "Investigación de mercados": ["Estadística inferencial"],
    "Gestión internacional e intercultural": ["80cr"],
    "English course 2": ["English course 1"],
    "Finanzas 1": ["60cr"],
    "Gestión del talento humano": ["Comportamiento organizacional"],
    "Laboratorio de liderazgo e innovación avanzado": ["Laboratorio de liderazgo e innovación intermedio"],
    "Distribución física internacional": ["Gestión internacional e intercultural"],
    "Finanzas 2": ["Finanzas 1"],
    "Gestión del comercio internacional": ["80cr"],
    "English course 3": ["English course 2"],
    "Herramientas tecnológicas aplicadas a los negocios 1": ["100cr"],
    "Investigación académica": ["120cr"],
    "Gerencia de operaciones": ["120cr"],
    "Herramientas tecnológicas aplicada a los negocios 2": ["Herramientas tecnológicas aplicadas a los negocios 1"],
    "Agilidad para la gestión de proyectos": ["Laboratorio de liderazgo e innovación avanzado"],
    "English course 4": ["English course 3"],
    "Estándares internacionales de calidad": ["Gestión del comercio internacional"],
    "Gestión aduanera y cambiaria": ["100cr"],
    "Desarrollo de productos y servicios internacionales": ["140cr"],
    "Formulación y evaluación de proyectos": ["Finanzas 2"],
    "Análisis de recursos y capacidades organizacionales": ["Gerencia de operaciones"],
    "Entorno global para los negocios": ["120cr"],
    "Legislación del comercio internacional": ["Derecho empresarial"],
    "Política económica internacional": ["140cr"],
    "Decisiones basadas en datos": ["Herramientas tecnológicas aplicada a los negocios 2"],
    "Inteligencia de mercados internacionales": ["Gestión aduanera y cambiaria"],
    "Plan de negocios internacionales": ["Desarrollo de productos y servicios internacionales"],
    "Costos, precios y cotizaciones internacionales": ["Gestión aduanera y cambiaria"],
    "Estrategia competitiva": ["Entorno global para los negocios"],
    "Investigación 1 en administración": ["Investigación académica"],
    "Investigación 2 en administración": ["Investigación 1 en administración"],
    "Gerencia comercial internacional": ["180cr"],
    "Inteligencia artificial aplicada a los negocios": ["Decisiones basadas en datos"],
    "Negociaciones y transacciones internacionales": ["Plan de negocios internacionales"],
    "Negocios digitales globales": ["Inteligencia de mercados internacionales"],
    "Simulación de negocios digitales": ["160cr"],
    "Transformación digital": ["160cr"]
};

/* ===== Estado guardado ===== */
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

/* ===== Renderizar la malla ===== */
function renderMalla() {
    const container = document.getElementById("malla-container");
    container.innerHTML = "";
    const creditos = calcularCreditos();
    document.getElementById("creditos").textContent = `Créditos aprobados: ${creditos}`;

    for (let semestre in malla) {
        const col = document.createElement("div");
        col.classList.add("semestre");

        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        col.appendChild(titulo);

        malla[semestre].forEach(ramo => {
            const div = document.createElement("div");
            div.classList.add("ramo");
            div.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

            if (aprobados.includes(ramo.nombre)) div.classList.add("aprobado");
            if (!puedeAprobar(ramo.nombre, creditos)) div.classList.add("bloqueado");

            div.addEventListener("click", () => toggleAprobado(ramo.nombre, ramo.creditos));
            col.appendChild(div);
        });

        container.appendChild(col);
    }
}

/* ===== Calcular créditos aprobados ===== */
function calcularCreditos() {
    return Object.values(malla).flat().reduce((acc, ramo) => {
        return aprobados.includes(ramo.nombre) ? acc + ramo.creditos : acc;
    }, 0);
}

/* ===== Verificar requisitos ===== */
function puedeAprobar(nombre, creditos) {
    if (!requisitos[nombre]) return true;
    return requisitos[nombre].every(req => {
        if (req.endsWith("cr")) {
            return creditos >= parseInt(req);
        } else {
            return aprobados.includes(req);
        }
    });
}

/* ===== Alternar aprobado ===== */
function toggleAprobado(nombre, creditos) {
    const totalCreditos = calcularCreditos();
    if (!puedeAprobar(nombre, totalCreditos)) {
        mostrarMensaje(`No puedes aprobar "${nombre}" todavía. Revisa sus requisitos.`);
        return;
    }
    if (aprobados.includes(nombre)) {
        aprobados = aprobados.filter(r => r !== nombre);
    } else {
        aprobados.push(nombre);
    }
    localStorage.setItem("aprobados", JSON.stringify(aprobados));
    renderMalla();
}

/* ===== Mensaje flotante ===== */
function mostrarMensaje(texto) {
    const msg = document.getElementById("mensaje-requisito");
    msg.textContent = texto;
    msg.classList.add("mostrar");
    setTimeout(() => msg.classList.remove("mostrar"), 3000);
}

/* ===== Inicializar ===== */
renderMalla();
