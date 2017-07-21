class Api::PetsController < petlicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    render json: Pet.all.order(created_at: :desc)
  end

  def show
    render json: @pet
  end

  def create
    pet = Pet.create(pet_params)
    if pet.save
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
      @pet = pet.find(params[:id])
    end

    def pet_params
      params.require(:pet).permit(:name, :species, :birthday)
    end
end

