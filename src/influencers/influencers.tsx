interface InfluencerDataItem {
  param: string;
  name: string;
  discountCode: string;
  products: { image: string; name: string; description: string; url: string }[];
}

export const InfluencerData: InfluencerDataItem[] = [
  {
    param: "raluca",
    name: "Raluca",
    discountCode: "raluca10",
    products: [
      {
        image: "/baton.png",
        name: "Baton",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
        url: "",
      },
      {
        image: "/cafeabb.png",
        name: "Cafea",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
        url: "",
      },
      {
        image: "/fpp.png",
        name: "Formula pentru par",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
        url: "",
      },
    ],
  },
  {
    param: "giulia",
    name: "Giulia",
    discountCode: "giulia10",
    products: [
      {
        image: "/batonpolen.png",
        name: "Baton cu polen",
        description:
          "Bucură-te de armonia ideală între plăcere și sănătate cu gustarea Pollenia. Combinând polen, nuci caju și caise, această gustare cu note florale este o sursă naturală de energie, oferind un moment de vitalitate și bunăstare.",
        url: "https://www.nutrinoos.ro/produse/baton-cu-polen/",
      },
      {
        image: "/cafeabb.png",
        name: "Cafea Beauty Boost",
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
    ],
  },
];
