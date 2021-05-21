import { LocketItem, MobileProcessor, MobileDisplay, MobileOS } from 'core/models';
import * as faker from 'faker';
import { randomStringEnum } from './utils';

const randomDisplay = (): MobileDisplay => faker.random.arrayElement(['6,5', '6,1', '6,7', '4,7']);
const randomOs = (): MobileOS => faker.random.arrayElement(['ios', 'android']);
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
  title: faker.lorem.slug(2),
  reviewsCount: faker.datatype.number(100),
  parameters: {
    display: randomDisplay(),
    processor: randomStringEnum(MobileProcessor),
    os: randomOs()
  }
});

export const getLockets = () => new Array(faker.datatype.number({ min: 10, max: 25 })).fill(0).map(makeRandomLocket);
