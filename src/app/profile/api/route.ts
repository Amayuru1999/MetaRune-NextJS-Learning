import { type NextRequest}   from "next/server";
import {headers} from "next/headers";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList=headers();
    console.log("🟧 Authorization Header:",requestHeaders.get("Authorization"));
    console.log("🟦 Header List:",headerList.get("Authorization"));
    return new Response("Profile API data")
}