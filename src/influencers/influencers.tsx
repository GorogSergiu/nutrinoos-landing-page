interface InfluencerDataItem {
  param: string;
  name: string;
  discountCode: string;
  products: { image: string; name: string; description: string }[];
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
      },
      {
        image: "/cafeabb.png",
        name: "Cafea",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
      },
      {
        image: "/fpp.png",
        name: "Formula pentru par",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
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
        name: "Baton",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
      },
      {
        image: "/cafeabb.png",
        name: "Cafea",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
      },
      {
        image: "/fpp.png",
        name: "Formula pentru par",
        description:
          " Bucură-te de echilibrul perfect între bunăstare și răsfăț cu gustarea Chlorella. Bogată în fier natural și proteine, această combinație delicioasă de pudră de chlorella și cacao criollo combate oboseala, oferindu-ți în același timp o plăcere gustativă, pentru o pauză sănătoasă care îți redă energia și vitalitatea.",
      },
    ],
  },
];
