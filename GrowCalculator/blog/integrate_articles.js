// Script para integrar artículos HTML al blog
// Este script procesa los artículos HTML y los convierte al formato del blog

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

// Función para generar el HTML de un artículo individual
function generateArticleHTML(article) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | GrowCalculator</title>
    <meta name="description" content="${article.excerpt}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary-blue: #4facfe;
            --secondary-blue: #00f2fe;
            --dark-blue: #2c3e50;
            --light-gray: #6c757d;
            --white: #ffffff;
            --cream: #f8f9fa;
            --gradient-primary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --gradient-secondary: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
            --shadow-light: 0 10px 30px rgba(0, 0, 0, 0.1);
            --shadow-medium: 0 15px 35px rgba(0, 0, 0, 0.15);
            --border-radius: 20px;
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: var(--gradient-primary);
            min-height: 100vh;
            color: var(--dark-blue);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .article-header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: var(--border-radius);
            padding: 3rem 2rem;
            margin-bottom: 2rem;
            text-align: center;
            box-shadow: var(--shadow-light);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .article-header h1 {
            font-size: 3rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .article-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
            flex-wrap: wrap;
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--gradient-secondary);
            padding: 0.8rem 1.5rem;
            border-radius: 15px;
            border: 1px solid rgba(79, 172, 254, 0.2);
        }

        .article-content {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-light);
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .article-content h2 {
            color: var(--dark-blue);
            font-size: 2rem;
            margin: 2rem 0 1rem 0;
            border-bottom: 3px solid transparent;
            background: var(--gradient-primary);
            background-size: 100% 3px;
            background-repeat: no-repeat;
            background-position: bottom;
            font-weight: 600;
        }

        .article-content h3 {
            color: var(--dark-blue);
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem 0;
            font-weight: 500;
        }

        .article-content p {
            margin-bottom: 1rem;
            text-align: justify;
            color: var(--dark-blue);
            font-size: 1.1rem;
        }

        .highlight-box {
            background: var(--gradient-secondary);
            border: 1px solid rgba(79, 172, 254, 0.2);
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .highlight-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--gradient-primary);
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow-light);
        }

        .data-table th {
            background: var(--gradient-primary);
            color: white;
            padding: 1.5rem;
            text-align: left;
            font-weight: 600;
            font-size: 1.1rem;
        }

        .data-table td {
            padding: 1.5rem;
            border-bottom: 1px solid #e9ecef;
            font-size: 1rem;
            color: var(--dark-blue);
        }

        .data-table tr:hover {
            background-color: var(--gradient-secondary);
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .info-card {
            background: var(--gradient-secondary);
            border-radius: 15px;
            padding: 2rem;
            box-shadow: var(--shadow-light);
            transition: var(--transition);
            border-top: 4px solid transparent;
            background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), 
                            linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
            background-origin: border-box;
            background-clip: content-box, border-box;
        }

        .info-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-medium);
        }

        .info-card h4 {
            color: var(--dark-blue);
            margin-bottom: 1rem;
            font-size: 1.3rem;
            font-weight: 600;
        }

        .warning-box {
            background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1));
            border: 1px solid rgba(255, 193, 7, 0.3);
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            position: relative;
        }

        .warning-box::before {
            content: '⚠️ ';
            font-size: 1.5rem;
            margin-right: 1rem;
        }

        .back-button {
            display: inline-block;
            background: var(--gradient-primary);
            color: var(--white);
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 15px;
            font-weight: 600;
            margin-bottom: 2rem;
            transition: var(--transition);
            box-shadow: var(--shadow-light);
        }

        .back-button:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-medium);
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .article-header h1 {
                font-size: 2rem;
            }
            
            .article-meta {
                gap: 1rem;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="blog.html" class="back-button">
            <i class="fas fa-arrow-left"></i> Volver al Blog
        </a>

        <header class="article-header">
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-meta">
                <div class="meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${article.datePublished}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>15 min lectura</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-chart-line"></i>
                    <span>Nivel: Intermedio-Avanzado</span>
                </div>
            </div>
        </header>

        <article class="article-content">
            <!-- El contenido del artículo se insertará aquí -->
            <div id="articleContent">
                <p>Contenido del artículo en desarrollo...</p>
            </div>
        </article>
    </div>
</body>
</html>`;
}

// Función para actualizar el array de artículos en blog.html
function updateBlogArticles() {
    let newArticles = [];
    let currentId = 11; // Empezar después de los artículos existentes

    articleMapping.forEach(article => {
        newArticles.push({
            id: currentId++,
            title: article.title,
            category: article.category,
            excerpt: article.excerpt,
            image: `images/${article.targetFile.replace('.html', '.jpg')}`,
            date: article.datePublished,
            content: `
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <p>Este artículo está siendo integrado desde la carpeta HTML. Próximamente tendrás acceso al contenido completo.</p>
            `,
            images: [`images/${article.targetFile.replace('.html', '.jpg')}`],
            tags: article.tags,
            featured: article.featured,
            views: article.views,
            rating: article.rating,
            author: article.author,
            datePublished: article.datePublished
        });
    });

    return newArticles;
}

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        articleMapping,
        generateArticleHTML,
        updateBlogArticles
    };
} 