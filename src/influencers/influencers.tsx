interface InfluencerDataItem {
  param: string;
  name: string;
  discountCode: string;
  products: { image: string; name: string; description: string; url: string }[];
}

export const InfluencerData: InfluencerDataItem[] = [
  {
    param: "ilinca",
    name: "Ilinca",
    discountCode: "ilinca10",
    products: [
      {
        image: "/magneziu.png",
        name: "Magneziu Bisglicinat",
        description:
          "Formulă unică pe bază de magneziu cu absorbție ridicată, taurină și vitamina B6 bioactivă. Ideală pentru reducerea oboselii și stresului și pentru susținerea unei funcții musculare normale.",
        url: "https://www.nutrinoos.ro/produse/magneziu-bisglicinat/",
      },
      {
        image: "/ashwagandha.png",
        name: "Ashwagandha Organică",
        description:
          "Ashwagandha Organică de la Novoma este un supliment alimentar formulat cu cea mai calitativă formă de ashwagandha disponibilă pe piață (care a fost supusă la 22 de studii clinice): extractul de rădăcini KSM-66®.",
        url: "https://www.nutrinoos.ro/produse/ashwagandha-organica/",
      },
      {
        image: "/immunity.png",
        name: "Immunity Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-immunity-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "giulia",
    name: "Giulia",
    discountCode: "giulia10",
    products: [
      {
        image: "/cafeabb.png",
        name: "Beauty Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-beauty-boost/",
      },
      {
        image: "/fpp.png",
        name: "Formulă pentru păr",
        description:
          "7 ingrediente atent selecționate pentru a contribui la obținerea unui păr mai puternic, mai lung și vizibil mai sănătos. Pe bază de keratină brevetată Cynatine® HNS. Formula îmbogățită cu biotină, arginină și nutrienți pentru păr.",
        url: "https://www.nutrinoos.ro/produse/formula-pentru-par/",
      },
      {
        image: "/acidhial.png",
        name: "Acid Hialuronic",
        description:
          "Formulă 100% naturală cu acid hialuronic și vitamina C, pentru hidratare profundă, îmbunătățirea elasticității și reducerea ridurilor. Efecte rapide și de lungă durată.",
        url: "https://www.nutrinoos.ro/produse/acid-hialuronic/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "laurentia",
    name: "Laurenția",
    discountCode: "laurentia10",
    products: [
      {
        image: "/cafeabb.png",
        name: "Beauty Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-beauty-boost/",
      },
      {
        image: "/fpp.png",
        name: "Formulă pentru păr",
        description:
          "7 ingrediente atent selecționate pentru a contribui la obținerea unui păr mai puternic, mai lung și vizibil mai sănătos. Pe bază de keratină brevetată Cynatine® HNS. Formula îmbogățită cu biotină, arginină și nutrienți pentru păr.",
        url: "https://www.nutrinoos.ro/produse/formula-pentru-par/",
      },
      {
        image: "/acidhial.png",
        name: "Acid Hialuronic",
        description:
          "Formulă 100% naturală cu acid hialuronic și vitamina C, pentru hidratare profundă, îmbunătățirea elasticității și reducerea ridurilor. Efecte rapide și de lungă durată.",
        url: "https://www.nutrinoos.ro/produse/acid-hialuronic/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "oksana",
    name: "Oksana",
    discountCode: "oksana10",
    products: [
      {
        image: "/acidfolic.png",
        name: "Acid Folic",
        description:
          "Acid folic (vitamina B9) etichetat Quatrefolic®, în forma activă 5-MTHF. Benefic atât pentru femei, cât și pentru bărbați, în perioada concepției și în primul trimestru de sarcină.",
        url: "https://www.nutrinoos.ro/produse/acid-folic/",
      },
      {
        image: "/vitaminab12.png",
        name: "Vitamina B12",
        description:
          "Vitamina B12 în formă naturală și bio-activă (metilcobalamină). Susține reducerea oboselii și promovarea echilibrului nervos.",
        url: "https://www.nutrinoos.ro/produse/vitamina-b12/",
      },
      {
        image: "/spiritboost.png",
        name: "Spirit Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-spirit-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "claudia",
    name: "Claudia",
    discountCode: "claudia10",
    products: [
      {
        image: "/acidfolic.png",
        name: "Acid Folic",
        description:
          "Acid folic (vitamina B9) etichetat Quatrefolic®, în forma activă 5-MTHF. Benefic atât pentru femei, cât și pentru bărbați, în perioada concepției și în primul trimestru de sarcină.",
        url: "https://www.nutrinoos.ro/produse/acid-folic/",
      },
      {
        image: "/vitaminab12.png",
        name: "Vitamina B12",
        description:
          "Vitamina B12 în formă naturală și bio-activă (metilcobalamină). Susține reducerea oboselii și promovarea echilibrului nervos.",
        url: "https://www.nutrinoos.ro/produse/vitamina-b12/",
      },
      {
        image: "/spiritboost.png",
        name: "Spirit Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-spirit-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "roxana",
    name: "Roxana",
    discountCode: "roxana10",
    products: [
      {
        image: "/vitaminad3.png",
        name: "Vitamina D3",
        description:
          "Vitamina D3V® 2000 UI pură sub formă naturală (colecalciferol). Formă micro-encapsulată pentru o asimilare optimă. 100% vegetală (vitamina D extrasă din alge).",
        url: "https://www.nutrinoos.ro/produse/vitamina-d3/",
      },
      {
        image: "/omega3.png",
        name: "Omega 3",
        description:
          "Ulei de pește ultra-pur, concentrat în acizi grași esențiali omega-3 (90% trigliceride). Conține 800 mg EPA și 600 mg DHA pe doză. O cură de omega-3 este ideală pentru a satisface necesarul zilnic al organismului de acizi grași esențiali, susținând funcționarea normală a creierului și a inimii, precum și menținerea unei vederi normale.",
        url: "https://www.nutrinoos.ro/produse/omega-3/",
      },
      {
        image: "/vitalityboost.png",
        name: "Vitality Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-vitality-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "marius",
    name: "Marius",
    discountCode: "marius10",
    products: [
      {
        image: "/somn.png",
        name: "Formulă pentru somn",
        description:
          "Supliment alimentar pentru somn formulat cu melatonină cu eliberare treptată Melotime™ și extracte de plante atent selectate pentru acțiunea lor specifică asupra somnului.",
        url: "https://www.nutrinoos.ro/produse/formula-pentru-somn/",
      },
      {
        image: "/colagenmarin.png",
        name: "Colagen Marin",
        description:
          "Colagen Marin hidrolizat NatiCol® tip 1. Formulă sinergică cu Acid Hialuronic, Vitamine și Zinc. Favorizează frumusețea pielii, a părului și a unghiilor.",
        url: "https://www.nutrinoos.ro/produse/colagen-marin/",
      },
      {
        image: "/brainboost.png",
        name: "Brain Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-brain-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "razvan",
    name: "Răzvan",
    discountCode: "razvan10",
    products: [
      {
        image: "/magneziu.png",
        name: "Magneziu Bisglicinat",
        description:
          "Formulă unică pe bază de magneziu cu absorbție ridicată, taurină și vitamina B6 bioactivă. Ideală pentru reducerea oboselii și stresului și pentru susținerea unei funcții musculare normale.",
        url: "https://www.nutrinoos.ro/produse/magneziu-bisglicinat/",
      },
      {
        image: "/ashwagandha.png",
        name: "Ashwagandha Organică",
        description:
          "Ashwagandha Organică de la Novoma este un supliment alimentar formulat cu cea mai calitativă formă de ashwagandha disponibilă pe piață (care a fost supusă la 22 de studii clinice): extractul de rădăcini KSM-66®.",
        url: "https://www.nutrinoos.ro/produse/ashwagandha-organica/",
      },
      {
        image: "/immunity.png",
        name: "Immunity Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-immunity-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "miruna",
    name: "Miruna",
    discountCode: "miruna10",
    products: [
      {
        image: "/cafeabb.png",
        name: "Beauty Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-beauty-boost/",
      },
      {
        image: "/fpp.png",
        name: "Formulă pentru păr",
        description:
          "7 ingrediente atent selecționate pentru a contribui la obținerea unui păr mai puternic, mai lung și vizibil mai sănătos. Pe bază de keratină brevetată Cynatine® HNS. Formula îmbogățită cu biotină, arginină și nutrienți pentru păr.",
        url: "https://www.nutrinoos.ro/produse/formula-pentru-par/",
      },
      {
        image: "/acidhial.png",
        name: "Acid Hialuronic",
        description:
          "Formulă 100% naturală cu acid hialuronic și vitamina C, pentru hidratare profundă, îmbunătățirea elasticității și reducerea ridurilor. Efecte rapide și de lungă durată.",
        url: "https://www.nutrinoos.ro/produse/acid-hialuronic/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "anda",
    name: "Anda",
    discountCode: "anda10",
    products: [
      {
        image: "/spirulinabio.png",
        name: "Spirulină Bio",
        description:
          "Deshidratată și presată la rece, spirulina de la Novoma este bogată în proteine vegetale, minerale și vitamine. 16% Fitocianină.",
        url: "https://www.nutrinoos.ro/produse/spirulina-bio/",
      },
      {
        image: "/vitaminac.png",
        name: "Vitamina C",
        description:
          "Vitamina C 1000 mg etichetată Quali®-C (certificată european). Contribuie la reducerea oboselii și susține sistemul imunitar.",
        url: "https://www.nutrinoos.ro/produse/vitamina-c/",
      },
      {
        image: "/energyboost.png",
        name: "Energy Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-energy-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
  {
    param: "andreea",
    name: "Andreea",
    discountCode: "andreea10",
    products: [
      {
        image: "/magneziu.png",
        name: "Magneziu Bisglicinat",
        description:
          "Formulă unică pe bază de magneziu cu absorbție ridicată, taurină și vitamina B6 bioactivă. Ideală pentru reducerea oboselii și stresului și pentru susținerea unei funcții musculare normale.",
        url: "https://www.nutrinoos.ro/produse/magneziu-bisglicinat/",
      },
      {
        image: "/ashwagandha.png",
        name: "Ashwagandha Organică",
        description:
          "Ashwagandha Organică de la Novoma este un supliment alimentar formulat cu cea mai calitativă formă de ashwagandha disponibilă pe piață (care a fost supusă la 22 de studii clinice): extractul de rădăcini KSM-66®.",
        url: "https://www.nutrinoos.ro/produse/ashwagandha-organica/",
      },
      {
        image: "/immunity.png",
        name: "Immunity Boost",
        description:
          "Cafea solubilă îmbogățită cu extracte de ciuperci funcționale | 15 plicuri – 500 mg de extracte de plante adaptogene și ciuperci per cafea. Nu există diferență de gust față de cafeaua ta obișnuită!",
        url: "https://www.nutrinoos.ro/produse/cafea-immunity-boost/",
      },
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/batonchlorella.png",
        name: "Baton cu chlorella",
        description:
          "Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-chlorella/",
      },
    ],
  },
];
