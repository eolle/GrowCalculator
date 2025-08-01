// Mapeo de artículos HTML para integración en el blog
const articleMapping = [
    {
        sourceFile: "analisis_agua_cannabis (1).html",
        targetFile: "analisis_agua_cannabis.html",
        title: "Análisis de Agua para Cannabis",
        category: "Nutrición",
        excerpt: "Guía completa sobre análisis de agua, pH, EC, dureza, contaminantes y tratamientos para cultivo profesional.",
        tags: ["Nutrición", "Agua", "pH", "EC", "Tratamiento"],
        featured: true,
        views: 980,
        rating: 4.8,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "analisis_cannabinoides_html.html",
        targetFile: "analisis_cannabinoides.html",
        title: "Análisis de Cannabinoides",
        category: "Análisis",
        excerpt: "Guía completa sobre análisis de cannabinoides, THC, CBD y otros compuestos activos.",
        tags: ["Análisis", "Cannabinoides", "THC", "CBD", "Laboratorio"],
        featured: false,
        views: 750,
        rating: 4.5,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "automatizacion_cultivo_html.html",
        targetFile: "automatizacion_cultivo.html",
        title: "Automatización del Cultivo",
        category: "Tecnología",
        excerpt: "Sistemas de automatización para cultivo indoor: riego, clima, iluminación y monitoreo.",
        tags: ["Tecnología", "Automatización", "Sistemas", "Control"],
        featured: true,
        views: 1100,
        rating: 4.7,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "bioestimulantes_cannabis.html",
        targetFile: "bioestimulantes_cannabis.html",
        title: "Bioestimulantes en Cannabis",
        category: "Nutrición",
        excerpt: "Uso de bioestimulantes para mejorar el crecimiento, desarrollo y resistencia de las plantas.",
        tags: ["Nutrición", "Bioestimulantes", "Crecimiento", "Resistencia"],
        featured: false,
        views: 680,
        rating: 4.3,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "cannabis_guide_html.html",
        targetFile: "guia_completa_cannabis.html",
        title: "Guía Completa de Cultivo de Cannabis",
        category: "Guía",
        excerpt: "Guía completa desde la germinación hasta la cosecha para cultivadores de todos los niveles.",
        tags: ["Guía", "Cultivo", "Completo", "Principiantes"],
        featured: true,
        views: 1500,
        rating: 4.9,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "cannabis_harvest_spanish.html",
        targetFile: "cosecha_cannabis.html",
        title: "Guía de Cosecha de Cannabis",
        category: "Cosecha",
        excerpt: "Técnicas y métodos para cosechar cannabis en el momento óptimo y con la máxima calidad.",
        tags: ["Cosecha", "Técnicas", "Calidad", "Momento óptimo"],
        featured: false,
        views: 920,
        rating: 4.6,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "cannabis_medicinal.html",
        targetFile: "cannabis_medicinal.html",
        title: "Cannabis Medicinal",
        category: "Medicinal",
        excerpt: "Propiedades medicinales del cannabis y su uso terapéutico en diferentes condiciones.",
        tags: ["Medicinal", "Terapéutico", "Propiedades", "Salud"],
        featured: true,
        views: 1200,
        rating: 4.8,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "cannabis_training_techniques.html",
        targetFile: "tecnicas_entrenamiento.html",
        title: "Técnicas de Entrenamiento de Cannabis",
        category: "Técnicas",
        excerpt: "Métodos avanzados de entrenamiento para maximizar el rendimiento y controlar el crecimiento.",
        tags: ["Técnicas", "Entrenamiento", "LST", "SCROG", "Poda"],
        featured: false,
        views: 850,
        rating: 4.4,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "clonacion_avanzada_html.html",
        targetFile: "clonacion_avanzada.html",
        title: "Clonación Avanzada",
        category: "Reproducción",
        excerpt: "Técnicas avanzadas de clonación para mantener genéticas y mejorar la propagación.",
        tags: ["Reproducción", "Clonación", "Genéticas", "Propagación"],
        featured: false,
        views: 720,
        rating: 4.2,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "co2_cannabis_html.html",
        targetFile: "co2_cannabis.html",
        title: "Enriquecimiento con CO2",
        category: "Ambiente",
        excerpt: "Guía completa sobre el uso de CO2 para aumentar el rendimiento y acelerar el crecimiento.",
        tags: ["Ambiente", "CO2", "Enriquecimiento", "Rendimiento"],
        featured: true,
        views: 1050,
        rating: 4.7,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "controlbio.html",
        targetFile: "control_biologico.html",
        title: "Control Biológico de Plagas",
        category: "Sanidad",
        excerpt: "Métodos naturales y biológicos para el control de plagas sin usar químicos.",
        tags: ["Sanidad", "Control Biológico", "Plagas", "Natural"],
        featured: false,
        views: 780,
        rating: 4.5,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "cultivo_indoor_guide.html",
        targetFile: "guia_cultivo_indoor.html",
        title: "Guía de Cultivo Indoor",
        category: "Guía",
        excerpt: "Guía completa para cultivo indoor: equipamiento, técnicas y mejores prácticas.",
        tags: ["Guía", "Indoor", "Equipamiento", "Técnicas"],
        featured: true,
        views: 1350,
        rating: 4.8,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "enfermedades_fungicas_cannabis.html",
        targetFile: "enfermedades_fungicas.html",
        title: "Enfermedades Fúngicas en Cannabis",
        category: "Sanidad",
        excerpt: "Identificación, prevención y tratamiento de enfermedades fúngicas comunes.",
        tags: ["Sanidad", "Enfermedades", "Hongos", "Prevención"],
        featured: false,
        views: 890,
        rating: 4.6,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "extraccion_resina_cannabis.html",
        targetFile: "extraccion_resina.html",
        title: "Extracción de Resina de Cannabis",
        category: "Procesamiento",
        excerpt: "Técnicas de extracción de resina: hash, kief, concentrados y métodos avanzados.",
        tags: ["Procesamiento", "Extracción", "Resina", "Concentrados"],
        featured: false,
        views: 950,
        rating: 4.7,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "genetica_cannabis_html.html",
        targetFile: "genetica_cannabis.html",
        title: "Genética del Cannabis",
        category: "Genética",
        excerpt: "Comprensión de la genética del cannabis, variedades y mejoramiento genético.",
        tags: ["Genética", "Variedades", "Mejoramiento", "Breeding"],
        featured: true,
        views: 1150,
        rating: 4.8,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "hydroponic_guide.html",
        targetFile: "guia_hidroponico.html",
        title: "Guía de Cultivo Hidropónico",
        category: "Hidropónico",
        excerpt: "Sistemas hidropónicos, nutrientes y técnicas para cultivo sin suelo.",
        tags: ["Hidropónico", "Sistemas", "Nutrientes", "Sin suelo"],
        featured: true,
        views: 1250,
        rating: 4.9,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "led_vs_hps_html.html",
        targetFile: "led_vs_hps.html",
        title: "LED vs HPS: Comparativa de Iluminación",
        category: "Iluminación",
        excerpt: "Comparativa detallada entre iluminación LED y HPS para cultivo indoor.",
        tags: ["Iluminación", "LED", "HPS", "Comparativa"],
        featured: false,
        views: 1100,
        rating: 4.7,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "manicurado_cannabis.html",
        targetFile: "manicurado_cannabis.html",
        title: "Manicurado de Cannabis",
        category: "Procesamiento",
        excerpt: "Técnicas de manicurado para mejorar la presentación y calidad del producto final.",
        tags: ["Procesamiento", "Manicurado", "Calidad", "Presentación"],
        featured: false,
        views: 820,
        rating: 4.4,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "mycorrhizae_spanish.html",
        targetFile: "micorrizas.html",
        title: "Micorrizas en Cannabis",
        category: "Biología",
        excerpt: "Uso de micorrizas para mejorar la absorción de nutrientes y salud radicular.",
        tags: ["Biología", "Micorrizas", "Nutrientes", "Raíces"],
        featured: false,
        views: 680,
        rating: 4.3,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "nutricion_avanzada.html",
        targetFile: "nutricion_avanzada.html",
        title: "Nutrición Avanzada",
        category: "Nutrición",
        excerpt: "Técnicas avanzadas de nutrición para maximizar el rendimiento y calidad.",
        tags: ["Nutrición", "Avanzada", "Rendimiento", "Calidad"],
        featured: true,
        views: 1300,
        rating: 4.8,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "produccion_semillas_html.html",
        targetFile: "produccion_semillas.html",
        title: "Producción de Semillas",
        category: "Reproducción",
        excerpt: "Técnicas para producir semillas de cannabis de alta calidad.",
        tags: ["Reproducción", "Semillas", "Breeding", "Genética"],
        featured: false,
        views: 750,
        rating: 4.5,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "sistemas_fertirrigacion.html",
        targetFile: "sistemas_fertirrigacion.html",
        title: "Sistemas de Fertirrigación",
        category: "Nutrición",
        excerpt: "Sistemas automatizados de fertirrigación para cultivos comerciales.",
        tags: ["Nutrición", "Fertirrigación", "Automatización", "Comercial"],
        featured: false,
        views: 880,
        rating: 4.6,
        author: "growie",
        datePublished: "27 Jul 2025"
    },
    {
        sourceFile: "sustratos_hidroponicos_organicos.html",
        targetFile: "sustratos_hidroponicos.html",
        title: "Sustratos Hidropónicos Orgánicos",
        category: "Hidropónico",
        excerpt: "Sustratos orgánicos para sistemas hidropónicos y sus ventajas.",
        tags: ["Hidropónico", "Sustratos", "Orgánico", "Sistemas"],
        featured: false,
        views: 720,
        rating: 4.4,
        author: "growie",
        datePublished: "27 Jul 2025"
    }
];

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = articleMapping;
} 