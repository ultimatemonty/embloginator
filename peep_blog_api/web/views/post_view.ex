defmodule PeepBlogApi.PostView do
  use PeepBlogApi.Web, :view

  def render("index.json", %{posts: posts}) do
    %{posts: render_many(posts, PeepBlogApi.PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{posts: render_one(post, PeepBlogApi.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      body: post.body}
  end
end
