export interface Services {
    id?: number;
    imgSrc: string;
    name: string;
    text: string;
    href: string;
}

interface IonIcon {
    ionIconName: string;
    ionIconLink: string;
}

export interface Doctors {
    imgSrc: string;
    name: string;
    ionIcon: IonIcon[];
}

export interface NavLink {
    name: string;
    href: string;
}

export interface Testimonial {
    id: number;
    name: string;
    rating: number;
    text: string;
    image: string;
    position?: string;
}

export interface Photo {
    id: number;
    src: string;
    alt: string;
    title: string;
}

export interface MediaItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  type: 'image' | 'video';
  poster?: string; // Optional thumbnail for videos
}