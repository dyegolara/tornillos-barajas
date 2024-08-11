import { MobileIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { PiBuildingOffice, PiFactory } from "react-icons/pi";

export default function Contact() {
  return (
    <>
      <Flex justify={"center"} mb={{ initial: "6", sm: "7" }}>
        <Button size="4" variant="solid" color="green" asChild>
          <NextLink href="https://wa.me/525522705205">
            <BsWhatsapp />
            Envíanos WhatsApp
          </NextLink>
        </Button>
      </Flex>
      <Flex gap="4" direction={{ initial: "column", sm: "row" }}>
        <Card asChild style={{ flex: 1 }} size={{ initial: "2", sm: "3" }}>
          <address>
            <Flex gap="1" direction="column">
              <Heading size="5">Planta:</Heading>
              <Text as="p">
                Calle Fresa esq. Limón
                <br />
                Colonia las Huertas, Naucalpan de Juárez
                <br />
                Estado de México
              </Text>
              <Text as="p">
                Teléfono:
                <br />
                <Link asChild>
                  <NextLink href={`tel:53706821`}>
                    <PiFactory /> 53-07-68-21
                  </NextLink>
                </Link>
              </Text>
            </Flex>
          </address>
        </Card>
        <Card asChild style={{ flex: 1 }} size={{ initial: "2", sm: "3" }}>
          <address>
            <Flex gap="1" direction="column">
              <Heading size="5">Oficinas:</Heading>
              <Text as="p">
                Arcadio Pagaza #2 Cto. Poetas
                <br />
                Cd. Satélite Naucalpan de Juárez
                <br />
                Estado de México. C.P. 53100
              </Text>
              <Text as="p">
                Teléfonos:
                <br />
                <Link asChild>
                  <NextLink href={`tel:55626134`}>
                    <PiBuildingOffice /> 5562-6134
                  </NextLink>
                </Link>
                <br />
                <Link asChild>
                  <NextLink href={`tel:5522705205`}>
                    <MobileIcon /> 044-55-2270-5205
                  </NextLink>
                </Link>
              </Text>
            </Flex>
          </address>
        </Card>
      </Flex>
    </>
  );
}
