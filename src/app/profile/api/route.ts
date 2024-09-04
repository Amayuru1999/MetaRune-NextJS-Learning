import { type NextRequest}   from "next/server";
import {cookies, headers} from "next/headers";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList=headers();

    cookies().set("resultsPerPage","20");
    const theme=request.cookies.get("theme");

    console.log("🟧 Authorization Header:",requestHeaders.get("Authorization"));
    console.log("🟦 Header List:",headerList.get("Authorization"));
    console.log("🟡 Cookies:",theme);
    console.log("✅ Cookies:",cookies().get("resultsPerPage"));
    return new Response("<h1>Profile API Data</h1>",{
        headers: {
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark",
        }
    })
}