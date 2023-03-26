import { convertValueToPixel } from '../functions/common';

export type ItemPropsPreset = {
  [key: string]: number | string | boolean;
  id: string;
  content: string;
};

type ItemProps<T> = {
  value: T;
  height?: number | string;
};

export default function Item<T extends ItemPropsPreset>({ value, height = 100 }: ItemProps<T>) {
  return (
    <div style={{ height: convertValueToPixel(height) }}>
      {value.id} {value.content} {value.age}
    </div>
  );
}
