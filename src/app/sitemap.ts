import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
    const baseUrl=""
    
    return [
        {url:baseUrl,lastModified:new Date(),changeFrequency:"weekly",priority:1},
        {url:`${baseUrl}/about`,lastModified:new Date(),changeFrequency:"weekly",priority:2},

    ]

    
}