defmodule PeepBlogApi.Router do
  use PeepBlogApi.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug PlugCors, [origins: ["*"]]
  end

  scope "/", PeepBlogApi do
    pipe_through :api # use the :api pipeline

    resources "/posts", PostController
    options "posts*anything", PostController, :options
  end
end
