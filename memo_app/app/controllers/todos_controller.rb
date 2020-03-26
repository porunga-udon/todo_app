class TodosController < ApplicationController

  def index
    if params[:keyword ] == ""
      @todos = Todo.order('created_at ASC')
      @dates = @todos.all
    else
      @todo = Todo.new
      @todos = Todo.order('created_at ASC')
      @dates = @todos.search(params[:keyword])
    end
    respond_to do |format|
      format.html
      format.json
    end
  end

  def create
    # binding.pry
    if params[:encryption].present?
      @todo = Todo.create(encryption_params)
      @todo.encryption
      @todo.save
    elsif params[:decryption].present?
      @todo = Todo.create(decryption_params)
      @todo.decryption
      @todo.delete
    elsif params[:todo].present?
      @todo = Todo.create(todo_params)
    end
    respond_to do |format|
      format.html { redirect_to :root }
      format.json { render json: @todo}
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:content)
  end

  def encryption_params
    params.require(:encryption).permit(:content,:key)
  end

  def decryption_params
    params.require(:decryption).permit(:content,:key)
  end

end