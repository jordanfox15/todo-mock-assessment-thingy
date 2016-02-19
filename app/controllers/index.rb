get '/' do
  redirect '/todos'
end

get '/todos' do
  @todos = Todo.all
  erb :index
end

post '/todos' do
  if request.xhr?
    new_todo = Todo.create(name: params[:name])
    erb :_delete, locals: {todo: new_todo}, layout: false
  else
    redirect '/todos'
  end
end


get '/todos/new' do
  erb :_form, layout: false
end

delete '/todos/:id' do
  if request.xhr?
    Todo.find(params[:id]).destroy
    return params[:id]
  else
    redirect '/todos'
  end
end
