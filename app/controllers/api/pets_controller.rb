class Api::PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    # Pets that belong to the current logged in user
    render json: current_user.pets
  end

  def show
    render json: @pet
  end

  def create
    pet = Pet.create(pet_params)
    pet.user = current_user
    if pet.save!
      render json: pet
    else
      render json: { errors: pet.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: { errors: @pet.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
      @pet.destroy
  end

  private
    def set_pet
      @pet = Pet.find(params[:id])
    end

    def pet_params
      params.require(:pet).permit(:name, :species, :birthday)
    end
end
