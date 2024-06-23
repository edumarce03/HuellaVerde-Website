const articles = [
  {
    title: "28 Ideas para vivir de forma más sostenible en el planeta",
    image: "/src/img/articles/articulo1.png",
    description:
      "En este artículo: '28 ideas para vivir de forma más sostenible en el planeta', National Geographic ofrece una guía práctica y accesible para adoptar un estilo de vida más ecológico. Publicado en el marco del Día de la Tierra y la iniciativa Planet Possible, el texto presenta 28 consejos que abarcan desde el consumo responsable y la alimentación basada en plantas hasta el ahorro energético y la reducción del uso de plásticos. Combinando datos científicos, opiniones de expertos y soluciones innovadoras, el artículo demuestra cómo pequeñas acciones individuales pueden tener un impacto significativo en la lucha contra el cambio climático y la pérdida de biodiversidad. Al vincular la salud del planeta con la salud humana, especialmente en el contexto de la pandemia de COVID-19, el texto subraya la urgencia de adoptar prácticas sostenibles en nuestra vida cotidiana, ofreciendo una visión integral de la sostenibilidad que motiva al lector a pasar a la acción.",
    link: "https://www.nationalgeographic.es/medio-ambiente/2021/04/28-ideas-para-vivir-de-forma-mas-sostenible-en-el-planeta",
  },
  {
    title: "18 Innovaciones para reducir nuestra huella medioambiental",
    image: "/src/img/articles/articulo2.png",
    description:
      "En este artículo: '18 innovaciones para reducir nuestra huella medioambiental', se presenta una visión optimista y futurista de las soluciones tecnológicas y científicas para abordar los desafíos ambientales actuales. El texto comienza con una reflexión histórica sobre el desarrollo agrícola y sus impactos, para luego enfocarse en 18 innovaciones prometedoras en diversos campos. Estas incluyen desde purificadores de aire gigantes y carreteras solares hasta nuevas formas de combustible para aviación y herramientas microbianas para la agricultura. El artículo destaca el papel crucial de la agricultura en la mitigación del cambio climático y enfatiza la importancia de la innovación continua para crear un futuro más sostenible. Con un tono inspirador, el texto sugiere que estos avances tecnológicos podrían transformar significativamente nuestra relación con el medio ambiente, ofreciendo soluciones creativas a problemas complejos como la contaminación del aire, el manejo de residuos y las emisiones de gases de efecto invernadero.",
    link: "https://www.alltech.com/es-es/blog/18-innovaciones-para-reducir-nuestra-huella-medioambiental",
  },
  {
    title: "30 Ejemplos aplicables de reduce, recicla y reutiliza",
    image: "/src/img/articles/articulo3.png",
    description:
      "En este artículo: '30 ejemplos aplicables de reduce, recicla y reutiliza', se ofrece una guía práctica y accesible para implementar la regla de las 3R (Reducir, Reciclar y Reutilizar) en la vida cotidiana. El texto presenta 30 ideas concretas, divididas equitativamente entre las tres categorías, abarcando desde la reutilización de objetos domésticos hasta consejos para reducir el consumo y métodos de reciclaje. El artículo no solo proporciona sugerencias fáciles de aplicar, sino que también explora cada concepto en profundidad, ofreciendo ejemplos específicos como el uso de botellas reutilizables, el reciclaje de ropa y la creatividad en la reutilización de frascos de vidrio. Con un tono motivador y cercano, el texto enfatiza cómo pequeños cambios en nuestros hábitos diarios pueden tener un impacto significativo en la reducción de residuos y la conservación del medio ambiente, animando a los lectores a adoptar un estilo de vida más sostenible de manera creativa y personalizada.",
    link: "https://vidasostenibleencasa.com/30-ejemplos-de-reduce-recicla-y-reutiliza/",
  },
  {
    title: "20 Acciones Efectivas para Reducir tu Huella Ecológica",
    image: "/src/img/articles/articulo4.png",
    description:
      "En este artículo: '20 Acciones Efectivas para Reducir Tu Huella Ecológica', se presenta una guía detallada y práctica para disminuir el impacto ambiental individual. El texto comienza explicando el concepto de huella ecológica y su importancia, destacando los beneficios ambientales y sociales de su reducción. Luego, ofrece una lista exhaustiva de 20 acciones concretas, abarcando áreas como el hogar, el transporte, la alimentación, la gestión de residuos y el involucramiento comunitario. Cada sugerencia viene acompañada de explicaciones sobre su impacto y cómo implementarla. El artículo concluye enfatizando la importancia de despertar la conciencia ecológica y el poder del cambio colectivo. Con un enfoque informativo y motivador, el texto proporciona una hoja de ruta completa para que los lectores adopten un estilo de vida más sostenible, subrayando cómo pequeñas acciones pueden tener un impacto significativo en la preservación del medio ambiente.",
    link: "https://conciencia.eco/acciones-para-reducir-tu-huella-ecologica/",
  },
];

function showArticle(index) {
  const article = articles[index - 1];
  document.getElementById("articleCard").querySelector("h3").innerText =
    article.title;
  document.getElementById("articleImage").src = article.image;
  document.getElementById("articleDescription").innerText = article.description;
  document.getElementById("articleLink").href = article.link;
}

// Mostrar el primer artículo por defecto
showArticle(1);
