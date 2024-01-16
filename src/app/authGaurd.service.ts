import { Injectable } from "@angular/core";
import { SharedService } from "./shared/auth.service";

@Injectable({
    providedIn:'root'
})

export class AuthGaurdService{

    constructor( private as:SharedService){

    }
} 