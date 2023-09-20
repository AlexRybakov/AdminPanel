import dayjs from "dayjs";

enum Tags {
  Tag1 = 'Tag1',
  Tag2 = 'Tag2',
  Tag3 = 'Tag3',
  Tag4 = 'Tag4',
  Tag5 = 'Tag5',
};

enum Types {
  Type1 = 'Type1',
  Type2 = 'Type2',
  Type3 = 'Type3',
  Type4 = 'Type4',
  Type5 = 'Type5',
};

export const tags = [
  Tags.Tag1,
  Tags.Tag2,
  Tags.Tag3,
  Tags.Tag4,
  Tags.Tag5,
];

export const types = [
  Types.Type1,
  Types.Type2,
  Types.Type3,
  Types.Type4,
  Types.Type5,
];

export interface DataType {
  key: number;
  name: string;
  type: string;
  address?: string;
  tag: string;
  unit?: string;
  itemNumber?: string;
  created_at: string;
  updated_at: string;
  audit_at?: string;
}

const getRndFromRange = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const data: DataType[] = [];

const getRandomTag = () => tags[getRndFromRange(0, tags.length - 1)];
const getRandomType = () => types[getRndFromRange(0, types.length - 1)];

for (let i = 1; i < 81; i++) {
  data.push({
    key: i,
    name: `PC ${i}`,
    type: getRandomType(),
    address: `test ${i}`,
    tag: getRandomTag(),
    unit: `№${i}`,
    created_at: `${dayjs(new Date(2023, 9, i, Math.floor((Math.random() * 24) + i), i+1, i+2)).format('YYYY-M-D HH:m:s')}`,
    updated_at: `${dayjs(new Date(2023, 10, i+2, Math.floor((Math.random() * 24) + i), i+5, i+10)).format('YYYY-M-D HH:m:s')}`,
  });
}
