import { Card, Flex, Heading, Section, Text } from "@radix-ui/themes";

export default function About() {
  return (
    <Section size={{ initial: "1", sm: "2" }}>
      <Flex direction="column" gap="4">
        <Flex justify="center">
          <Heading
            size={{ initial: "7", sm: "8" }}
            mb={{ initial: "4", sm: "5" }}
          >
            Conócenos
          </Heading>
        </Flex>
        <Card variant="classic" size={{ initial: "2", sm: "3" }}>
          <Text as={"p"} mb={"3"}>
            <Text weight="bold">Tornillos y Remaches Barajas S.A de C.V.</Text>{" "}
            pone a su disposición nuestros productos y servicios, contamos con
            más de 15 años de presencia en la Industria Metal-Mecánica.
          </Text>
          <Text as={"p"}>
            Somos una empresa dedicada a la fabricación y comercialización de
            todo tipo de Tornillos, Tuercas, Remaches, Roldanas, Abrazaderas,
            todo tipo de cabezas de tornillos y cualquier longitud.. Somos
            fabricantes en cualquier medida en acero al carbón, en acero
            inoxidable, aluminio, cobre, bronce, latón y hacemos los acabados
            que nos soliciten como galvanizado natural, verde, negro, cobrizado,
            cadminizado, niquelado, etc. Nos hemos especializado en la
            fabricación de tornillos con medidas y características muy
            específicas que requieran nuestros clientes.
          </Text>
        </Card>

        <Card variant="classic" size={{ initial: "2", sm: "3" }}>
          <ul style={{ margin: 0 }}>
            <li>
              <Text>
                Empresa dedicada fundamentalmente a la fabricación de tornillos
                y pijas.
              </Text>
            </li>
            <li>
              <Text>
                Se fabrican todo tipo de cabeza y cuerdas con las inserciones
                solicitadas por el cliente.
              </Text>
            </li>
            <li>
              <Text>
                Se fabrican tornillos de hasta un diámetro no mayor de 5/16” y
                un largo no mayor a 1 ¾”.
              </Text>
            </li>
            <li>
              <Text>
                El producto elaborado trae consigo las más altas normas de
                calidad y aseguramiento, ya que la empresa cuenta con personal
                calificado para la supervisión de estos productos.
              </Text>
            </li>
            <li>
              <Text>
                Todos los productos pasan por el procesos de tratamiento térmico
                (en caso de ser necesario).
              </Text>
            </li>
            <li>
              <Text>
                La materia prima con que se elaboran estos productos trae
                consigo un certificado de calidad. Este certificado no permite
                que las propiedades mecánicas y químicas se salgan de sus
                limites mínimos y máximos.
              </Text>
            </li>
            <li>
              <Text>
                La empresa ofrece el servicio de todo tipo de acabados, para lo
                cual recurre a empresas que se dedican a la elaboración de los
                mismos acabados.
              </Text>
            </li>
          </ul>
        </Card>
      </Flex>
    </Section>
  );
}
