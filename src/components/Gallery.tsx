"use client";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Card, Dialog, Flex, Grid, IconButton } from "@radix-ui/themes";
import { useState } from "react";

import Img0 from "@/assets/img.png";
import Img1 from "@/assets/img_1.png";
import Img2 from "@/assets/img_2.png";
import Img3 from "@/assets/img_3.png";
import Img4 from "@/assets/img_4.png";
import Img5 from "@/assets/img_5.png";
import Img6 from "@/assets/img_6.png";
import Img7 from "@/assets/img_7.png";
import Img8 from "@/assets/img_8.png";
import SquareImage from "@/components/SquareImage";

const images = [
  { src: Img0, alt: "Maquinaria" },
  { src: Img1, alt: "Forjadora de dos golpes" },
  { src: Img2, alt: "Forjadora de dos golpes" },
  { src: Img3, alt: "Roladora de dado plano o peine plano" },
  { src: Img4, alt: "Roladora de dado plano o peine plano" },
  { src: Img5, alt: "Kit para el proceso de forja" },
  { src: Img6, alt: "Peines o dados para el proceso de cuerda" },
  { src: Img7, alt: "Tipos de cuerda o rosca" },
  {
    src: Img8,
    alt: "Capacidad de producción con tiempos muertos cortos  2 millones mensuales",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Card variant="surface" size={{ initial: "2", sm: "3" }}>
      <Grid columns="3" gap="3">
        {images.map((image, index) => (
          <SquareImage
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => {
              setSelectedImage(index);
              setOpen(true);
            }}
          />
        ))}
      </Grid>
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Content size={"4"}>
          <Flex justify="between" align="center" mb="3">
            <Dialog.Title style={{ margin: 0 }}>
              {images[selectedImage].alt}
            </Dialog.Title>
            <Dialog.Close>
              <IconButton variant={"surface"}>
                <Cross1Icon />
              </IconButton>
            </Dialog.Close>
          </Flex>
          <SquareImage
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
          />
        </Dialog.Content>
      </Dialog.Root>
    </Card>
  );
}
