import {
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

import Screws from "@/assets/screws.png";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Section size={{ initial: "2", sm: "3" }}>
        <Flex justify="center">
          <Heading
            size={{ initial: "7", sm: "8" }}
            mb={{ initial: "4", sm: "5" }}
            style={{ textAlign: "center" }}
          >
            Tornillos y Remaches Barajas S.A de C.V.
          </Heading>
        </Flex>
        <Card variant="classic" size={{ initial: "2", sm: "3" }}>
          <Flex direction={{ initial: "column", sm: "row" }} gap="4">
            <Inset side={{ initial: "top", sm: "left" }}>
              <Flex justify={"center"} align={"center"}>
                <Image
                  src={Screws}
                  alt={"Tornillos"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </Flex>
            </Inset>
            <Flex gap="4" direction={"column"}>
              <Text style={{ flex: 1 }}>
                <Text weight="bold">
                  Tornillos y Remaches Barajas S.A de C.V.
                </Text>{" "}
                se pone a su disposición para el diseño y desarrollo de
                cualquier tornillo o artículo para solucionar su problema de
                fijación, contamos con más de 15 años de presencia en la
                Industria Metal-Mecánica.
              </Text>
              <Flex>
                <Separator size={"4"} />
              </Flex>
              <Section size={"1"} style={{ flex: 1, alignContent: "center" }}>
                <Flex gap={"4"}>
                  <Button
                    size={"4"}
                    variant={"outline"}
                    style={{ flex: 1 }}
                    asChild
                  >
                    <Link href={"/about"}>Conócenos</Link>
                  </Button>
                  <Button size={"4"} style={{ flex: 1 }} asChild>
                    <Link href={"/contact"}>Contacto</Link>
                  </Button>
                </Flex>
              </Section>
            </Flex>
          </Flex>
        </Card>
      </Section>
      <Section size="1">
        <Flex justify="center">
          <Heading
            size={{ initial: "6", sm: "7" }}
            mb={{ initial: "4", sm: "5" }}
          >
            Contacto
          </Heading>
        </Flex>
        <Contact />
      </Section>
    </>
  );
}
