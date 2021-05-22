import { FiltersModel, MobileOS, MobileProcessor } from 'core/models';
import { memo } from 'react';
import { FilterRow } from './FilterRow';

type Props = {
  model: FiltersModel;
  changeOS: (v: MobileOS) => void;
  changeProcessor: (v: MobileProcessor) => void;
};

export const Filters = memo<Props>(({ model, changeProcessor, changeOS }) => {
  return (
    <>
      <FilterRow<MobileOS>
        onChange={changeOS}
        title="OS"
        options={[
          {
            checked: model.os.includes(MobileOS.Android),
            label: MobileOS.Android,
            value: MobileOS.Android
          },
          {
            checked: model.os.includes(MobileOS.IOS),
            label: MobileOS.IOS,
            value: MobileOS.IOS
          }
        ]}
      />
      <FilterRow<MobileProcessor>
        onChange={changeProcessor}
        title="Processor"
        options={[
          {
            checked: model.processor.includes(MobileProcessor.Apple13),
            label: MobileProcessor.Apple13,
            value: MobileProcessor.Apple13
          },
          {
            checked: model.processor.includes(MobileProcessor.Apple14),
            label: MobileProcessor.Apple14,
            value: MobileProcessor.Apple14
          },
          {
            checked: model.processor.includes(MobileProcessor.Exynos2100),
            label: MobileProcessor.Exynos2100,
            value: MobileProcessor.Exynos2100
          },
          {
            checked: model.processor.includes(MobileProcessor.Snapdragon888),
            label: MobileProcessor.Snapdragon888,
            value: MobileProcessor.Snapdragon888
          }
        ]}
      />
    </>
  );
});
