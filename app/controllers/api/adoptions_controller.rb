class Api::AdoptionsController < ApplicationController
  def index
    res = HTTParty.get("http://api.petfinder.com/shelter.find?key=1ac766f7e5e531366f2b62714ed2e4c2&location=84111&count=50&format=json")

    render json: res
  end
end
