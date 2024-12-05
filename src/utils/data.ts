export type animalParaAdocaoType = {
  nome: string,
  sexo: 'Macho' | 'Fêmea',
  tipo: 'Cachorro' | 'Gato',
  porte: 'Grande' | 'Médio' | 'Pequeno',
  cor: string,
  raca: string,
  descricao: string,
  imagem: string,
}

export const animaisParaAdocao: animalParaAdocaoType[] = [
  {
    nome: 'Luna',
    sexo: 'Fêmea',
    tipo: 'Cachorro',
    porte: 'Médio',
    cor: 'Branco com manchas marrons',
    raca: 'Labrador',
    descricao: 'Uma cachorrinha de porte médio, com uma carinha de atentada, mas muito carinhosa e cheia de energia. Uma labradora encantadora, pronta para trazer alegria ao seu lar.',
    imagem: '/labrador-luna.jpg',
  },
  {
    nome: 'Mimi',
    sexo: 'Fêmea',
    tipo: 'Gato',
    porte: 'Pequeno',
    cor: 'Cinza',
    raca: 'Siamês',
    descricao: 'Gatinha de porte pequeno, com pelos cinza e olhos expressivos, típica da raça Siamês. Uma companheira dócil e cheia de charme.',
    imagem: '/siames-mimi.jpg'
  },
  {
    nome: 'Thor',
    sexo: 'Macho',
    tipo: 'Cachorro',
    porte: 'Grande',
    cor: 'Preto',
    raca: 'Husky',
    descricao: 'Um grandão de coração mole! Husky branco e preto de porte grande, perfeito para quem busca um amigo leal e brincalhão.',
    imagem: '/husky-thor.jpg',
  },
  {
    nome: 'Bela',
    sexo: 'Fêmea',
    tipo: 'Cachorro',
    porte: 'Médio',
    cor: 'Caramelo',
    raca: 'Vira-Lata',
    descricao: 'Animada e cheia de personalidade! Uma vira-lata de cor caramelo, ideal para quem quer uma parceira leal e ativa.',
    imagem: '/vira-lata-bela.jpg',
  },
  {
    nome: 'Frajola',
    sexo: 'Macho',
    tipo: 'Gato',
    porte: 'Pequeno',
    cor: 'Preto e branco',
    raca: 'Vira-lata',
    descricao: 'Um gatinho preto e branco de porte pequeno, cheio de energia e travessuras. Perfeito para alegrar qualquer casa!',
    imagem: '/vira-lata-frajola.jpg',
  },
  {
    nome: 'Rex',
    sexo: 'Macho',
    tipo: 'Cachorro',
    porte: 'Grande',
    cor: 'Marrom',
    raca: 'Vira-lata',
    descricao: 'Um grandalhão de pelagem marrom e temperamento amoroso. Esse vira-lata é um ótimo companheiro para famílias que gostam de aventura.',
    imagem: '/vira-lata-rex.jpg',
  },
  {
    nome: 'Mel',
    sexo: 'Fêmea',
    tipo: 'Cachorro',
    porte: 'Pequeno',
    cor: 'Branco',
    raca: 'Vira-lata',
    descricao: 'Pequena, branca e cheia de doçura! Essa vira-lata é perfeita para quem busca uma cachorrinha meiga e cheia de carinho para dar.',
    imagem: '/vira-lata-mel.jpg',
  },
  {
    nome: 'Tico',
    sexo: 'Macho',
    tipo: 'Gato',
    porte: 'Médio',
    cor: 'Preto',
    raca: 'Vira-lata',
    descricao: 'Um gato de porte médio, pelagem preta brilhante e olhos curiosos. Um amigo elegante e independente, pronto para te conquistar.',
    imagem: '/vira-lata-tico.jpg'
  }
];

export const ongInicial = {
  nome: 'Ong Orelhinhas',
  email: 'ongorelhinhas@gmail.com',
  senha: 'amamos cachorrinhos',
  telefone: '11 9898-5757',
  endereco: 'Rua das Figueiras, 2000 - São Paulo',
  estado: 'SP',
}

export const estadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES",
  "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR",
  "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO"
];
