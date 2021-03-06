export default function Contact() {
    return (
        <section className="mt-20 w-screen p-4 h-26 bg-gray-200" id="contact">
            <header className="flex">
                <p className="font-source-code font-bold text-4xl">contact me.	&lt;</p>
                <a href="mailto:marisaraj14@gmail.com" ><i className="fa fa-at text-3xl p-2 font-bold" title="Email me"></i></a>
                <a href="https://github.com/marisaraj14" target="_blank"  rel="noreferrer"><i className="fa fa-github text-3xl p-2 font-bold" title="I'm still working on it y'all."></i></a>
                <a href="https://www.linkedin.com/in/marisaraj/" target="_blank"  rel="noreferrer"><i class="fa fa-linkedin text-3xl p-2 font-bold" title="Profesh setting"></i></a>
                <p className="ml-2 font-bold text-4xl"> &gt;</p>

           
            </header>
            <p className="text-gray-600 pb-2">I'm always open to collaborating on projects. If you too are, then hit me up!</p>
        </section>
    );
}