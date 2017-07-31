class Pet < ApplicationRecord
    belongs_to :user
    has_many :reminders
    validates_presence_of :name, :species, :birthday, :notes
    validates :name, :species, :birthday, :notes, presence: true
end
