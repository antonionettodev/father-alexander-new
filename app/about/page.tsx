import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sobre - ${siteConfig.name}`,
  description: "Informações sobre o site e o conteúdo aqui presente",
};

export default async function AboutPage() {
  return (
   <>
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-bold text-4xl lg:text-5xl">
            Sobre
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h2 className="inline-block font-semibold text-2xl lg:text-3xl">Todo o conteúdo deste site não é de minha autoria.</h2>
        <p className="text-muted-foreground text-lg py-4 italic">Nenhum dos textos ou artigos foi escrito ou traduzido por mim.</p>
        <p className="text-muted-foreground text-lg py-4">
           <strong className="text-foreground">Todos</strong> os textos aqui presentes foram retirados do <a className="underline text-foreground hover:text-muted-foreground transition-colors" href="https://fatheralexander.org/" target="_blank">deste site</a> e são de autoria do Bispo Alexander. Eu apenas adaptei a interface de usuário para proporcionar uma melhor usabilidade e leitura.
        </p>
        <p className="text-muted-foreground text-lg py-4">
          Se tiver qualquer dúvida ou questão sobre o conteúdo textual, por favor, visite o site original para obter mais informações.
        </p>

        <a href="https://fatheralexander.org/" target="_blank" className="text-xl md:text-lg inline-block underline text-foreground hover:text-muted-foreground transition-colors">fatheralexander.org</a>
      </div>
    </div>
    </>
  );
}
