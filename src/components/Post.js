export default function PostFunc(props) {
  const cName = props.isVoted ? "card bg-dark text-white" : "card";
  const btnText = props.isVoted ? "Unvote" : "Vote";
  const voteFunc = () =>{
    props.isVoted ? (
    props.unvotePost(props.post)
    ) : (
    props.votePost(props.post)
    );}

  return (
    <div className="col-12 col-sm-4 px-5 px-sm-0">
      <div className={cName} style={{ maxWidth: "18rem", minWidth: "14rem" }}>
        <img
          src={props.post.imgURL}
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.post.title}</h5>
          <p
            className="card-text"
            style={{ fontSize: "clamp(14px, 3vw, 16px)" }}
          >
            {props.post.content}
          </p>
          <button className="btn btn-primary" onClick={voteFunc}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
