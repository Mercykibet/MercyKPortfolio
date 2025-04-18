import { Section } from "lucide-react";
import { BookOpen } from 'lucide-react'
import React from "react";

const Education = ()=>{

    return(
        <section id="education" className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-32 px-4 sm:px-6 lg:px-8">
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-16 text-center'>
                Education & <span className='text-purple-400'>Certifications</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {[
                    {
                        type: "Degree", title: "Bsc.Applied Computer Science", place: "Chuka University", year: "2017-2021"
                    },
                    {
                        type: "Certification", title: "AWS Solutions Architect", place: "Amazon Web Services", year: "2023"
                    },
                    {
                        type: "Certification", title: "CCNA", place: "Kenyatta University", year: "2024"
                    },
                    {
                        type: "Certification", title: "Cyber Security", place: "Kenyatta University", year: "2022"
                    }
                ].map((item)=>(
                    <div 
                    key={item.title}
                    className='bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all  duration-300'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 bg-purple-500/20 rounded-lg'>
                                <BookOpen className='w-6 h-6 text-purple-400'/>
                            </div>
                            <div>
                                <span className='text-purple-400 text-sm'>{item.type}</span>
                                <h3 className='text-xl font-semibold text-white mt-1'>{item.title}</h3>
                                <p className='text-slate-300 mt-2'>{item.place}</p>
                                <p className='text-slate-400 mt-1'>{item.year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Education