// src/types/index.ts

import { IconType } from "react-icons";

export type ServiceItem = {
  name: string;
  icon: IconType;
  title: string;
  description: string;
  serviceList: string[];
  thumbs: { url: string }[];
};

export type FaqItemData = {
  title: string;
  description: string;
};

export type WorkItem = {
  img: string;
  name: string;
  description: string;
  href: string;
};

export type StatItem = {
  endCountNum: number;
  endCountText: string;
  text: string;
};