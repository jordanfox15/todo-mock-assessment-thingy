get '/' do
  redirect '/todos'
end

get '/todos' do
  p "SHIT"
  @todos = Todo.all
  erb :index
end

post '/todos' do
  if request.xhr?
    p "working"
    Todo.create(name: params[:name])
  else
    p "breaking"
    redirect '/todos'
  end
end


get '/tasks/new' do
  erb :_form, layout: false
end
