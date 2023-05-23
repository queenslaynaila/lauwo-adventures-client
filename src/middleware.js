import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get("token");
    let url = req.url
    
    if(!verify && url.includes('/dashboard')){
        return NextResponse.redirect("https://lauwo-adventures-client.vercel.app/admin");
    }

    if (verify && url === "https://lauwo-adventures-client.vercel.app/admin") {
      return NextResponse.redirect("https://lauwo-adventures-client.vercel.app/admin/dashboard");
    }


}