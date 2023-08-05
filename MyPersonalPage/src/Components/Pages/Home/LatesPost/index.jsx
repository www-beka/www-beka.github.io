import "./posts.scss";

const LatesPost = () => {
  return (
    <>
      <div className="lates_posts container mx-auto px-40 p-11 my-12 relative">
        <div className="posts_head">
            <h1 class="dark:text-gray-200 text-stone-900 select-none lg:text-5xl text-4xl font-bold lg:mb-6 mb-4">Latest posts</h1>
        </div>
        <div className="post_description pt-12 flex border-t border-t-gray-300 dark:border-t-gray-500 lg:mb-8">
            <span className="text-zinc-800 dark:text-gray-400 lg:ml-2 select-none lg:text-base">📅 August 03, 2023</span>
            <div className="ml-32">
                <p className="text-2xl lg:mb-3 select-none font-be-vietnam-pro lg:hover:text-fuchsia-500 md:transition-all md:ease-in-out cursor-pointer text-zinc-900 dark:text-gray-200 font-outfit font-bold">First Post!!!</p>
                <span className="mb-3 lg:text-base md:pr-6 md:block hidden text-gray-600 dark:text-gray-400 text-xl">About this web site</span>
                <b className="lg:text-base select-none text-lg cursor-pointer font-medium">Read more ⏭</b>
            </div>
        </div>
        <div className="all_posts_link">
            <span className="absolute right-80 bottom-6">All posts ⏭</span>
        </div>
      </div>
    </>
  );
};

export default LatesPost;
