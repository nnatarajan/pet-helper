class Pet < ApplicationRecord
    belongs_to :user
    has_many :reminders
    validates_presence_of :name, :species, :birthday
    validates :name, :species, :birthday, presence: true
end
