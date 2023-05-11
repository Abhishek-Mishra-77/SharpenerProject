
const posts = [
    { title: 'Post  One' },
    { title: 'Post  Two' },
    { title: 'Post  Three' },

];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = new Date();
            resolve(time);
        })
    })
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = posts.push(post);
            resolve(posts);
        }, 2000);
    })
}


Promise.all([createPost({ title: 'Post  Four' }), updateLastUserActivityTime()])
    .then(([post, lastActivity]) => {
        console.log("Before creating post", post, lastActivity);
        // posts.push(post);
        console.log("After creating Post  >>>>>>", post);
    }).then(() => {
        console.log('Posts ', posts);

        updateLastUserActivityTime().then((userLastActivity) => {
            console.log('User Last activity Time ', userLastActivity.getTime())
        }).catch((error) => {
            console.log(error)
        })
    })

    // { title: 'Post Four' }

