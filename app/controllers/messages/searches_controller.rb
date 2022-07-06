class Messages::SearchesController < ApplicationController
  def index
    @messages = Message.where('title LIKE(?)', "%#{params[:title]}%")
    respond_to do |format|
      format.html { redirect_to :root }
      format.json { render json: @messages }
    end
  end
end