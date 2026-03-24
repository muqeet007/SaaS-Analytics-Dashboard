import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return{
        rules:{
            userAgent:"*", //this is for all robots , if specifying you can mae the 
            //rules as an array of objects
            allow:"/", //allowed routes,
            disallow:["/comtact/","/api/"],
        },
        // sitemap://baseurl/sitemap.xml 
    }
}