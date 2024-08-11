import { Flex, Heading, Section } from "@radix-ui/themes";

import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <Section size={{ initial: "1", sm: "2" }}>
      <Flex justify="center">
        <Heading
          size={{ initial: "7", sm: "8" }}
          mb={{ initial: "4", sm: "5" }}
        >
          Contacto
        </Heading>
      </Flex>
      <Contact />
    </Section>
  );
}
