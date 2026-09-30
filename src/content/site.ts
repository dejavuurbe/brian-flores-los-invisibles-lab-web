export type SiteLevel = 1 | 2 | 3;
export type PendingState = 'confirmed' | 'pending' | 'omitted';
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin' | 'web';

type Link = { label: string; url: string };
type Social = { platform: SocialPlatform; label: string; state: PendingState; url?: string };
type ActivityItem = { title: string; type: string; source: string; url: string; description: string };

const works = [
  {
    id: 'obra-principal',
    title: 'Los Invisibles',
    subtitle: '',
    cover: '/images/los-invisibles.png',
    coverState: 'confirmed' as PendingState,
    synopsis: 'Un hombre atraviesa la vida de otros sin dejar una huella estable en la memoria. Una investigación policial, un libro heredado y recuerdos fragmentarios conectan sus encuentros. Los Invisibles explora el límite entre existir y ser recordado, en una trama de misterio psicológico sobre identidad y olvido.',
    genre: 'Misterio psicológico',
    year: '2025',
    pages: '',
    isbn: '978-631-00-9656-8',
    publisher: 'Edición de autor',
    editorialState: {
      genre: 'confirmed' as PendingState,
      year: 'confirmed' as PendingState,
      pages: 'omitted' as PendingState,
      isbn: 'confirmed' as PendingState,
      publisher: 'confirmed' as PendingState,
    },
    sampleUrl: '',
    purchaseLinks: [{label: 'Conseguir el libro', url: 'https://www.autoreseditores.com/libro/30594/brian-gaston-flores/los-invisibles.html'}, {label: 'Edición digital', url: 'https://books2read.com/losinvisibles'}] as Link[],
    purchaseState: 'confirmed' as PendingState,
    featured: true,
    aliases: [] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Brian Flores',
  canonicalName: 'Brian Gastón Flores',
  searchVariants: [] as string[],
  role: 'Escritor independiente',
  tagline: 'Somos lo que otros recuerdan de nosotros.',
  description: 'Brian Flores, autor de Los Invisibles, una novela argentina independiente de misterio psicológico con elementos especulativos sobre memoria, identidad y olvido.',
  url: 'https://dejavuurbe.github.io/brian-flores-los-invisibles-lab-web/',
  email: 'contacto@brianflores.com.ar',
  emailState: 'confirmed' as PendingState,
  location: 'Buenos Aires, Argentina',
  footerLine: 'Memoria, identidad y las huellas que dejamos.',
  credit: {
    enabled: true,
    label: 'Diseño y desarrollo web por',
    url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/',
  },
  social: [
    { platform: 'instagram', label: 'Instagram', state: 'confirmed', url: 'https://www.instagram.com/briandejavu07/' },
    { platform: 'facebook', label: 'Facebook', state: 'confirmed', url: 'https://www.facebook.com/people/Los-Invisibles/100070082874769/' },
  ] as Social[],
  author: {
    shortBio: 'Escritor independiente de Buenos Aires. Autor de Los Invisibles.',
    longBio: 'Brian Gastón Flores (Buenos Aires, 1972) es técnico, músico y escritor independiente. Su escritura explora la percepción, la identidad y la memoria: lo que conservamos de los demás y lo que permanece de nosotros. Los Invisibles es su primera novela publicada.',
    photo: '/images/brian-flores.png',
    photoState: 'confirmed' as PendingState,
    bioState: 'confirmed' as PendingState,
  },

  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  activity: [
{title: 'Memorias de un Siglo', type: 'Entrevista', source: 'Uno del Oeste · junio de 2026', url: 'https://www.youtube.com/watch?v=portmPIGJbM', description: 'Una conversación sobre Los Invisibles y el recorrido de su autor.'},
{title: 'Una lectura de Los Invisibles', type: 'Reseña', source: 'Amor por los Libros', url: 'https://amorporloslibros.com/resena-libro/los-invisibles/', description: 'Una mirada externa sobre la novela y sus preguntas acerca de la memoria y la identidad.'},
{title: 'Ancestral y Tic Tac', type: 'Cuentos', source: 'Revista Mal de Ojo · febrero de 2026', url: 'https://revistamaldeojo.cl/cuentos-de-brian-gaston-flores/', description: 'Dos relatos para acercarse a otras facetas de la escritura de Brian Gastón Flores.'}
] as ActivityItem[],
  activityState: 'confirmed' as PendingState,

  lifecycle: {
    infrastructure: 'CREADA/PUBLICADA',
    delivery: 'EN CONSTRUCCIÓN',
  },

  recovery: {
    incompleteRecall: [] as string[],
    spellingVariants: [] as string[],
    disambiguationNotes: [] as string[],
  },

  faq: [] as { question: string; answer: string }[],
};

export type SiteData = typeof site;
