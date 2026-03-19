import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";



function Contact() {
    return (
        <section id="contact" className="bg-gray-50 py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-4">
            Contact Me
        </h2>

        <p className="text-gray-600 mb-12">
            Feel free to teach out for collaboration or just a friendly chat!
        </p>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-10 grid gap-6">

 {/*EMAIL */}
 <div className="flex items-center gap-4 justify-center">
    <FaEnvelope className="text-blue-500 text-2xl" />
    <a href="malito:achmadfaisalzein@gmail.com"
    className="text-gray-700 hover:text-blue-500" >
        achmadfaisalzein@gmail.com
    </a>
 </div>

 {/* PHONE */}

 <div className="flex items-center gap-4 justify-center">
    <FaPhone className="text-green-500 text-2xl"/>
    <span className="text-gray-700">
        +62 878-5881-1655
    </span>
 </div>

    {/* LINKEDIN */}
    <div className="flex items-center gap-4 justify-center">
        <FaLinkedin className="text-blue-700 text-2xl"/>
        <a href="https://www.linkedin.com/in/akhmad-faisal-zein-684b03272e" target="_blank" rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600">
        Linkedn Profile
        </a>


        </div>

    {/* GITHUB */}
    <div className="flex items-center gap-4 justify-center">
        <FaGithub className="text-black text-2xl" />
        <a 
        href="https://github.com/akhmad2810"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black">
            Github Profile
        </a>
    </div>



        </div>

        {/* Button CTA */}
        <div className="mt-10">
            <a
            href="mailto:achmadfaisalzein@gmail.com"
            className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition">
                Let's work together
            </a>
        </div>
        </div>
            
        </section>
    );
}

export default Contact;


