import { inject } from "@angular/core"
import { SharedService } from "./shared/auth.service"
import { Router } from "@angular/router"

export const CanActivate = ()=>{

    const ss = inject(SharedService) 
    const router = inject(Router)

    if(ss.isAuthenticated()){
        return true;
    }
    else{
        router.navigate(['/login'])
        return false;
    }
}
