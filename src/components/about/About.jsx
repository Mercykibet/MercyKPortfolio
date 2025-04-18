import React from "react"
 import photo from "../../assets/mercyprofilee.jpg";
import { Github, Linkedin, Mail } from 'lucide-react';
const About = ()=>{
return(
    <section id="about" className='min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-32 px-4 sm:px-6 lg:px-8 relative'>
    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent'></div>
    <div className='msx-w-7xl mx-auto relative'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-16 text-center'>
            About <span className='text-purple-400'>Me</span>
        </h2>
        <div className='grid grid-col-1 md:grid-cols-2 gap-12 items-center'>
            <div className='relative'>
                <div className='relative rounded-full overflow-hidden shadow-lg'>
                    <div className='absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent'></div>
                    <img
                        src={photo}
                        alt="Profile Photo"
                        className='object-cover w-full h-full rounded-lg'
                    />
                </div>
            </div>
            <div className='space-y-6'>
                <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-bold mb-6'>
                        <span className='block text-white opacity-90'>Web and Mobile</span>
                        <span className='block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>Developer</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl"> Hello, my name is Mercy, a passionate developer with over 5 years of experience in creating innovative digital solutions. I specialize in building scalable web applications and exploring emerging technologies to craft impactful user experiences.</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                            <h3 className='text-purple-400 text-lg font-medium mb-2'>Background</h3>
                            <p className='text-slate-300'>Full Stack developer with a focus on Mobile Development and React and Node.js ecosystems</p>
                        </div>
                        <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                            <h3 className='text-purple-400 text-lg font-medium mb-2'>Location</h3>
                            <p className='text-slate-300'>Based in Kenya,available for remote, hybrid, and on-site work.</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 items-center mt-8'>
                    <a href='#projects' className='px-8 py-4 bg-white text-purple-900 rounded-full font-medium hover:bg-purple-100 transition-all duration-300 transform hover:scale-105'>
                        View Projects
                    </a>
                    <div className='flex gap-6'>
                        <a href='https://github.com'
                            className='w-6 h-6 text-white hover:text-purple-400 cursor-pointer transition-colors'
                            target='_blank'>
                            <Github /> </a>
                        <a href='https://linkedin.com'
                            className='w-6 h-6 text-white hover:text-purple-400 cursor-pointer transition-colors'
                            target='_blank'>
                            <Linkedin /> </a>
                        <a href='mailto:kibetmercy9@gmail.com'
                            className='w-6 h-6 text-white hover:text-purple-400 cursor-pointer transition-colors'
                            target='_blank'>
                            <Mail /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default About