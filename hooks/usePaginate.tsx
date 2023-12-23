import React, { useEffect, useState } from 'react'

interface PaginProps {
    postsPerPage: number,
    totalPosts: number,
    paginate: (arg: number) => void
}


const usePaginate = () => {

    const [posts, setPosts] = useState<any[] | undefined>([]);
    const [loading, setLoading] = useState<boolean | undefined | any>(false);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [postsPerPage, setsPerPage] = useState<any | undefined>(2);
    const [currenTPosts, setCurrenTPost] = useState<any | any[] | undefined>()

    useEffect(() => {
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
        setCurrenTPost(currentPosts)
    }, [posts])




    // Change page
    const paginate: (arg: any) => void = (pageNumber: React.SetStateAction<any>) => setCurrentPage(pageNumber);

 

    return {
        posts, setPosts,
        loading, setLoading,
        currentPage, setCurrentPage,
        postsPerPage, setsPerPage,
        currenTPosts,
        paginate

    }
}

export default usePaginate

