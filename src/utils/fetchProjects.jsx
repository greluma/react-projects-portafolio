import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
    environment: 'master',
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'projects' })
            setProjects(response)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { loading, projects }
}
