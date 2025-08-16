export interface Services {
    id?: number;
    imgSrc: string;
    name: string;
    text: string;
    href?: string;
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

export interface Link {
    name: string;
    href: string;
}