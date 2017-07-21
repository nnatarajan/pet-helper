class Reminder < ApplicationRecord
    belongs_to :pet
    validates :type, :date_time, :repeat, :repeat_pattern, presence: true
end
