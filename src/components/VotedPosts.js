import Post from "./Post";

export default function VotedPost(props) {
  const renderPosts = () => props.posts.map(post => <Post key={post.id} isVoted={true} unvotePost={props.unvotePost} post={post}/>);

  return (
    <div className="row justify-content-center">
      {renderPosts()}
    </div>
  );
}
