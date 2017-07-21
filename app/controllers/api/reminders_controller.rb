class Api::RemindersController < ApplicationController

  def index
    render json: Reminder.all.order(created_at: :desc)
  end

  def show
    render json: @reminder
  end

  def create
    reminder = Reminder.create(reminder_params)
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
    def set_reminder
      @reminder = Reminder.find(params[:id])
    end

    def reminder_params
      params.require(:reminder).permit(:type, :date_time, :repeat, :repeat_pattern)
    end
end
