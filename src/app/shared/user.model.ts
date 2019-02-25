import { Validators } from '@angular/forms';

export interface User {
        userName: string;
        name: string;
        firstName: string;
        address: string;
        email: string;
        phone: string;
        password: string;
        _id?: string;
        reservations?: Array<String>;
}

