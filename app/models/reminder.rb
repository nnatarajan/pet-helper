class Reminder < ApplicationRecord
    belongs_to :pet
    validates :reminder_type, :date_time, :repeat, :repeat_pattern, presence: true
end
