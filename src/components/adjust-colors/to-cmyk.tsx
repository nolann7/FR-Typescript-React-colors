import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';

type HexToCMYKProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const HexToCMYK = ({ hexColor, dispatch }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  const updateCMYK = ({ C = c, M = m, Y = y, K = k }) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: { cmyk: [C, M, Y, K] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) => updateCMYK({ C: +e.target.value })}
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) => updateCMYK({ M: +e.target.value })}
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) => updateCMYK({ Y: +e.target.value })}
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) => updateCMYK({ K: +e.target.value })}
      />
    </section>
  );
};

export default HexToCMYK;
