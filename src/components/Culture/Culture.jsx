import React from 'react'
import postData from '../postsData/CivicPosts.json'

export const Culture = () => {
    return (
        <div className="py-16 bg-white">
            <div className="grid gap-2 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="responsive-container-for-ps-parent">
                    <h4>Culture</h4>
                </div>
                <div className="responsive-container-for-ps-parent">
                    <h1 sm:text-3xl md:text-4xl lg:text-5xl font-bold->{postData.title}</h1>
                </div>
                
                <div className="responsive-container-for-ps-parent">
                    {postData.introFirst && (
                        <p className='text-left text-base sm:text-lg md:text-xl leading-relaxed mt-4'>{postData.introFirst}</p>
                    )}
                </div>

                {postData.image && (
                    <div className="flex justify-center items-center">
                        <img
                        src={postData.image}
                        alt="Civic visual"
                        className="w-full max-w-3xl rounded-md shadow-lg object-cover my-6 mx-auto"
                        loading="lazy"
                        />
                    </div>
                )}

                <div className="responsive-container-for-ps-parent">
                    {postData.introSecond && (
                        <p className='text-left text-base sm:text-lg md:text-xl leading-relaxed mt-4'>{postData.introSecond}</p>
                    )}
                </div>

                <div>
                    {postData.sections.map((section, index) => (
                        <div key={index} className="my-8">
                            <h2 className='text-left'>{section.heading}</h2>
                            <p>
                                {section.body.map((para, i) => (
                                    <span key={i}>
                                        {para}
                                        {i < section.body.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                            {section.image && (
                                <div className="flex justify-center items-center my-4">
                                    <img
                                        src={section.image}
                                        alt={section.imageAlt || "Section visual"}
                                        className="w-full max-w-3xl rounded-md shadow-lg object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    );
}