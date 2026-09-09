export type VisualDesignWork = {
  title: string;
  category: "Brand Identity" | "Graphic Design" | "Marketing / Banner";
  image: string;
  imageAlt: string;
  description?: string;
};

export const visualDesignWorks: VisualDesignWork[] = [];
