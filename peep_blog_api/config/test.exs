use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :peep_blog_api, PeepBlogApi.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Set a higher stacktrace during test
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :peep_blog_api, PeepBlogApi.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "peep_blog_api_test",
  pool: Ecto.Adapters.SQL.Sandbox
