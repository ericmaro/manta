import { Image, Container } from "@mantine/core";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export function LandingDashboard() {
  const ref  = useRef(null);
  // const { scollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"]

  // });
  return (
    <Container  mt={-100} mb={30} size="lg">
     
        <Image
        ref={ref}
        src="./images/screenshot1.png"
        alt="App"
        sx={(theme) => ({
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
          transform: 'perspective(150px) rotateX(5deg)',
      

        })}

      />
   
      
    </Container>
  )
}