export type Language = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    project: { fr: "Le Projet", en: "The Project" },
    impact: { fr: "Impact", en: "Impact" },
    partners: { fr: "Partenaires", en: "Partners" },
    revenues: { fr: "Revenus", en: "Revenue" },
    contact: { fr: "Contact", en: "Contact" },
  },
  revenues: {
    title: { fr: "Revenus & Business", en: "Revenue & Business" },
    subtitle: {
      fr: "Simulez vos revenus et découvrez notre modèle économique transparent.",
      en: "Simulate your revenue and discover our transparent business model.",
    },
  },
  hero: {
    title: {
      fr: "Valorisez vos terres\ngrâce au bambou",
      en: "Unlock your land's value\nwith bamboo",
    },
    subtitle: {
      fr: "BambooImpact accompagne les propriétaires de terrains agricoles en Wallonie dans la plantation de bambou Phyllostachys. Plantation, entretien, récolte et commercialisation : nous gérons tout.",
      en: "BambooImpact supports agricultural landowners in Wallonia with Phyllostachys bamboo planting. Planting, maintenance, harvesting, and sales: we handle everything.",
    },
    cta: { fr: "Étudier le potentiel de ma parcelle", en: "Assess my land's potential" },
    cta2: { fr: "Simuler mes revenus", en: "Simulate my revenue" },
    badge1: { fr: "Analyse de terrain gratuite", en: "Free land assessment" },
    badge2: { fr: "Projets limités par an", en: "Limited projects per year" },
    badge3: { fr: "Sélection stricte des parcelles", en: "Strict plot selection" },
  },
  home: {
    stat1Title: { fr: "Tonnes CO₂ / ha / an", en: "Tonnes CO₂ / ha / year" },
    stat2Title: { fr: "Tonnes biomasse / ha / an", en: "Tonnes biomass / ha / year" },

    // Services
    servicesTitle: { fr: "Un service complet, clé en main", en: "A complete, turnkey service" },
    servicesSubtitle: {
      fr: "De la plantation à la commercialisation, BambooImpact gère l'intégralité de votre projet bambou.",
      en: "From planting to commercialization, BambooImpact manages your entire bamboo project.",
    },
    service1Title: { fr: "Plantation", en: "Planting" },
    service1Desc: {
      fr: "625 plants Phyllostachys par hectare, adaptés au climat wallon. Espèce robuste, résistante au gel et à croissance rapide.",
      en: "625 Phyllostachys plants per hectare, adapted to the Walloon climate. Robust, frost-resistant, fast-growing species.",
    },
    service2Title: { fr: "Entretien & suivi", en: "Maintenance & monitoring" },
    service2Desc: {
      fr: "Suivi agronomique continu et entretien minimal (~5h/ha/an). Pour les non-agriculteurs, service de gestion intégrale.",
      en: "Continuous agronomic monitoring with minimal maintenance (~5h/ha/year). Full management service for non-farmers.",
    },
    service3Title: { fr: "Récolte", en: "Harvesting" },
    service3Desc: {
      fr: "À maturité (environ 7 ans), récolte durable de la biomasse : ~20 tonnes de matière sèche par hectare et par an.",
      en: "At maturity (around 7 years), sustainable biomass harvesting: ~20 tonnes of dry matter per hectare per year.",
    },
    service4Title: { fr: "Commercialisation", en: "Sales & marketing" },
    service4Desc: {
      fr: "BambooImpact commercialise vos crédits carbone et votre biomasse. Construction, isolation, textile, alimentation : nous valorisons chaque produit.",
      en: "BambooImpact sells your carbon credits and biomass. Construction, insulation, textiles, food: we maximize every product.",
    },
    service5Title: { fr: "Certification carbone", en: "Carbon certification" },
    service5Desc: {
      fr: "Certification via Agrocarbone, validation par Bureau VERITAS. Traçabilité et crédibilité garanties pour chaque tonne de CO₂.",
      en: "Certification through Agrocarbone, validated by Bureau VERITAS. Guaranteed traceability and credibility for every tonne of CO₂.",
    },

    // Business model with commissions
    businessTitle: { fr: "Un modèle transparent et rentable", en: "A transparent, profitable model" },
    businessSubtitle: {
      fr: "Le propriétaire finance la plantation. BambooImpact gère tout et prend une commission sur les revenus générés.",
      en: "The landowner funds the planting. BambooImpact handles everything and takes a commission on generated revenue.",
    },
    bizFundingTitle: { fr: "Financement", en: "Funding" },
    bizFundingDesc: {
      fr: "Le propriétaire investit dans la plantation. BambooImpact assure la mise en œuvre complète : plantation, entretien, récolte et commercialisation.",
      en: "The landowner invests in the planting. BambooImpact ensures full implementation: planting, maintenance, harvesting, and sales.",
    },
    bizCarbonTitle: { fr: "Revenus carbone", en: "Carbon revenue" },
    bizCarbonFarmer: {
      fr: "Agriculteur : 70% pour vous, 30% pour BambooImpact",
      en: "Farmer: 70% for you, 30% for BambooImpact",
    },
    bizCarbonPrivate: {
      fr: "Propriétaire privé : 55% pour vous, 45% pour BambooImpact",
      en: "Private owner: 55% for you, 45% for BambooImpact",
    },
    bizBiomassTitle: { fr: "Revenus biomasse", en: "Biomass revenue" },
    bizBiomassFarmer: {
      fr: "Agriculteur : 80% pour vous, 20% pour BambooImpact",
      en: "Farmer: 80% for you, 20% for BambooImpact",
    },
    bizBiomassPrivate: {
      fr: "Propriétaire privé : 50% pour vous, 50% pour BambooImpact",
      en: "Private owner: 50% for you, 50% for BambooImpact",
    },
    bizTimelineTitle: { fr: "Premiers revenus", en: "First revenues" },
    bizTimelineDesc: {
      fr: "Les revenus carbone débutent dès la première année. La biomasse génère des revenus à partir de la 7ème année, à maturité de la plantation.",
      en: "Carbon revenues start from year one. Biomass generates income from year 7, once the plantation reaches maturity.",
    },

    // Why plant bamboo
    whyTitle: { fr: "Pourquoi planter du bambou ?", en: "Why plant bamboo?" },
    whySubtitle: {
      fr: "Une culture pérenne et résiliente pour diversifier vos revenus et valoriser vos terres.",
      en: "A perennial, resilient crop to diversify your income and enhance your land.",
    },
    card1Title: { fr: "Nouvelle source de revenus", en: "New revenue stream" },
    card1Desc: {
      fr: "Crédits carbone dès l'année 1, biomasse à partir de 7 ans. Deux flux de revenus complémentaires et durables.",
      en: "Carbon credits from year 1, biomass from year 7. Two complementary, sustainable revenue streams.",
    },
    card2Title: { fr: "Diversification agricole", en: "Farm diversification" },
    card2Desc: {
      fr: "Ajoutez une culture pérenne nécessitant peu d'entretien (~5h/ha/an). Le bambou résiste au gel et produit pendant des décennies.",
      en: "Add a perennial crop requiring minimal maintenance (~5h/ha/year). Bamboo withstands frost and produces for decades.",
    },
    card3Title: { fr: "Valorisation de vos terres", en: "Land enhancement" },
    card3Desc: {
      fr: "Transformez des parcelles peu productives en actif rentable. Le bambou restaure la fertilité des sols et lutte contre l'érosion.",
      en: "Turn underperforming plots into a profitable asset. Bamboo restores soil fertility and fights erosion.",
    },
    card4Title: { fr: "Accompagnement sur mesure", en: "Tailored support" },
    card4Desc: {
      fr: "Agriculteur ou propriétaire non-exploitant : nous adaptons notre accompagnement avec un suivi personnalisé.",
      en: "Farmer or non-farming landowner: we tailor our support with personalized monitoring.",
    },
    card5Title: { fr: "Culture à long terme", en: "Long-term crop" },
    card5Desc: {
      fr: "Plantation unique qui produit pendant des décennies. Un investissement durable pour les générations futures.",
      en: "One-time planting that produces for decades. A lasting investment for future generations.",
    },

    // How it works
    howTitle: { fr: "Comment ça fonctionne", en: "How it works" },
    howSubtitle: {
      fr: "Un processus simple et transparent, en 4 étapes.",
      en: "A simple, transparent 4-step process.",
    },
    step1Title: { fr: "Analyse de votre parcelle", en: "Land assessment" },
    step1Desc: {
      fr: "Étude gratuite du potentiel de votre terrain en Wallonie (minimum 1 hectare) : sol, exposition, accessibilité.",
      en: "Free assessment of your land's potential in Wallonia (minimum 1 hectare): soil, exposure, accessibility.",
    },
    step2Title: { fr: "Plantation et financement", en: "Planting and funding" },
    step2Desc: {
      fr: "Vous financez la plantation. 625 plants par hectare mis en terre selon des techniques optimisées.",
      en: "You fund the planting. 625 plants per hectare using optimized techniques.",
    },
    step3Title: { fr: "Gestion complète", en: "Full management" },
    step3Desc: {
      fr: "Entretien, suivi agronomique et accompagnement technique en partenariat avec Bamboologic.",
      en: "Maintenance, agronomic monitoring, and technical support in partnership with Bamboologic.",
    },
    step4Title: { fr: "Revenus et certification", en: "Revenue & certification" },
    step4Desc: {
      fr: "Certification carbone (Agrocarbone + Bureau VERITAS), commercialisation de la biomasse. Premiers revenus estimés entre 4 et 7 ans.",
      en: "Carbon certification (Agrocarbone + Bureau VERITAS), biomass sales. First revenues estimated between 4 and 7 years.",
    },
    howNote: {
      fr: "Ce projet s'inscrit dans une vision de long terme. Les revenus se construisent progressivement à mesure que la bambouseraie atteint sa maturité.",
      en: "This project is built for the long term. Revenues grow progressively as the bamboo plantation reaches maturity.",
    },

    // Environmental Impact
    envTitle: { fr: "Impact écologique", en: "Ecological impact" },
    envSubtitle: {
      fr: "Le bambou : une solution naturelle face aux défis environnementaux.",
      en: "Bamboo: a natural solution to environmental challenges.",
    },
    env1Title: { fr: "Séquestration carbone massive", en: "Massive carbon sequestration" },
    env1Desc: {
      fr: "~100 tonnes de CO₂ captées par hectare et par an. L'un des végétaux les plus efficaces au monde pour la captation carbone.",
      en: "~100 tonnes of CO₂ captured per hectare per year. One of the most effective plants in the world for carbon capture.",
    },
    env2Title: { fr: "Restauration des sols", en: "Soil restoration" },
    env2Desc: {
      fr: "Système racinaire dense qui lutte contre l'érosion, stabilise les sols fragiles et améliore leur structure organique.",
      en: "Dense root system that fights erosion, stabilizes fragile soils, and improves their organic structure.",
    },
    env3Title: { fr: "Biodiversité & eau", en: "Biodiversity & water" },
    env3Desc: {
      fr: "Les bambouseraies créent des habitats pour la faune locale et contribuent à la filtration naturelle des eaux.",
      en: "Bamboo groves create habitats for local wildlife and contribute to natural water filtration.",
    },
    env4Title: { fr: "Alternative aux fossiles", en: "Alternative to fossil resources" },
    env4Desc: {
      fr: "La biomasse de bambou remplace des matériaux à forte empreinte carbone dans la construction, le textile et l'isolation.",
      en: "Bamboo biomass replaces high-carbon-footprint materials in construction, textiles, and insulation.",
    },
    env5Title: { fr: "Filtration de l'eau", en: "Water filtration" },
    env5Desc: {
      fr: "Le bambou filtre naturellement les eaux de ruissellement, contribuant à la préservation de la qualité des nappes phréatiques.",
      en: "Bamboo naturally filters runoff water, helping preserve groundwater quality.",
    },

    // Certification
    certTitle: { fr: "Certification carbone", en: "Carbon certification" },
    certSubtitle: {
      fr: "Un processus rigoureux pour garantir la crédibilité de chaque tonne de CO₂ séquestrée.",
      en: "A rigorous process to guarantee the credibility of every tonne of CO₂ sequestered.",
    },
    certAgroTitle: { fr: "Certifié par Agrocarbone", en: "Certified by Agrocarbone" },
    certAgroDesc: {
      fr: "Méthodologie de certification reconnue pour la quantification des crédits carbone issus de cultures pérennes.",
      en: "Recognized certification methodology for quantifying carbon credits from perennial crops.",
    },
    certVeritasTitle: { fr: "Validé par Bureau VERITAS", en: "Validated by Bureau VERITAS" },
    certVeritasDesc: {
      fr: "Audit indépendant et vérification par un organisme international de certification, garantissant transparence et fiabilité.",
      en: "Independent audit and verification by an international certification body, ensuring transparency and reliability.",
    },

    // Bamboologic partnership
    bamboologicTitle: { fr: "En partenariat avec Bamboologic", en: "In partnership with Bamboologic" },
    bamboologicSubtitle: {
      fr: "Notre partenaire technique pour une expertise de terrain inégalée.",
      en: "Our technical partner for unmatched field expertise.",
    },
    bamboologic1: { fr: "Fourniture des plants Phyllostachys", en: "Supply of Phyllostachys plants" },
    bamboologic2: { fr: "Expertise technique sur la culture du bambou", en: "Technical expertise on bamboo cultivation" },
    bamboologic3: { fr: "Aide à la certification carbone", en: "Carbon certification support" },
    bamboologic4: { fr: "Support pour la transformation et commercialisation", en: "Support for processing and sales" },
    bamboologicCta: { fr: "Découvrir Bamboologic", en: "Discover Bamboologic" },

    // Future vision
    futureTitle: { fr: "Notre ambition", en: "Our ambition" },
    futureSubtitle: {
      fr: "Construire une filière locale de transformation du bambou.",
      en: "Building a local bamboo processing industry.",
    },
    futureDesc: {
      fr: "BambooImpact a pour ambition de développer une filière locale de transformation du bambou en Wallonie. En créant cette chaîne de valeur locale, nous renforçons l'économie circulaire tout en réduisant l'empreinte carbone liée aux importations.",
      en: "BambooImpact aims to develop a local bamboo processing industry in Wallonia. By creating this local value chain, we strengthen the circular economy while reducing the carbon footprint of imports.",
    },
    futureItems: {
      fr: [
        "Construction : panneaux lamellés, poutres, bardages",
        "Isolation : fibres naturelles et matériaux biosourcés",
        "Textile : fibres pour l'industrie vestimentaire",
        "Alimentation : pousses comestibles de bambou",
        "Cosmétique : extraits et composants naturels",
        "Papeterie : pâte à papier et emballages",
        "Mobilier : meubles et objets design en bambou",
        "Phytoremédiation : dépollution naturelle des sols",
      ],
      en: [
        "Construction: laminated panels, beams, cladding",
        "Insulation: natural fibers and bio-based materials",
        "Textile: fibers for the clothing industry",
        "Food: edible bamboo shoots",
        "Cosmetics: natural extracts and components",
        "Paper: pulp and packaging",
        "Furniture: bamboo furniture and design objects",
        "Phytoremediation: natural soil decontamination",
      ],
    },

    // Vision "Pourquoi BambooImpact"
    visionTitle: { fr: "Pourquoi BambooImpact ?", en: "Why BambooImpact?" },
    visionSubtitle: {
      fr: "Une vision long terme pour une filière bambou 100% wallonne.",
      en: "A long-term vision for a 100% Walloon bamboo industry.",
    },
    vision1: { fr: "Développer une filière locale de bambou en Wallonie", en: "Develop a local bamboo industry in Wallonia" },
    vision2: { fr: "Réduire les importations de bambou asiatique en Europe", en: "Reduce Asian bamboo imports in Europe" },
    vision3: { fr: "Créer une économie circulaire locale autour du bambou", en: "Create a local circular economy around bamboo" },
    vision4: { fr: "Contribuer à une agriculture plus résiliente et diversifiée", en: "Contribute to more resilient, diversified agriculture" },
    vision5: { fr: "Captation carbone certifiée au service du climat", en: "Certified carbon capture serving the climate" },

    // Urgency / scarcity
    urgencyTitle: { fr: "Places limitées", en: "Limited availability" },
    urgencyDesc: {
      fr: "Nous sélectionnons rigoureusement chaque parcelle. Le nombre de projets est volontairement limité chaque année pour garantir un accompagnement de qualité.",
      en: "We rigorously select each plot. The number of projects is intentionally limited each year to ensure quality support.",
    },

    // CTA
    ctaTitle: { fr: "Prêt à valoriser vos terres ?", en: "Ready to unlock your land's potential?" },
    ctaDesc: {
      fr: "Propriétaire de terrain agricole en Wallonie ? Recevez une étude gratuite de votre parcelle.",
      en: "Agricultural landowner in Wallonia? Get a free assessment of your plot.",
    },
    ctaButton: { fr: "Recevoir une étude gratuite", en: "Get a free assessment" },
    ctaButton2: { fr: "Planifier un appel", en: "Schedule a call" },
    ctaButton3: { fr: "Devenir partenaire", en: "Become a partner" },
  },
  calc: {
    title: { fr: "Simulez vos revenus", en: "Simulate your revenue" },
    subtitle: {
      fr: "Estimez vos revenus carbone et biomasse sur 10 ans selon votre situation.",
      en: "Estimate your carbon and biomass revenue over 10 years based on your situation.",
    },
    hectares: { fr: "Nombre d'hectares", en: "Number of hectares" },
    hectaresNote: { fr: "Minimum 1 hectare", en: "Minimum 1 hectare" },
    userType: { fr: "Vous êtes…", en: "You are…" },
    farmer: { fr: "Agriculteur", en: "Farmer" },
    private: { fr: "Propriétaire privé (non-agriculteur)", en: "Private landowner (non-farmer)" },
    carbonTotal: { fr: "Revenus carbone sur 10 ans", en: "Carbon revenue over 10 years" },
    biomassTotal: { fr: "Revenus biomasse sur 10 ans", en: "Biomass revenue over 10 years" },
    totalRevenue: { fr: "Revenus totaux estimés sur 10 ans", en: "Estimated total revenue over 10 years" },
    chartTitle: { fr: "Évolution des revenus sur 10 ans", en: "Revenue evolution over 10 years" },
    disclaimer: {
      fr: "* Estimations basées sur ~100 t CO₂/ha/an, ~20 t biomasse/ha/an à maturité, prix indicatifs de 30 €/t CO₂ et 150 €/t biomasse. Résultats réels variables.",
      en: "* Estimates based on ~100 t CO₂/ha/year, ~20 t biomass/ha/year at maturity, indicative prices of €30/t CO₂ and €150/t biomass. Actual results may vary.",
    },
    commFarmer: {
      fr: "Commission agriculteur : 30% carbone, 20% biomasse. Vous conservez 70% des revenus carbone et 80% de la biomasse.",
      en: "Farmer commission: 30% carbon, 20% biomass. You keep 70% of carbon revenue and 80% of biomass.",
    },
    commPrivate: {
      fr: "Commission propriétaire privé : 45% carbone, 50% biomasse. Vous conservez 55% des revenus carbone et 50% de la biomasse.",
      en: "Private owner commission: 45% carbon, 50% biomass. You keep 55% of carbon revenue and 50% of biomass.",
    },
  },
  project: {
    title: { fr: "Le Projet BambooImpact", en: "The BambooImpact Project" },
    subtitle: {
      fr: "Un modèle innovant qui accompagne les propriétaires de terrains agricoles en Wallonie dans la plantation de bambou, la certification carbone et la valorisation de la biomasse.",
      en: "An innovative model supporting agricultural landowners in Wallonia with bamboo planting, carbon certification, and biomass commercialization.",
    },
    howTitle: { fr: "Comment ça fonctionne", en: "How it works" },
    step1Title: { fr: "Identification des terres", en: "Land identification" },
    step1Desc: {
      fr: "Nous identifions des terrains agricoles disponibles en Wallonie, en collaboration avec des agriculteurs et des propriétaires fonciers.",
      en: "We identify available agricultural land in Wallonia, in collaboration with farmers and landowners.",
    },
    step2Title: { fr: "Plantation du bambou", en: "Bamboo planting" },
    step2Desc: {
      fr: "625 plants Phyllostachys par hectare sont mis en terre selon des techniques optimisées pour le climat wallon.",
      en: "625 Phyllostachys plants per hectare are planted using techniques optimized for the Walloon climate.",
    },
    step3Title: { fr: "Suivi & entretien", en: "Monitoring & maintenance" },
    step3Desc: {
      fr: "Un suivi régulier assure la bonne croissance des bambous. Pour les non-agriculteurs, service de gestion intégrale.",
      en: "Regular monitoring ensures healthy bamboo growth. For non-farmers, we offer a full management service.",
    },
    step4Title: { fr: "Valorisation économique", en: "Economic valorization" },
    step4Desc: {
      fr: "Vente de crédits carbone certifiés (Agrocarbone + Bureau VERITAS), production et commercialisation de la biomasse.",
      en: "Sale of certified carbon credits (Agrocarbone + Bureau VERITAS), biomass production and sales.",
    },
    benefitsTitle: { fr: "Avantages pour les propriétaires", en: "Benefits for landowners" },
    benefit1: { fr: "Revenus complémentaires stables et durables", en: "Stable, sustainable supplementary income" },
    benefit2: { fr: "Entretien minimal (~5 heures par hectare par an)", en: "Minimal maintenance (~5 hours per hectare per year)" },
    benefit3: { fr: "Valorisation de terres sous-exploitées", en: "Enhancement of underused land" },
    benefit4: { fr: "Service clé en main pour les non-agriculteurs", en: "Turnkey service for non-farmers" },
    benefit5: { fr: "Amélioration de la biodiversité locale", en: "Improving local biodiversity" },
    benefit6: { fr: "Accès au marché des crédits carbone certifiés", en: "Access to the certified carbon credit market" },
    // Vision section
    whyBiTitle: { fr: "Pourquoi BambooImpact ?", en: "Why BambooImpact?" },
    whyBiSubtitle: {
      fr: "Notre vision va au-delà d'une simple plantation. Nous construisons une filière bambou locale en Wallonie.",
      en: "Our vision goes beyond planting. We're building a local bamboo industry in Wallonia.",
    },
    whyBi1: { fr: "Vision long terme : développer une filière complète du bambou en Wallonie", en: "Long-term vision: developing a complete bamboo industry in Wallonia" },
    whyBi2: { fr: "Réduire la dépendance aux importations de bambou asiatique", en: "Reducing dependence on Asian bamboo imports" },
    whyBi3: { fr: "Créer une économie circulaire locale : de la plantation à la transformation", en: "Creating a local circular economy: from planting to processing" },
    whyBi4: { fr: "Contribuer à une agriculture wallonne plus résiliente et diversifiée", en: "Contributing to a more resilient, diversified Walloon agriculture" },
    whyBi5: { fr: "Certification carbone rigoureuse pour un impact mesurable", en: "Rigorous carbon certification for measurable impact" },
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
      fr: "Le bambou s'impose dans une multitude de secteurs en Europe : construction, textile, alimentation, cosmétique, énergie. Présent dans la quasi-totalité des foyers européens sous diverses formes, il fait face à une demande qui dépasse largement la production locale. Cultiver du bambou en Europe représente une opportunité stratégique majeure.",
      en: "Bamboo is gaining ground across a multitude of sectors in Europe: construction, textiles, food, cosmetics, and energy. Found in nearly every European household in various forms, demand far outstrips local production. Growing bamboo in Europe represents a major strategic opportunity.",
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
    ctaButton: { fr: "Nous contacter", en: "Contact us" },
    whyTitle: { fr: "Pourquoi devenir partenaire ?", en: "Why become a partner?" },
    reason1: { fr: "Impact écologique mesurable et certifié", en: "Measurable and certified ecological impact" },
    reason2: { fr: "Revenus durables grâce aux crédits carbone", en: "Sustainable revenue through carbon credits" },
    reason3: { fr: "Valorisation de votre image de marque", en: "Enhanced brand image" },
    reason4: { fr: "Contribution concrète à la transition écologique", en: "Concrete contribution to ecological transition" },
  },
  contact: {
    title: { fr: "Contactez-nous", en: "Contact Us" },
    subtitle: {
      fr: "Propriétaire de terrain, investisseur ou partenaire potentiel ? Parlons de votre projet.",
      en: "Landowner, investor, or potential partner? Let's discuss your project.",
    },
    name: { fr: "Nom complet", en: "Full name" },
    email: { fr: "Adresse e-mail", en: "Email address" },
    type: { fr: "Vous êtes…", en: "You are…" },
    typeOptions: {
      fr: ["Agriculteur", "Propriétaire foncier (non-agriculteur)", "Investisseur / Partenaire", "Entreprise", "Autre"],
      en: ["Farmer", "Landowner (non-farmer)", "Investor / Partner", "Company", "Other"],
    },
    message: { fr: "Votre message", en: "Your message" },
    send: { fr: "Envoyer le message", en: "Send message" },
    sent: { fr: "Message envoyé ! Nous vous répondrons rapidement.", en: "Message sent! We'll get back to you soon." },
    info: { fr: "Informations de contact", en: "Contact information" },
  },
  footer: {
    tagline: {
      fr: "Plantations de bambou en Wallonie.",
      en: "Bamboo plantations in Wallonia.",
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
