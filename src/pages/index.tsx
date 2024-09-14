import DefaultLayout from "@/layouts/default";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Box from "../box.json";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { InfluencerData } from "@/influencers/influencers";

export default function IndexPage() {
  const lottieRef = useRef<any>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { param } = useParams<{ param: string }>();
  const influencer = InfluencerData.find(
    (influencer) => influencer.param === param
  );

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

  if (!influencer) {
    return (
      <DefaultLayout>
        <section className="flex flex-col h-[100vh] text-center items-center justify-center gap-4 py-8 md:py-10">
          <Image src="/logo.png" className="w-[200px] bg-[#113628] p-[20px]" />
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px]">
            Este posibil ca URL-ul să nu aparțină unui influencer.
            <br />
            Dacă ai primit un pachet de la noi, încearcă să accesezi
            https://nutrinoos-influencer-page.vercel.app/*prenumele tău cu
            litere mici*
          </h1>
        </section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col h-[full] text-center items-center justify-center gap-4 py-8 md:py-10">
        <Image src="/logo.png" className="w-[200px] bg-[#113628] p-[20px]" />
        <h1 className="text-[50px] sm:text-[65px] md:text-[80px] leading-[1.2em] mt-[50px] mb-[10px]">
          dragă {influencer.name}, abia așteptăm să vezi ce ți-am pregătit!
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-[24px]">
            deschide și citește despre produsele tale
          </p>
          <FontAwesomeIcon icon={faArrowDown} color="#113628" size="2xl" />
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
            className="bg-[#113628] p-[50px]"
            size="5xl"
            scrollBehavior={"inside"}
          >
            <ModalContent>
              {() => (
                <>
                  <ModalHeader className="flex flex-col text-[#FFFAF6] font-[800]">
                    Produsele tale
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-[#FFFAF6]">
                      {influencer.products.map((item) => (
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-[300px] h-[300px] md:w-[150px] md:h-[150px]">
                            <Image src={item.image} />
                          </div>
                          <div className="text-center text-[20px] font-[800] mt-[10px] mb-[10px]">
                            {item.name}
                          </div>
                          <div className="text-center">{item.description}</div>
                          <Button
                            as={Link}
                            target="_blank"
                            variant="bordered"
                            className="text-[#FFFAF6] mt-[15px]"
                            href={item.url}
                          >
                            Vezi pe site
                          </Button>
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
          <p className="text-[28px]">
            ți-am personalizat un cod de 10% reducere
          </p>
          <p className="text-[46px] text-[#11DB20]">
            {influencer.discountCode}
          </p>
          <p className="text-[28px]">pe care îl poți dărui comunității tale</p>
          <p className="text-[18px]">
            codul este valabil până în data de 31/10/2024
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
