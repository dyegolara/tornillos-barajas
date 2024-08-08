import { Card, Flex, Heading, Section, Text } from "@radix-ui/themes";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Flex direction="column">
      <Flex justify="center">
        <Heading size="9">Tornillos Barajas</Heading>
      </Flex>
      <Section>
        <Card variant="classic" size="3">
          <Text>
            Tornillos y Remaches Barajas S.A de C.V se pone a su disposición
            para el diseño y desarrollo de cualquier tornillo o artículo para
            solucionar su problema de fijación
          </Text>
        </Card>
      </Section>
      <Section>
        <Flex justify="center">
          <Heading size="8" mb="4">
            Contacto
          </Heading>
        </Flex>
        <Contact />
      </Section>
    </Flex>
  );
}
