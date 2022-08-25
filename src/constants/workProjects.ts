import nexaprismIMG from "../img/nexaprism.gif";

type Project = {
    name: string;
    languages: string[];
    frameworks: string[];
    description: string;
    url: string;
    img: string;
}

export const projectNames = ["nexaprism"];

export const projects: {[name: string]: Project} = {
    "nexaprism": {
        name: "nexaprism",
        languages: ["HTML", "CSS", "TypeScript", "JavaScript"],
        frameworks: ["React", "Material UI", "GraphQL", "MongoDB"],
        description: "A review aggregator for metaverse, VR and AR products.",
        url: "nexaprism.joshkroz.com",
        img: nexaprismIMG,
    }
}
