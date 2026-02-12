export type Language = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    project: { fr: "Le Projet", en: "The Project" },
    impact: { fr: "Impact", en: "Impact" },
    partners: { fr: "Partenaires", en: "Partners" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    title: {
      fr: "Cultiver l'avenir,\nun bambou à la fois",
      en: "Growing the future,\none bamboo at a time",
    },
    subtitle: {
      fr: "Valoriser les terres agricoles tout en séquestrant le carbone et en créant des revenus durables avec le bambou.",
      en: "Enhance agricultural land while sequestering carbon and creating sustainable income with bamboo.",
    },
    cta: { fr: "Planter du bambou", en: "Plant bamboo" },
    cta2: { fr: "Découvrir le projet", en: "Discover the project" },
  },
  home: {
    whyTitle: { fr: "Pourquoi le bambou ?", en: "Why bamboo?" },
    whySubtitle: {
      fr: "Le bambou est l'une des plantes les plus extraordinaires de la planète. Sa croissance rapide et ses propriétés uniques en font un allié incontournable pour relever les défis écologiques et économiques de notre temps.",
      en: "Bamboo is one of the most extraordinary plants on the planet. Its rapid growth and unique properties make it an essential ally in addressing the ecological and economic challenges of our time.",
    },
    stat1Title: { fr: "Tonnes CO₂ / ha / an", en: "Tonnes CO₂ / ha / year" },
    stat2Title: { fr: "Tonnes biomasse / ha / an", en: "Tonnes biomass / ha / year" },
    card1Title: { fr: "Séquestration carbone", en: "Carbon sequestration" },
    card1Desc: {
      fr: "Le bambou absorbe jusqu'à 100 tonnes de CO₂ par hectare et par an, bien plus qu'une forêt ou un champ classique.",
      en: "Bamboo absorbs up to 100 tonnes of CO₂ per hectare per year, far more than a conventional forest or field.",
    },
    card2Title: { fr: "Revenus durables", en: "Sustainable income" },
    card2Desc: {
      fr: "Crédits carbone, biomasse, matériaux de construction : le bambou offre de multiples sources de revenus aux agriculteurs.",
      en: "Carbon credits, biomass, building materials: bamboo offers multiple revenue streams for farmers.",
    },
    card3Title: { fr: "Protection des sols", en: "Soil protection" },
    card3Desc: {
      fr: "Le système racinaire du bambou lutte contre l'érosion et restaure la fertilité des terres dégradées. Il contribue également à la dépollution des sols grâce à la phytoremédiation.",
      en: "Bamboo's root system fights erosion and restores fertility to degraded land. It also contributes to soil decontamination through phytoremediation.",
    },
    advSection1Title: { fr: "Une culture rentable et durable", en: "A profitable and sustainable crop" },
    adv1: { fr: "Génère des revenus stables tout en demandant peu de travail : plantation unique et entretien minimal.", en: "Generates stable income with minimal labor: one-time planting and minimal maintenance." },
    adv2: { fr: "Culture résiliente, peu sensible au gel, à la grêle ou aux maladies.", en: "Resilient crop, resistant to frost, hail, and disease." },
    adv3: { fr: "Accompagnement agronomique personnalisé sur le long terme.", en: "Personalized long-term agronomic support." },
    advSection2Title: { fr: "Valorisez votre travail en toute transparence", en: "Value your work with full transparency" },
    adv4: { fr: "Partage équitable des revenus issus de la biomasse et des crédits carbone.", en: "Fair revenue sharing from biomass and carbon credits." },
    adv5: { fr: "Objectif commun : maximiser rendement et rentabilité.", en: "Shared goal: maximize yield and profitability." },
    advSection3Title: { fr: "Une culture respectueuse de l'environnement", en: "An environmentally friendly crop" },
    adv6: { fr: "Séquestration de carbone et production de biomasse renouvelable.", en: "Carbon sequestration and renewable biomass production." },
    adv7: { fr: "Zéro pesticide, pas de travail du sol, solution écologique et pérenne.", en: "Zero pesticides, no soil tilling — an ecological and lasting solution." },
    ctaTitle: { fr: "Rejoignez l'aventure BambooImpact", en: "Join the BambooImpact adventure" },
    ctaDesc: {
      fr: "Agriculteur, propriétaire foncier ou investisseur, participez à un projet à fort impact écologique et économique.",
      en: "Farmer, landowner, or investor — take part in a project with strong ecological and economic impact.",
    },
    ctaButton: { fr: "Nous contacter", en: "Contact us" },
  },
  project: {
    title: { fr: "Le Projet BambooImpact", en: "The BambooImpact Project" },
    subtitle: {
      fr: "Un modèle innovant qui associe agriculture durable, séquestration de carbone et revenus complémentaires pour les agriculteurs.",
      en: "An innovative model combining sustainable agriculture, carbon sequestration, and supplementary income for farmers.",
    },
    howTitle: { fr: "Comment ça fonctionne", en: "How it works" },
    step1Title: { fr: "Identification des terres", en: "Land identification" },
    step1Desc: {
      fr: "Nous identifions des terres agricoles disponibles en collaboration avec des agriculteurs et propriétaires fonciers.",
      en: "We identify available agricultural land in collaboration with farmers and landowners.",
    },
    step2Title: { fr: "Plantation du bambou", en: "Bamboo planting" },
    step2Desc: {
      fr: "625 plants par hectare sont mis en terre selon des techniques optimisées pour garantir une croissance rapide.",
      en: "625 plants per hectare are planted using optimized techniques to ensure rapid growth.",
    },
    step3Title: { fr: "Suivi & entretien", en: "Monitoring & maintenance" },
    step3Desc: {
      fr: "Un suivi régulier assure la bonne croissance des bambous avec un entretien minimal pour les agriculteurs.",
      en: "Regular monitoring ensures healthy bamboo growth with minimal maintenance for farmers.",
    },
    step4Title: { fr: "Valorisation économique", en: "Economic valorization" },
    step4Desc: {
      fr: "Vente de crédits carbone validés et certifiés par Bureau VERITAS, production de biomasse et matériaux de construction : les revenus générés bénéficient directement aux agriculteurs.",
      en: "Sale of carbon credits validated and certified by Bureau VERITAS, biomass production and construction materials: the generated revenues directly benefit farmers.",
    },
    benefitsTitle: { fr: "Avantages pour les agriculteurs", en: "Benefits for farmers" },
    benefit1: { fr: "Revenus complémentaires stables", en: "Stable supplementary income" },
    benefit2: { fr: "Entretien minimal (~5 heures de travail par hectare par an)", en: "Minimal maintenance (~5 hours of work per hectare per year)" },
    benefit3: { fr: "Valorisation de terres sous-exploitées", en: "Enhancement of underused land" },
    benefit4: { fr: "Contribution à la lutte contre le changement climatique", en: "Contributing to the fight against climate change" },
    benefit5: { fr: "Amélioration de la biodiversité locale", en: "Improving local biodiversity" },
    benefit6: { fr: "Accès au marché des crédits carbone", en: "Access to the carbon credit market" },
  },
  impact: {
    title: { fr: "Notre Impact", en: "Our Impact" },
    subtitle: {
      fr: "Le bambou est un champion de la séquestration de carbone et de la production de biomasse renouvelable.",
      en: "Bamboo is a champion of carbon sequestration and renewable biomass production.",
    },
    co2Title: { fr: "Séquestration de CO₂", en: "CO₂ Sequestration" },
    co2Desc: {
      fr: "Le bambou séquestre environ 100 tonnes de carbone par hectare par an, et il est possible de vendre dès la première année les crédits carbone correspondant aux cinq premières années de la plantation.",
      en: "Bamboo sequesters approximately 100 tonnes of carbon per hectare per year, and carbon credits can be sold from the first year over the initial 5 years of planting.",
    },
    co2Conclusion: {
      fr: "Grâce à sa capacité exceptionnelle de séquestration, le bambou représente un levier concret et immédiat pour lutter contre le changement climatique tout en générant des revenus via les crédits carbone.",
      en: "Thanks to its exceptional sequestration capacity, bamboo represents a concrete and immediate lever to combat climate change while generating revenue through carbon credits.",
    },
    biomassTitle: { fr: "Production de biomasse", en: "Biomass Production" },
    biomassDesc: {
      fr: "Le bambou offre de multiples produits de récolte, et en termes de biomasse, avec nos techniques de récolte durables, on peut compter sur 20 tonnes de matière sèche par hectare et par an (à maturité de la bambouseraie, environ 7 ans après la plantation).",
      en: "Bamboo offers multiple harvest products, and in terms of biomass, with our sustainable harvesting techniques, you can expect 20 tonnes of dry matter per hectare per year (at plantation maturity, about 7 years after planting).",
    },
    biomassConclusion: {
      fr: "La biomasse de bambou ouvre la voie à une valorisation diversifiée : matériaux de construction, pousses comestibles, isolation, textile et bien d'autres applications industrielles à forte valeur ajoutée.",
      en: "Bamboo biomass paves the way for diversified valorization: construction materials, edible shoots, insulation, textiles, and many other high-value industrial applications.",
    },
    carbonTitle: { fr: "Crédits carbone", en: "Carbon Credits" },
    carbonDesc: {
      fr: "Les crédits carbone certifiés permettent de monétiser l'impact écologique et de générer des revenus pérennes pour les partenaires du projet.",
      en: "Certified carbon credits monetize the ecological impact and generate sustainable revenues for project partners.",
    },
    marketTitle: { fr: "Marché du bambou en Europe", en: "Bamboo Market in Europe" },
    marketDesc: {
      fr: "Évolution du marché du bambou en Europe de 2021 à 2026, avec projection pour 2030 (en milliards USD).",
      en: "Evolution of the bamboo market in Europe from 2021 to 2026, with 2030 projection (in billion USD).",
    },
    marketSource: {
      fr: "Sources : MarketDataForecast, Global Growth Insights, Grand View Research",
      en: "Sources: MarketDataForecast, Global Growth Insights, Grand View Research",
    },
    marketConclusion: {
      fr: "Le bambou s'impose dans une multitude de secteurs en Europe : construction, textile, alimentation, cosmétique, énergie. Présent dans la quasi-totalité des foyers européens sous diverses formes, il fait face à une demande qui dépasse largement la production locale. À l'heure où l'approvisionnement en ressources locales et durables devient une priorité, cultiver du bambou en Europe représente une opportunité stratégique sur l'un des plus grands marchés mondiaux.",
      en: "Bamboo is gaining ground across a multitude of sectors in Europe: construction, textiles, food, cosmetics, and energy. Found in nearly every European household in various forms, demand far outstrips local production. As sourcing local and sustainable resources becomes a priority, growing bamboo in Europe represents a strategic opportunity in one of the world's largest markets.",
    },
    envTitle: { fr: "Impact environnemental", en: "Environmental Impact" },
    envItems: {
      fr: [
        "Lutte contre l'érosion des sols",
        "Restauration de la biodiversité",
        "Filtration naturelle de l'eau",
        "Habitat pour la faune locale",
        "Réduction de l'empreinte carbone",
      ],
      en: [
        "Fighting soil erosion",
        "Restoring biodiversity",
        "Natural water filtration",
        "Habitat for local wildlife",
        "Reducing carbon footprint",
      ],
    },
  },
  partners: {
    title: { fr: "Partenaires & Références", en: "Partners & References" },
    subtitle: {
      fr: "BambooImpact s'appuie sur un réseau de partenaires engagés pour un avenir durable.",
      en: "BambooImpact relies on a network of committed partners for a sustainable future.",
    },
    comingSoon: {
      fr: "Nous construisons activement notre réseau de partenaires. Si vous souhaitez rejoindre cette aventure écologique et économique, n'hésitez pas à nous contacter.",
      en: "We are actively building our partner network. If you want to join this ecological and economic adventure, don't hesitate to contact us.",
    },
    ctaButton: { fr: "Planter du bambou", en: "Plant bamboo" },
    whyTitle: { fr: "Pourquoi devenir partenaire ?", en: "Why become a partner?" },
    reason1: { fr: "Impact écologique mesurable et certifié", en: "Measurable and certified ecological impact" },
    reason2: { fr: "Revenus durables grâce aux crédits carbone", en: "Sustainable revenue through carbon credits" },
    reason3: { fr: "Valorisation de votre image de marque", en: "Enhanced brand image" },
    reason4: { fr: "Contribution concrète à la transition écologique", en: "Concrete contribution to ecological transition" },
  },
  contact: {
    title: { fr: "Contactez-nous", en: "Contact Us" },
    subtitle: {
      fr: "Vous souhaitez en savoir plus sur BambooImpact ou devenir partenaire ? Écrivez-nous !",
      en: "Want to learn more about BambooImpact or become a partner? Write to us!",
    },
    name: { fr: "Nom complet", en: "Full name" },
    email: { fr: "Adresse e-mail", en: "Email address" },
    type: { fr: "Vous êtes…", en: "You are…" },
    typeOptions: {
      fr: ["Agriculteur / Propriétaire foncier", "Investisseur / Partenaire", "Entreprise", "Autre"],
      en: ["Farmer / Landowner", "Investor / Partner", "Company", "Other"],
    },
    message: { fr: "Votre message", en: "Your message" },
    send: { fr: "Envoyer le message", en: "Send message" },
    sent: { fr: "Message envoyé ! Nous vous répondrons rapidement.", en: "Message sent! We'll get back to you soon." },
    info: { fr: "Informations de contact", en: "Contact information" },
  },
  footer: {
    tagline: {
      fr: "Cultiver l'avenir, un bambou à la fois.",
      en: "Growing the future, one bamboo at a time.",
    },
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  },
} as const;

export function t(key: string, lang: Language): string {
  const keys = key.split(".");
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  if (typeof value === "object" && value !== null && lang in value) {
    return value[lang];
  }
  return key;
}
