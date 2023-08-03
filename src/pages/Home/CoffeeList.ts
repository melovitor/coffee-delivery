import Expresso from '../../assets/coffee/Expresso.png'
import Americano from '../../assets/coffee/Americano.png'
import ExpressoCremoso from '../../assets/coffee/ExpressoCremoso.png'
import CafeGelado from '../../assets/coffee/CafeGelado.png'
import CafeComLeite from '../../assets/coffee/CafeComLeite.png'
import Latte from '../../assets/coffee/Latte.png'
import Capuccino from '../../assets/coffee/Capuccino.png'
import Macchiato from '../../assets/coffee/Macchiato.png'
import Mochaccino from '../../assets/coffee/Mochaccino.png'
import ChocolateQuente from '../../assets/coffee/ChocolateQuente.png'
import Cubano from '../../assets/coffee/Cubano.png'
import Havaiano from '../../assets/coffee/Havaiano.png'
import Arabe from '../../assets/coffee/Arabe.png'
import Irlandes from '../../assets/coffee/Irlandes.png'

export const CoffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '5,50',
    src: Expresso,
    tags: ['Tradicional'],
    amount: 0,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '5,50',
    src: Americano,
    tags: ['Tradicional'],
    amount: 0,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '6,00',
    src: ExpressoCremoso,
    tags: ['Tradicional'],
    amount: 0,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '7,00',
    src: CafeGelado,
    tags: ['Tradicional', 'Gelado'],
    amount: 0,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '6,50',
    src: CafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
    amount: 0,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '7,00',
    src: Latte,
    tags: ['Tradicional', 'Com Leite'],
    amount: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '6,50',
    src: Capuccino,
    tags: ['Tradicional', 'Com Leite'],
    amount: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '6,00',
    src: Macchiato,
    tags: ['Tradicional', 'Com Leite'],
    amount: 0,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '7,50',
    src: Mochaccino,
    tags: ['Tradicional', 'Com Leite'],
    amount: 0,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '8,00',
    src: ChocolateQuente,
    tags: ['Especial', 'Com Leite'],
    amount: 0,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '8,50',
    src: Cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    amount: 0,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '7,50',
    src: Havaiano,
    tags: ['Especial'],
    amount: 0,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '8,00',
    src: Arabe,
    tags: ['Especial'],
    amount: 0,
  },

  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,00',
    src: Irlandes,
    tags: ['Especial', 'Alcoólico'],
    amount: 0,
  },
]
