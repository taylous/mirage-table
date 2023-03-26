// molecules
import Item, { ItemPropsPreset } from '../../molecules/Item';

// functions
import { convertValueToPixel } from '../../functions/common';

interface VirtualizedListPropsType<T> {
  rootHeight: number | string;
  itemHeight: number | string;
  items: Array<T>;
  children?: JSX.Element[];
  perPage?: number;
}

export default function VirtualizedList<T extends ItemPropsPreset>({
  rootHeight,
  itemHeight,
  items,
  children,
  perPage = 10,
}: VirtualizedListPropsType<T>): JSX.Element {
  return (
    <div style={{ height: convertValueToPixel(rootHeight), overflow: 'auto' }}>
      {children}
      {/* {items.map((value: T, index: number) => (
        // <Item<T> value={value} height={itemHeight} key={`item_${index}`} />
      ))} */}
    </div>
  );
}
