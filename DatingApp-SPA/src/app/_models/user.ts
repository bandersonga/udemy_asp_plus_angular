import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string; // ? = optional - should always placed after the required properties
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
