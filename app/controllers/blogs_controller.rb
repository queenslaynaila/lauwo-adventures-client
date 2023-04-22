class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    @blogs = Blog.all
    render json: @blogs, status: :ok
  end

  def show
    render json: @blog, serializer: SingleBlogSerializer, status: :ok
  end

  def create
    @blog = Blog.new(blog_params)
    render json: @blog, status: :created
  end

  def update
    @blog.update!(blog_params)
    render json: @blog, status: :ok
  end

  def destroy
    @blog.destroy
    render json: { message: "#{@blog.title} has been deleted" }, status: :ok
  end

  private

  def set_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :content, :image_url, :author)
  end

end
