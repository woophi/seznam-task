import {
  LocketDetail,
  LocketItem,
  MobileDisplay,
  MobileInternalMemory,
  MobileOS,
  MobileProcessor,
  MobileRam,
  ReviewInfo,
  ShopInfo
} from 'core/models';
import * as faker from 'faker';
import { randomStringEnum } from './utils';

const randomDisplay = (): MobileDisplay => faker.random.arrayElement(['6,5', '6,1', '6,7', '4,7']);
const randomInternalMem = (): MobileInternalMemory => faker.random.arrayElement([512, 256, 128, 64, 32]);
const randomRam = (): MobileRam => faker.random.arrayElement([16, 12, 8, 6]);
const randomPhoneImg = () =>
  faker.random.arrayElement([
    'https://cdn.alza.cz/Foto/f11/SA/SAMO0213b2.jpg',
    'https://cdn.alza.cz/Foto/f11/RI/RI028b2.jpg',
    'https://cdn.alza.cz/Foto/f11/SA/SAMO0188b1.jpg',
    'https://cdn.alza.cz/Foto/f11/SA/SAMO0208b1.jpg'
  ]);

const makeRandomLocket = (): LocketItem => ({
  id: faker.datatype.number(),
  description: faker.lorem.sentence(50),
  imgUrl: randomPhoneImg(),
  title: faker.lorem.words(2),
  reviewsCount: faker.datatype.number({ min: 3, max: 15 }),
  parameters: {
    display: randomDisplay(),
    processor: randomStringEnum(MobileProcessor),
    os: randomStringEnum(MobileOS)
  }
});

const makeRandomShop = (): ShopInfo => ({
  id: faker.datatype.number(),
  link: faker.internet.url(),
  name: faker.lorem.words(2),
  price: faker.finance.amount()
});
const makeRandomReview = (): ReviewInfo => ({
  id: faker.datatype.number(),
  feedback: faker.lorem.words(15),
  name: faker.name.firstName(),
  positive: faker.random.arrayElement([false, true, null])
});

export const getLockets = () => new Array(faker.datatype.number({ min: 10, max: 25 })).fill(0).map(makeRandomLocket);

export const getLocketDetail = (item: LocketItem): LocketDetail => ({
  ...item,
  parameters: {
    ...item.parameters,
    internalMemory: randomInternalMem(),
    ram: randomRam()
  },
  shops: new Array(faker.datatype.number({ min: 3, max: 8 })).fill(0).map(makeRandomShop),
  reviews: new Array(faker.datatype.number({ min: item.reviewsCount, max: item.reviewsCount }))
    .fill(0)
    .map(makeRandomReview),
  description: faker.lorem.sentence(70)
});
