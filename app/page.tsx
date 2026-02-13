"use client"

import { HeroLine } from "./components/HeroLine"
import { CornerLine } from "./components/CornerLine"
import documentIcon from "@/public/document.png"
import conversationIcon from "@/public/conversation.png"
import deadlineIcon from "@/public/deadline.png"
import phoneIcon from "@/public/phone.png"
import mailIcon from "@/public/mail.png"
import EmblaCarousel from "./components/EmblaCarousel"
import { MethodStep } from "./components/MethodCard"

import hero1 from "@/public/Dentist.jpg"
import hero2 from "@/public/Beaute.jpg"
import hero3 from "@/public/Lawyer.jpg"

import Image from "next/image";

import { useEffect } from "react"

export default function Page() {
  const slides = [
    <div className="relative w-full aspect-[1880/962] rounded-2xl overflow-hidden border-2 border-black">
      <Image src={hero1} alt="Projet 1" fill className="object-cover" priority />
    </div>,
    <div className="relative w-full aspect-[1880/962] rounded-2xl overflow-hidden border-2 border-black">
      <Image src={hero2} alt="Projet 2" fill className="object-cover" />
    </div>,
    <div className="relative w-full aspect-[1880/962] rounded-2xl overflow-hidden border-2 border-black">
      <Image src={hero3} alt="Projet 3" fill className="object-cover" />
    </div>,
  ]
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Remove hash from URL without reloading
        window.history.replaceState(
          null,
          "",
          window.location.pathname
        );
      }
    }
  }, []);

  return (
    <div>

      {/* NAV */}
      <header className="sticky top-0 z-50">
        <section className="section-container py-3 sm:pt-3 flex items-center justify-between w-full   bg-gradient-to-b
          from-[#1B9AF2] via-[#008AED] to-[#0066C2]
            shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          {/* Brand */}
          <a href="#hero" className="type-logo text-whiteink font-header font-black tracking-[-0.04em]">
            MedMethod.
          </a>

          <div className="flex flex-row text-whiteink font-normal gap-4">

            <a href="#method" 
            className=" 
              cursor-pointer
            text-whiteink
              transition-colors duration-150 ease-out
              hover:text-brand-dark    cursor-pointer
              text-whiteink

              transition-all duration-150 ease-out
              hover:text-brand-dark
              hover:scale-[1.05]

              active:scale-[0.95]
              active:opacity-80">
              Méthode
            </a>
            <a href="#exemples" 
            className=" 
              cursor-pointer
            text-whiteink
              transition-colors duration-150 ease-out
              hover:text-brand-dark    cursor-pointer
              text-whiteink

              transition-all duration-150 ease-out
              hover:text-brand-dark
              hover:scale-[1.05]

              active:scale-[0.95]
              active:opacity-80">
                Exemples
            </a>
            <a href="#contact"
            className=" 
              cursor-pointer
            text-whiteink
              transition-colors duration-150 ease-out
              hover:text-brand-dark    cursor-pointer
              text-whiteink

              transition-all duration-150 ease-out
              hover:text-brand-dark
              hover:scale-[1.05]

              active:scale-[0.95]
              active:opacity-80">
                Contact
            </a>

          </div>
        </section>
      </header>

      {/* HERO */}
      <section id="hero" className="section-container py-20 pt-15 sm:py-26 sm:pt-20 sm:pb-30 flex flex-col justify-center items-center">

        <h1 className="w-full sm:w-[90%]  font-header type-hero  text-center text-blackink tracking-[-0.04em] sm:leading-[0.85]">
          {" "}
          <span className="bg-gradient-to-b from-[#007ED6] via-[#008AED] to-[#1596EA] bg-clip-text text-transparent">
            sites internet
          </span>{" "}
          clairs et fiables pour{" "}
          <span className="bg-gradient-to-b from-[#007ED6] via-[#008AED] to-[#1596EA] bg-clip-text text-transparent">
            professionnels
          </span>
        </h1>

        <div className="mt-3 sm:mt-8 h-1 sm:h-2 w-[50%] sm:w-[40%]">
            <HeroLine />
        </div>

        <p className="type-body-lg font-paragraph text-blackink mt-4 sm:max-w-[50%] text-center">
          Attirez et convertissez vos visiteurs avec un site clair et crédible.
        </p>

        <div className="mt-5 flex flex-row gap-4">
          <a
              href="#contact"
              className="
                py-1 px-5
                font-bold
                type-body-lg

                text-white
                bg-gradient-to-b from-[#02a6f9] to-[#005591]
                border-2 border-black
                  
                shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
                active:shadow-[0_4px_12px_rgba(0,0,0,0.2)]

                transition-all
                duration-150
                ease-out

                hover:scale-[1.04]
                hover:from-[#1AA1FF] hover:to-[#0072C4]

                active:scale-[0.98]
                active:text-black
                active:from-[#7CCBFF]
                active:to-[#1AA1FF]

                cursor-pointer
              "
            >
              Réserver un appel 
          </a>
          <a
              href="#exemples"
              className="
              py-1 px-3
              font-bold
              type-body-lg

              text-[#0B2A44]
              font-medium
              bg-transparent
              border-2 border-black/80

              flex items-center gap-1
                    
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
              active:shadow-[0_4px_12px_rgba(0,0,0,0.2)]

              transition-all
              duration-150
              ease-out

              hover:scale-[1.04]
              hover:bg-gradient-to-b
              hover:from-[#E9EEF3]
              hover:to-[#DDE6EE]

              active:scale-[0.98]
              active:bg-gradient-to-b
              active:from-[#C9D6E2]
              active:to-[#B8C9D8]
              active:text-[#003A63]

              cursor-pointer
              "
            >
              Voir exemples
          </a>
        </div>


      </section>

      {/* LAYOUT EXAMPLES */}
      <section className="section-container flex flex-col justify-center items-center bg-brand-dark">
        <h1 id="exemples" className="font-header type-h2 text-center text-whiteink tracking-[-0.04em] sm:leading-[0.78]">
            Des sites adaptés à votre métier
        </h1>
        <p className="mt-10 text-whiteink font-light text-xs block sm:hidden">Balayez pour découvrir</p>

        <div className="mt-1 sm:mt-10 w-full sm:w-[90%] mx-auto">
            <EmblaCarousel slides={slides} options={{ loop: true }} nudgeOnView nudgeDelayMs={50} />
        </div>

        <p className="text-whiteink mt-10 font-extralight">
          Exemples de mises en page et structures réalisées par MedMethod
        </p>

      </section>

      {/* ABOUT ME */}
      <section className="section-container flex flex-col justify-center items-center bg-gray">
        <h1 className="w-full sm:w-[50%] font-header type-h2 text-center text-blackink tracking-[-0.04em] sm:leading-[0.78]">
            Un ingénieur experimentée qui comprends vos besoins
        </h1>

        <div className="flex flex-col justify-center items-center w-full sm:w-[60%] mt-10 type-body-lg font-semibold border-l-3 border-brand-main pl-6">
          <div className="w-full sm:w-[80%]">
            <p>
              Je m’appelle Mehdi. Je conçois et réalise des sites internet pour professionels,
              avec une approche simple et structurée.
            </p>
            <br />
            <p>
              Je me concentre sur ce qui fait réellement fonctionner un site pour une entreprise :
              la clarté, une présentation professionnelle et un site fiable, rapide et bien construit.
            </p>
            <br />
            <p>
              Mon objectif est de vous livrer un site de haute qualité tout en vous simplifiant le
              processus, en vous demandant le moins de temps et d’effort possible.
            </p>
          </div>

        </div>
      </section>

      
      {/* TRUST 1*/}
      <section className="section-container flex flex-col bg-white">

        <div className="mx-auto md:mx-0 w-full sm:w-[40%] md:text-left text-center mb-6 md:mb-3">
          <h2 className="text-center sm:text-left font-header type-h2 font-black text-blackink type-h1-sm tracking-[-0.04em]">
              Déroulement simple et clair
          </h2>
        </div>

        <div className="flex flex-row gap-[5%] sm:gap-[5%]">

          <CornerLine></CornerLine>

          <div className="flex flex-col w-full md:w-[50%] gap-13">

            <div className="flex items-start">

              <div className="w-12 h-12 flex items-center justify-center shrink-0 gap-2">
                <Image
                  src={deadlineIcon}
                  alt=""
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div className="pl-5 flex flex-col">
                  <p className="type-h3 font-header font-medium tracking-[-0.04em]">Périmètre et délais définis</p>
                  <p>Le projet est cadré dès le départ, avec des étapes claires et un délai annoncé.</p>
              </div>
            </div>

            <div className="flex items-start">

              <div className="w-12 h-12 flex items-center justify-center shrink-0 gap-1">
                <Image
                  src={conversationIcon}
                  alt=""
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div className="pl-5 flex flex-col">
                  <p className="type-h3 font-header font-medium tracking-[-0.04em]">Un suivi clair à chaque étape</p>
                  <p>Vous savez toujours où en est votre projet.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center shrink-0 gap-1">
                <Image
                  src={documentIcon}
                  alt=""
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <div className="pl-5 flex flex-col">
                <p className="type-h3 font-header font-medium tracking-[-0.04em]">
                  Prix clair, fixé à l’avance
                </p>
                <p>
                  Les projets commencent généralement autour de 500 €, avec un prix défini selon le périmètre.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* TRUST 2*/}
      <section id="method" className="section-container flex flex-col justify-center items-center bg-gray">
        <h1 className="w-[50%] font-header type-h2 text-center text-blackink tracking-[-0.04em] sm:leading-[0.78]">
            Méthode
        </h1>

        <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-4">


          <MethodStep
            n={1}
            title="Premier échange"
            text="On clarifie l’objectif et le périmètre, pour partir sur de bonnes bases."
            delayMs={0}
            showRightBorder
            leftPadding={false}
          />

          <MethodStep
            n={2}
            title="Conception"
            text="Je propose une première direction que vous validez avant d’aller plus loin."
            delayMs={180}
            showRightBorder
            leftPadding
          />

          <MethodStep
            n={3}
            title="Réalisation"
            text="Le site est développé, ajusté si nécessaire, puis mis en ligne."
            delayMs={360}
            showRightBorder
            leftPadding
          />

          <MethodStep
            n={4}
            title="Suivi"
            text="Le site est maintenu et peut évoluer dans le temps, selon vos besoins."
            delayMs={540}
            showRightBorder={false}
            leftPadding
          />
        </div>


      </section>

      {/* CONTACT */}
      <section id="contact" className="section-container flex flex-col justify-center items-center bg-brand-dark">
        <h1 className="w-full font-header type-h2 text-center text-whiteink tracking-[-0.04em] sm:leading-[0.78]">
            Parlons de votre projet
        </h1>
        <p className="text-whiteink type-body-lg sm:leading-[1.2] mt-5 w-full sm:w-[80%] text-center">
            Décrivez votre activité et vos objectifs.<br></br>
            Je vous propose une solution claire et qui donne envie de vous contacter.
        </p>

        <div className="mt-2 flex flex-row gap-3">

          <a
            href="mailto:medmethod@gmail.com"
            className="
              mt-5
              py-1 px-1 sm:px-3
              font-bold
              type-body-lg

              text-[#0B2A44]
              bg-gradient-to-b from-[#EEECEC] to-[#D9D6D6]
              border-2 border-black

              flex items-center gap-1
                    
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
              active:shadow-[0_4px_12px_rgba(0,0,0,0.2)]

              transition-all
              duration-150
              ease-out

              hover:scale-[1.04]
              hover:bg-gradient-to-b
              hover:from-[#E9EEF3]
              hover:to-[#DDE6EE]

              active:scale-[0.98]
              active:bg-gradient-to-b
              active:from-[#C9D6E2]
              active:to-[#B8C9D8]
              active:text-[#003A63]

              cursor-pointer
            "
          >
            <Image
              src={mailIcon}
              alt=""
              width={25}
              height={25}
              className="object-contain"
            />
            <span>medmethod@gmail.com</span>
          </a>

          <a
              href="tel:+33783916628"
              className="
                mt-5
                py-1 px-1 sm:px-3
                font-bold
                type-body-lg

                text-white
                bg-gradient-to-b from-[#02a6f9] to-[#005591]
                border-2 border-black

                flex items-center gap-1
                  
                shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
                active:shadow-[0_4px_12px_rgba(0,0,0,0.2)]

                transition-all
                duration-150
                ease-out

                hover:scale-[1.04]
                hover:from-[#1AA1FF] hover:to-[#0072C4]

                active:scale-[0.98]
                active:text-black
                active:from-[#7CCBFF]
                active:to-[#1AA1FF]

                cursor-pointer
              "
            >
            <Image
              src={phoneIcon}
              alt=""
              width={25}
              height={25}
              className="object-contain"
            />

            <span>07 83 91 66 28</span>
          </a>

        </div>
      </section>

      <footer className="text-whiteink section-container pb-10 flex flex-col bg-[#000D17]">
        <h1 className="type-logo text-whiteink font-header font-black tracking-[-0.04em]">
          MedMethod.
        </h1>

          <p className="mt-2  text-white/70 max-w-md">
            Conception et développement de sites web efficaces, pensés pour la performance, la clarté et la durabilité.
          </p>

          <div className="mt-6 text-sm text-white/50">
            © {new Date().getFullYear()} Med Method · Tous droits réservés
          </div>
      </footer>

    </div>
  )
}
