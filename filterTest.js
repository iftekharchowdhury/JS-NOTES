let post = {id:4, title: 'New Post'};

var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'},
    
];

const commentForPost = (post, comments) => {

    return comments.filter(comment => {
        
        return comment.postId === post.id;
    });
}

console.log (commentForPost(post,comments));