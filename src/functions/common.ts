import { REGEX_NUMBER } from '../constants';

const convertValueToPixel = (value: string | number): string =>
  `${typeof value === 'number' ? value : value.replaceAll(REGEX_NUMBER, '')}px`;

const getTotalPage = (totalCount: number, perPage: number): number => {
  const quotient = totalCount / perPage;
  const remain = totalCount % perPage > 0 ? 1 : 0;
  return quotient + remain;
};

export { convertValueToPixel, getTotalPage };
