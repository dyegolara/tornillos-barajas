import { Box, Card, Flex, Heading, Section, Text } from "@radix-ui/themes";

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
    </Flex>
  );
}
