require 'sinatra'

# set sinatra's variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :public, 'public'


get '/app_old' do
  File.read(File.join('public', 'index_test.html'))
end

get '/app' do
  File.read(File.join('public', 'index.html'))
end

get '/form' do
  File.read(File.join('public', 'form.html'))
end

get '/anim' do
  File.read(File.join('public', 'zepto_animations.html'))
end

get '/twitter' do
  File.read(File.join('public', 'twitter_boot.html'))
end