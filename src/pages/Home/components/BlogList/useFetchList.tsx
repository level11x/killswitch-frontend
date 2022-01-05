import axios from 'axios'
import { useEffect, useState } from 'react'
import striptags from 'striptags'

const KSW_BLOG_RSS =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/killswitch-finance'

interface Feed {
    title: string
    link: string
    thumbnail: string
    description: string
    content: string
}

export const useFetchList = () => {
    const [list, setList] = useState<Feed[]>()
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data: feed } = await axios(KSW_BLOG_RSS)
                const newList = feed.items.map((item) => ({
                    ...item,
                    description: striptags(item.description),
                    content: striptags(item.content),
                }))
                setList(newList)
            } catch (error) {
                console.error(error)
            }
        }
        fetch()
    }, [])

    return {
        blogList: list,
    }
}

export default useFetchList
