import { Box } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type Props = {
  src: string | StaticImageData;
  alt: string;
  onClick?: () => void;
};

const styles = {
  container: {
    aspectRatio: "1 / 1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--color-background)",
    height: "100%",
    borderRadius: "var(--radius-3)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    overflow: "hidden",
  } as CSSProperties,
};

export default function SquareImage({ src, alt, onClick }: Props) {
  return (
    <Box style={styles.container} onClick={onClick}>
      <Image src={src} alt={alt} style={styles.image} />
    </Box>
  );
}
