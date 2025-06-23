import { getThemedGridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { ThemeVersion } from "./ThemeManager";

interface GridProps {
  currentTheme?: ThemeVersion;
}

const Grid = ({ currentTheme = 'current' }: GridProps) => {
  const gridItems = getThemedGridItems(currentTheme);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            currentTheme={currentTheme} // THIS WAS MISSING!
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;