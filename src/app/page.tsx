import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className={styles.categoryShowcase}>
      <div className={styles.categoryShowcaseSwiper}>

        <Slider />
        <button type="button" className={styles.categoryshowcaseplus}>
          <Image src="https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg" alt="btn" className={styles.btn} width={48} height={48} objectFit="cover" />
        </button>
      </div>
    </div>
  );
}
