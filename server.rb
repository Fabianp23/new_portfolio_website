require "sinatra"

get '/' do
  File.read("public/views/index.html")
end

get '/work.html' do
  File.read("public/views/work.html")
end

get '/about.html' do
  File.read("public/views/about.html")
end

get '/contact.html' do
  File.read("public/views/contact.html")
end

get '/index.html' do
  File.read("public/views/index.html")
end
