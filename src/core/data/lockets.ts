import { LocketItem, MobileProcessor, MobileDisplay, MobileOS } from 'core/models';
import * as faker from 'faker';
import { randomStringEnum } from './utils';

const randomDisplay = (): MobileDisplay => faker.random.arrayElement(['6,5', '6,1', '6,7', '4,7']);
const randomOs = (): MobileOS => faker.random.arrayElement(['ios', 'android']);

const makeRandomLocket = (): LocketItem => ({
  description: faker.lorem.sentence(10),
  imgUrl: faker.image.image(),
  title: faker.lorem.slug(2),
  reviewsCount: faker.datatype.number(100),
  parameters: {
    display: randomDisplay(),
    processor: randomStringEnum(MobileProcessor),
    os: randomOs()
  }
});

export const getLockets = () => new Array(faker.datatype.number({ min: 10, max: 25 })).fill(0).map(makeRandomLocket);
