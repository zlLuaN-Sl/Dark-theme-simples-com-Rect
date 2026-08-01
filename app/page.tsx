'use client';

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSitch } from "@/components/ThemeSwitch";
import { Themeprovider } from "@/contexts/ThemeContext";


const HomePage = () => {

  return (
   
   
      <Themeprovider>
        <Container>
          <header className="py-5">
            <h1 className="text-3xl">Título da página</h1>
          </header>
          <section>
            <p className="my-5">Conteúdo da página</p>

            <Button label="Clique Aqui" click={() => { }}/>
          </section>
          <ThemeSitch/>
        </Container>
      </Themeprovider>
  
   
  );
};

export default HomePage;                             