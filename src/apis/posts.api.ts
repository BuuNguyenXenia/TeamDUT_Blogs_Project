import axiosClient from "./axiosClient"

const PostsApi = {
  getPosts: params => {
    const url = "/api/posts"
    return axiosClient.post(url, { params })
  },
  getItemPosts: id => {
    const url = `/posts/${id}`
    return axiosClient.get(url)
  },
  getPopularPosts: () => {
    const url = "/posts?per_page=3&sort_by=+like"
    return axiosClient.get(url)
  },
  getLatestDeals: () => {
    const url = "/posts?per_page=4&sort_by=-createdAt"
    return axiosClient.get(url)
  },
  getLatestNews: () => {
    const url = "/posts?page=1"
    return axiosClient.get(url)
  },
  getFeatured: () => {
    const url = "/posts?per_page=3&sort_by=+comment"
    return axiosClient.get(url)
  },
  getReviews: () => {
    const url = "/posts?per_page=4&sort_by=-createdAt"
    return axiosClient.get(url)
  },
  searchPosts: value => {
    const url = `/posts?search=${value}`
    return axiosClient.get(url)
  },
  createComment: (_id, value) => {
    const url = `/posts/${_id}`
    return axiosClient.post(url, value)
  },
  createLike: _id => {
    const url = `/likes/${_id}`
    return axiosClient.post(url)
  }
}

export default PostsApi