import { Fragment, useEffect, useState } from "react";
import { client } from "../../libs/contentfulClient.js"

export const loadPosts = async () => {
    const res = await client.getEntries({
        content_type: "mixcar"
    })
    return res.items
}

export default function Blog() {
    const [items, setItems] = useState([])
    useEffect(() => {
        (async () => {
            let posts: any = await loadPosts()
            setItems(posts.slice(0, 3))
        })()
    }, [])
    return (<Fragment>
        <section className="flex justify-center items-center align-middle body-font">
            <div className="container px-5 py-10 md:w-3/5">
                <div className="-my-8 divide-y-2 divide-gray-100 border-y-2">
                    {items.map((item: any) =>
                        <div key={item.sys.id} className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="mt-1 text-sm">{item.fields.date}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium title-font mb-2">{item.fields.title}</h2>
                                <p className="leading-relaxed line-clamp-2">{item.fields.body}</p>
                                <a href="/news" className="text-cyan-500 dark:text-cyan-200 inline-flex items-center mt-4">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </Fragment>)
}