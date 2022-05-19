import { Box } from "@material-ui/core";
import { Text, Icon } from "../../components";
import Link from "next/link";

export const mobilitancesText = () => {
  return (
    <Text size="body1" color="#000">
      <br />
      Ce livre blanc est un ouvrage collectif réalisé entre 3 partenaires
      européens :{" "}
      <a
        href="https://www.mobin-solutions.fr/adherents/regions/Normandie"
        target="_blank"
      >
        <strong>Mob’In Normandie </strong>
      </a>{" "}
      pour la France,{" "}
      <a
        href="https://www.caips.be/actions/mobilite-et-permis-de-conduire/mob-in/"
        target="_blank"
      >
        <strong>CAIPS </strong>
      </a>{" "}
      pour la Belgique et{" "}
      <a href="https://www.atelierefarafrontiere.ro/" target="_blank">
        <strong>AFF </strong>
      </a>{" "}
      pour la Roumanie, et cofinancé par le programme Erasmus+ de l’Union
      Européenne. Il propose une définition commune de la mobilité inclusive, un
      tour d’horizon de la place de la mobilité inclusive dans les 4
      législations (européenne, belge, française et roumaine), et trois
      scénarios pour l’intégrer de façon systémique et durable dans nos
      politiques.
      <br />
      <br />
      Ce livre blanc comprend également un guide pour les élu-e-s et opérateurs
      avec un glossaire, une carte heuristique des freins et solutions et des
      fiches exemples pour s’inspirer.
      <br />
      <br />
      Au delà du livre Blanc,{" "}
      <a href="https://mobineurope.eu/" target="_blank">
        <strong>Mob'In Europe </strong>
      </a>{" "}
      est un site dédié à la mobilité inclusive : à destination des formateurs,
      des apprenants et des responsables de structure, ce site est un outil qui
      compile les informations pour réaliser des diagnostics individuels, mener
      des formations mobilité et des pré-formations au permis B. Il a également
      contribué à la création d’une{" "}
      <a href="https://www.mobin-solutions.fr/formations/1" target="_blank">
        <strong>
          formation au métier de Conseiller en mobilité inclusive{" "}
        </strong>
      </a>{" "}
      .
      <br />
      <br />
      <a target="_blank" href="/static/mobilitances/mobilitances.pdf">
        <strong>Télécharger le livre blanc</strong>
      </a>
      <br />
    </Text>
  );
};
