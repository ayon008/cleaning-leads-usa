import { Barlow_Condensed } from "next/font/google";
import { Poppins } from "next/font/google";

const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700"], // choose the weights you need
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // choose what you need
  subsets: ["latin"],
});

export { barlow, poppins };
