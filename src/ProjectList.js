import ModalImage from "react-modal-image";


export default function ProjectList(props) {
    const projects = props.list.map((prj, index) =>
        <li className="flex-shrink-0 w-64" key={index.toString()}>
            <ModalImage
                className="grayscale rounded-md w-64 h-60 border-2 border-dotted hover:scale-125"
                small={prj.imgUrl}
                large={prj.popUpImg}
                alt="Hello World!"
                title="preview"
            />
            <div className="flex gap-2 m-3 justify-center">
                <p className="mt-2 text-sm font-bold z-40 text-center rounded-b-md">{prj.title}</p>
                <button className="p-1 bg-red-400 text-white text-xs rounded-md scale-90 hover:scale-100">
                    <a href={prj.codeUrl} target="_blank"  rel="noreferrer">
                        View Code
                    </a>
                </button>
            </div>

        </li>
    );

    return (
        <ul className=" h-80 mt-6 gap-16 mx-8 my-4 flex overflow-x-auto space-x-10 rounded-md">
            {projects}
        </ul>
    );
}