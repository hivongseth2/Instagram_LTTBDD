import { SkRect } from "@shopify/react-native-skia";
import { rect } from "@shopify/react-native-skia";

export const inflate = (rct, amount) =>
  rect(
    rct.x - amount,
    rct.y - amount,
    rct.width + amount * 2,
    rct.height + amount * 2
  );

export const deflate = (rct, amount) =>
  rect(
    rct.x + amount,
    rct.y + amount,
    rct.width - amount * 2,
    rct.height - amount * 2
  );
