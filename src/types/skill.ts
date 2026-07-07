// src/types/skill.ts

import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType | string | null;
  bgGradient: string;
  tag?: string;
  tagColor?: string;
  description: string;
  features?: string[];
  iconText?: string;
}

export interface Section {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}