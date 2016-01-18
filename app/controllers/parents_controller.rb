class ParentsController < ApplicationController
  def index
    children = Child.all
  end
end
