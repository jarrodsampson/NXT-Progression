export interface Superstar {
  id: number;
  name: string;
  image: string;
  link: string;
  agent: string;
  bio_description: string[];
  bio_image: string;
  fullBodyImage: string;
  hometown: string;
  signature: string;
  highlights: string;
  socialLinks: SocialLink[];
  height: string;
  weight: string;
  videos: Video[];
}

export interface SocialLink {
  href: string;
  alt: string;
  title: string;
}

export interface Video {
  thumbnail: string;
  description: string;
  name: string;
  duration: string;
  link: string;
}

export interface DataReturn {
  list: Superstar[];
  total: number;
}

export interface AutocompleteProps {
  threshold: number;
  maxSuggestions: number;
}

export interface DropdownProps {
  items: string[];
  // eslint-disable-next-line no-unused-vars
  handleSuperstarTypeOption: (selectedDropDownItem: string) => void;
}
