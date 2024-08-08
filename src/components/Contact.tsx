import { Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function Contact() {
  return (
    <Flex gap="4">
      <Card asChild style={{ flex: 1 }}>
        <address>
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
            <a href={`tel:53706821`}> 53-07-68-21</a>
          </Text>
        </address>
      </Card>
      <Card style={{ flex: 1 }} asChild>
        <address>
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
            <a href={`tel:55626134`}> 5562-6134</a>
            <br />
            <a href={`tel:5522705205`}> 044-55-2270-5205</a>
          </Text>
        </address>
      </Card>
    </Flex>
  );
}
