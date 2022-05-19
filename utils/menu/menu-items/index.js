export const menuItems = [
  {
    id: 1,
    // icon: "Mob'in",
    title: "Mob'In",
    subItems: [
      {
        title: 'Présentation',
        link: '/presentation',
      },
      {
        title: 'Notre histoire, nos valeurs et nos missions',
        link: '/histoire-valeurs-missions',
      },
      {
        title: 'Notre fonctionnement',
        link: '/fonctionnement',
      },
      {
        title: 'Nos adhérents',
        link: '/adherents',
      },
      {
        title: 'Nos actualités',
        link: '/articles',
      },
      {
        title: 'Nos partenaires',
        link: '/partenaires',
      },
      {
        title: 'Contact',
        link: '/contact',
      },
    ],
  },
  {
    id: 2,
    title: 'Nos activités',
    subItems: [
      {
        title: 'savoir bouger',
        link: '/savoir-bouger',
      },
      {
        title: 'pouvoir bouger',
        link: '/pouvoir-bouger',
      },
    ],
  },
  {
    id: 3,
    title: 'Nos projets',
    subItems: [
      {
        title: 'Intégracode',
        link: '/projets/integracode',
      },
      {
        title: 'Integramob',
        link: '/projets/integramob',
      },
      {
        title: 'M[ob]ilitances',
        link: '/projets/mobilitances',
      },
      {
        title: 'Nos Webinaires',
        link: '/webinaires',
      },
    ],
  },
  {
    id: 4,
    title: 'Notre accompagnement',
    subItems: [
      {
        title: 'Au service des territoires',
        link: '/accompagnement/territoires',
      },
      {
        title: 'Au service des entreprises',
        link: '/accompagnement/entreprises',
      },
      // {
      //     title: "Devenir partenaire",
      //     link: "/devenir-partenaire"
      // },
    ],
  },
  {
    id: 5,
    title: 'Nos formations',
    link: '/formations',
  },
];

export const menuLoginItems = [
  {
    id: 1000,
    title: 'Mon compte',
    subItems: [
      {
        title: 'Accueil Adhérent',
        link: '/auth',
      },
      {
        title: 'Déconnexion',
        link: '/',
        action: 'Logout',
      },
    ],
  },
];
