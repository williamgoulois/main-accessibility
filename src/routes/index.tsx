import { A } from "solid-start";
import { SolidLogo } from "~/components/SolidLogo/SolidLogo";

export default function Home() {
  return (
    <>
      <header class="mb-12">
        <a href="#main" class="skipLink p-2">
          Skip to main content
        </a>
        <a href="#footer" class="skipLink p-2">
          Skip to footer
        </a>
        <nav>
          <ul class="flex justify-center space-x-4 list-none flex-wrap">
            <li>
              <a href="#">Films</a>
            </li>
            <li>
              <a href="#">Salles</a>
            </li>
            <li>
              <a href="#">Événements</a>
            </li>
            <li>
              <a href="#">Cartes et Offres</a>
            </li>
            <li>
              <a href="#">Famille et Éducation</a>
            </li>
            <li>
              <a href="#">Privatisation</a>
            </li>
            <li>
              <a href="#">Espace CSE</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main" class="mx-auto text-gray-700 px-8 mb-14">
        <section>
          <h1 class="text-4xl text-sky-700 font-thin uppercase mb-8">
            Hello from Solidjs!
          </h1>
          <SolidLogo />
          <h2 class="py-4 text-2xl">Bad contrast text</h2>
          <article>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim <a href="#">nulla</a> est
              proident. Nostrud officia pariatur ut officia. Sit irure elit esse
              ea nulla sunt ex occaecat reprehenderit commodo officia dolor
              Lorem duis laboris cupidatat officia voluptate. Culpa proident
              adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
              eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt
              velit enim. Voluptate laboris sint cupidatat ullamco ut ea
              consectetur et est culpa et culpa duis.
            </p>
            <a class="skipLink p-2" href="#after-links">
              Skip links and go to next paragaph
            </a>
            <ol class="mb-4 mx-4 list-decimal list-inside">
              <li>
                <a href="#">Films</a>
              </li>
              <li>
                <a href="#">Salles</a>
              </li>
              <li>
                <a href="#">Événements</a>
              </li>
              <li>
                <a href="#">Cartes et Offres</a>
              </li>
              <li>
                <a href="#">Famille et Éducation</a>
              </li>
              <li>
                <a href="#">Privatisation</a>
              </li>
              <li>
                <a href="#">Espace CSE</a>
              </li>
            </ol>
            <p id="after-links">
              <a href="#">Lorem</a> ipsum dolor sit amet, officia excepteur ex
              fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
              officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
              amet voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia <a href="#">excepteur</a> ex
              fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
              officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
              amet voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </article>
        </section>
      </main>
      <footer id="footer" class="mb-14">
        <nav>
          <ul class="flex justify-center space-x-4 list-none flex-wrap">
            <li>
              <a href="#">Films</a>
            </li>
            <li>
              <a href="#">Salles</a>
            </li>
            <li>
              <a href="#">Événements</a>
            </li>
            <li>
              <a href="#">Cartes et Offres</a>
            </li>
            <li>
              <a href="#">Famille et Éducation</a>
            </li>
            <li>
              <a href="#">Privatisation</a>
            </li>
            <li>
              <a href="#">Espace CSE</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
