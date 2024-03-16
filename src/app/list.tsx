import { Fragment, useEffect, useState } from "react";
import { client } from "../../libs/contentfulClient.js"
import Image from "next/image"

export const loadList = async () => {
    const res = await client.getEntries({
        content_type: "carList"
    })
    return res.items
}

export default function Blog() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [list, setList] = useState([])
    const [min, setMin] = useState<number>(10)
    const [max, setMax] = useState<number>(70)

    useEffect(() => {
        (async () => {
            let carList: any = await loadList()
            setList(carList)
        })()
    }, [])
    const newTags = new Set();
    list.forEach((item: any) => {
        newTags.add(item.fields.manufacturer)
    });
    const tags = Array.from(newTags)


    const handleFilterButtonClick = (selectedCategory: string) => {
        if (selectedFilters.includes(selectedCategory)) {
            let tags = selectedFilters.filter((el: string) => el !== selectedCategory)
            setSelectedFilters(tags);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory])
        }
    }

    useEffect(() => {
        filterItems();
    }, [selectedFilters, list, min,max])


    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory: string) => {
                let temp = list.filter((list: any) => list.fields.manufacturer === selectedCategory && list.fields.payPrice <= max && list.fields.payPrice >= min);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            let temp = list.filter((list: any) => list.fields.payPrice <= max && list.fields.payPrice >= min);
            setFilteredItems([...temp]);
        }
    }



    const incrementMinHandle = () => {
        if (min > 0) {
            setMin(min - 5)
        }
    }

    const decrementMinHandle = () => {
        if (min < max) {
            setMin(min + 5)
        }
    }
    const incrementMaxHandle = () => {
        if (max < 100) {
            setMax(max + 5)
        }
    }

    const decrementMaxHandle = () => {
        if (min < max) {
            setMax(max - 5)
        }
    }

    const minStyle = `${min}%`
    const maxStyle = `${max}%`
    const dynamicWidth = `${Math.abs(max - min)}%`;



    return (<Fragment>
        <div className="flex flex-col justify-center items-center align-middle body-font overflow-auto px-auto mb-10">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {tags.map((category: any) => (
                    <button
                        key={category}
                        onClick={() => handleFilterButtonClick(category)}
                        className={`m-2 px-2 py-3 rounded-md border-2 border-black dark:border-slate-300 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-md hover:shadow-slate-300 ${selectedFilters?.includes(category) ? " bg-opacity-50 dark:bg-opacity-80 bg-slate-700 dark:-slate-200 text-white" : "bg-opacity-0 text-black dark:text-slate-300"}`}
                    >{category}</button>
                ))}
            </div>
            <div className="flex gap-5 w-[30dvw]  sm:w-[20dvw] lg:w-[15dvw] m-auto items-center h-32 justify-center">

                <form className="max-w-xs mx-auto">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">下限:</label>
                    <div className="relative flex items-center">
                        <button type="button" onClick={incrementMinHandle} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input type="text" id="counter-input" data-input-counter className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[3rem] text-center" readOnly placeholder="" value={min} required />
                        <button type="button" onClick={decrementMinHandle} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="py-1 relative min-w-full">
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div className={`absolute h-2 rounded-full bg-teal-600`} style={{ width: dynamicWidth, left: minStyle }} />
                        <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0" style={{ left: minStyle }}>
                            <div className="relative -mt-2 w-1">
                                <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full -ml-6" >
                                    <div className="relative shadow-md">
                                        <div className="bg-black bg-opacity-70 -mt-8 text-white truncate text-xs rounded py-1 px-4">{Math.round(min * 10) / 10} 万</div>
                                        <svg className="absolute text-black bg-opacity-70 text-opacity-70 w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0" style={{ left: maxStyle }}>
                            <div className="relative -mt-2 w-1">
                                <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full -ml-6">
                                    <div className="relative shadow-md">
                                        <div className="bg-black bg-opacity-70 -mt-8 text-white truncate text-xs rounded py-1 px-4">{Math.round(max * 10) / 10} 万</div>
                                        <svg className="absolute text-black bg-opacity-70 text-opacity-70 w-full h-2 left-0 top-100" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute text-gray-800 dark:text-gray-100 -ml-1 bottom-0 left-0 -mb-6">0 円</div>
                        <div className="absolute text-gray-800 dark:text-gray-100 -mr-1 bottom-0 right-0 -mb-6">100 万円</div>
                    </div>
                </div>

                <form className="max-w-xs mx-auto">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">上限:</label>
                    <div className="relative flex items-center">
                        <button type="button" onClick={decrementMaxHandle} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input type="text" id="counter-input" data-input-counter className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[3rem] text-center" readOnly placeholder="" value={max} required />
                        <button type="button" onClick={incrementMaxHandle} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                </form>

            </div>

        </div>
        <div className="h-[70dvh] w-[90dvw] mx-auto overflow-y-scroll overflow-x-hidden">

            <section className=" flex flex-col justify-center items-center align-middle body-font overflow-auto px-auto">
                <div className="container py-10">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        {filteredItems.map((list: any) =>
                            <a key={list.sys.id} href={`${list.fields.url}`}>
                                <div className="py-8 flex flex-col px-5 flex-wrap md:flex-nowrap border-2 border-slate-700 dark:border-slate-300 rounded-md hover:shadow-md hover:shadow-slate-300 hover:-translate-y-2 duration-200">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="mt-1 text-md font-bold">{list.fields.carName}</span>
                                        <span className="mt-1 text-sm">{list.fields.manufacturer}</span>
                                        <span className="mt-1 text-sm">年式 {list.fields.age}</span>
                                        {list.fields.engine ?
                                            <span className="mt-1 text-sm">排気量 {list.fields.engine}</span>
                                            : <span className="mt-6 text-sm"></span>
                                        }
                                        <span className="mt-1 text-sm">走行距離 {list.fields.mileage}</span>
                                        <span className="mt-1 text-sm">支払総額 {list.fields.payPrice}</span>
                                        <span className="mt-1 text-sm">本体価格 {list.fields.basePrice}</span>
                                        <Image loading="lazy" priority={false} src={"https:" + list.fields.picture.fields.file.url} alt="Photo" className="w-[80%] object-cover object-center block" width={1000} height={1000}/>
                                    </div>
                                </div>
                            </a>

                        )}
                    </div>
                </div>
            </section>
        </div>
    </Fragment>)
}