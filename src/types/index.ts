export interface Services {
    id?: number;
    imgSrc: string;
    title: string;
    text: string;
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