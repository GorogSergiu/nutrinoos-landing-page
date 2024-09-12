import DefaultLayout from "@/layouts/default";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface InfluencerDataItem {
  param: string;
  name: string;
  discountCode: string;
  products: { image: string; name: string; description: string }[];
}

const InfluencerData: InfluencerDataItem[] = [
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
];

import Box from "../box.json";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";

export default function IndexPage() {
  const lottieRef = useRef<any>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
      onOpen;
    }
  };

  const handleDelayedOpen = () => {
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col text-center items-center justify-center gap-4 py-8 md:py-10">
        <Image src="/logo.png" className="w-[200px]" />
        <h1 className="text-[50px] sm:text-[65px] md:text-[80px]">
          Dragă {InfluencerData[0].name}, ne bucurăm să ne vedem
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-[24px]">
            Deschide și citește despre produsele tale
          </p>
          <FontAwesomeIcon icon={faArrowDown} color="white" size="2xl" />
          <motion.div
            onClick={handleDelayedOpen}
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Lottie
              onClick={handleClick}
              animationData={Box}
              loop={false}
              autoplay={false}
              lottieRef={lottieRef}
              className="w-[300px] h-[300px] cursor-pointer"
            />
          </motion.div>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-[#8ACE00] p-[50px]"
            size="5xl"
            scrollBehavior={"inside"}
          >
            <ModalContent>
              {() => (
                <>
                  <ModalHeader className="flex flex-col text-[black] font-[800]">
                    Produsele tale
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-[black]">
                      {InfluencerData[0].products.map((item) => (
                        <div>
                          <Image src={item.image} className="w-[600px]" />
                          <div className="text-center text-[20px] font-[800] mt-[10px] mb-[10px]">
                            {item.name}
                          </div>
                          <div className="text-center">{item.description}</div>
                        </div>
                      ))}
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <p className="text-[28px]">Îți oferim și un cod de 10% reducere</p>
          <p className="text-[46px]">{InfluencerData[0].discountCode}</p>
          <p className="text-[28px]">Îl poți dărui la cine dorești</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
