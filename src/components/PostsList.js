import Post from "./Post";

export default function PostsList(props) {
  const renderPosts = () => props.posts.map(post => <Post key={post.id} votePost={props.votePost} isVoted={false} post={post} />)
  ;

  return (
    <div className="row">
      {renderPosts()}
    </div>
  );
}
