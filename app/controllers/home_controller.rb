class HomeController < ApplicationController
  def index
    @children = Child.all
  end
end
