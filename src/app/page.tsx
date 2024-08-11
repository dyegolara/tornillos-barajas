import { Card, Flex, Heading, Section, Text } from "@radix-ui/themes";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Flex direction="column">
      <Section size={{ initial: "1", sm: "2" }}>
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
          <Text>
            <Text weight="bold">Tornillos y Remaches Barajas S.A de C.V.</Text>{" "}
            se pone a su disposición para el diseño y desarrollo de cualquier
            tornillo o artículo para solucionar su problema de fijación,
            contamos con más de 15 años de presencia en la Industria
            Metal-Mecánica.
          </Text>
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
    </Flex>
  );
}
