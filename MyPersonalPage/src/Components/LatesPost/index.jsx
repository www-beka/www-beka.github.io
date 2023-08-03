import "./posts.scss";

const LatesPost = () => {
  return (
    <>
      <div className="lates_posts flex justify-center items-center my-12">
        <div className="posts_head">
            <h1>Latest posts</h1>
            <div className="line"></div>
        </div>
        <div className="post_description">
            <span>📅 August 03, 2023</span>
            <div>
                <p>First Post!!!</p>
                <span>About this web site</span>
                <b>Read more ⏭</b>
            </div>
        </div>
        <div className="all_posts_link">
            <span>All posts ⏭</span>
        </div>
      </div>
    </>
  );
};

export default LatesPost;
