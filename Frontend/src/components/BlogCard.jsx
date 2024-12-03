import PropTypes from "prop-types";
const BlogCard = ({blog}) => {
  return (
    <div data-aos = 'zoom-out-up' className="card bg-[#010d6e] text-white h-[20vh] w-96 mx-auto shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-red-600 font-bold">{blog.author}</h2>
      <p>{blog.opinion}</p>
      <div className="card-actions justify-end">
       <h1 className="text-red-600 font-semibold">Batch: {blog.batch}</h1>
      </div>
    </div>
    </div>
  )
}
BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    batch: PropTypes.number.isRequired,
    opinion: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard
