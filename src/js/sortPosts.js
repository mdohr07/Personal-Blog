export function formatBlogPosts(
    posts, {
        filterOutDrafts = true,
        filterOutFuturePosts = true,
        sortByDate = true,
        limit = undefined,
    } = {}) {

        const filteredPosts = posts.reduce((acc, post) => {
            const { date, draft } = post.frontmatter;

            // filter out drafts: if true, pass empty array
            if(filterOutDrafts && draft) return acc;

            //filter out future posts
            if(filterOutFuturePosts && new Date(date) > new Date ()) 
            return acc;

            // add post to acc
            acc.push(post)
            return acc;
        }, []) 

        // sort by date or randomize
        if(sortByDate) {
            filteredPosts.sort((a, b) => 
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        } else {
          filteredPosts.sort(() => Math.random() - 0.5)  
        }

        // limit if number is passed
        if(typeof limit === "number") {
            return filteredPosts.slice(0, limit)
        }
        return filteredPosts;

}
