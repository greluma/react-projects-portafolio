import { useFetchProjects } from "../utils/fetchProjects"


const Projects = () => {
    const { loading, projects: { items: list } } = useFetchProjects()
    if (loading) {
        return (
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }
    return <section className="projects">
        <div className="title">
            <h2>projects</h2>
            <div className="title-underline"></div>
        </div>
        <div className="projects-center">
            {list.map(item => {
                const { title, url } = item?.fields
                const { url: img } = item?.fields?.image?.fields?.file
                const { id } = item?.sys
                return <a href={url} key={id} target="_blank" rel="noreferrer" className="project">
                    <img src={`https:${img}`} alt={title} className="img" />
                    <h5>{title}</h5>
                </a>
            })}
        </div>
    </section>


}
export default Projects