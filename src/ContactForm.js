export default function Contact() {
    return (
        <section className="mt-20 w-screen ml-2 p-4 h-20" id="contact">
            <header className="flex">
                <p className="font-source-code font-bold text-4xl">contact me. &#60;</p>
                <a href="mailto:marisaraj14@gmail.com"><i className="fa fa-at text-3xl p-2 font-bold" title="Email me"></i></a>
                <a href="https://github.com/marisaraj14" target="_blank"><i className="fa fa-github text-3xl p-2 font-bold" title="My Github repositiories"></i></a>
                <a href="https://www.linkedin.com/in/marisaraj/" target="_blank"><i class="fa fa-linkedin text-3xl p-2 font-bold" title="Let's connect"></i></a>
                <p className="font-source-code font-bold text-4xl">/&#62;</p>
            </header>
            <img className="float-right h-56 rounded-lg border-2 mr-28" src="https://www.pngitem.com/pimgs/m/633-6334863_chennai-central-line-drawing-hd-png-download.png"></img>
            <p className="text-gray-600 pb-2 ml-6">I'm always open to collaborating on projects. If you too are, then hit me up!</p>
            <input type="text" placeholder="Name" className="ml-6 w-3/12 p-2 border-b-2 rounded-lg border-gray-600  mr-8 focus:outline-none focus:border-green-500 bg-transparent" />
            <input type="text" placeholder="Email" className=" w-3/12 p-2 border-b-2 rounded-lg border-gray-600  mr-16 focus:outline-none focus:border-green-500  bg-transparent" />
            <br />
            <textarea type="text" placeholder="Message" className="ml-6 w-4/12 p-2 border-b-2 rounded-lg  mt-6 h-20 border-gray-600 focus:outline-none focus:border-green-500 bg-transparent" />
            <button className="bg-gray-500 m-16 font-mono tracking-widest p-1 rounded-md px-20 text-white">SEND</button>
        </section>
    );
}