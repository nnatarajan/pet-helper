class Api::RemindersController < ApplicationController
  before_action :set_pet, only: [:index, :create]

  def index
    render json: @pet.reminders.all.order(created_at: :desc)
  end

  def show
    render json: @reminder
  end

  def create
    reminder = @pet.reminders.create(reminder_params)
    if reminder.save
      render json: reminder
    else
      render json: { errors: reminder.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @reminder.update(reminder_params)
      render json: @reminder
    else
      render json: { errors: @reminder.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
      @reminder.destroy
  end

  private

    def set_pet
      @pet = Pet.find(params[:pet_id])
    end

    def set_reminder
      @reminder = Reminder.find(params[:id])
    end

    def reminder_params
      params.require(:reminder).permit(:type, :date_time, :repeat, :repeat_pattern)
    end
end
