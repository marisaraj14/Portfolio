export default function ProjectList(props) {
    const projects = props.list.map((prj, index) =>
        <li className="flex-shrink-0 w-64 hover:scale-105" key={index.toString()}>
            <img className="grayscale z-0 rounded-md w-64 h-60 border-2 border-dotted" src={prj.imgUrl} />
            <p className="mt-2 text-sm font-bold z-40 text-center rounded-b-md">{prj.title}</p>
        </li>
    );

    return (
        <ul className=" h-72 mt-6 gap-16 mx-8 my-4 flex overflow-x-auto space-x-10 rounded-md">
            {projects}
        </ul>
    );
}