class CreateReminders < ActiveRecord::Migration[5.1]
  def change
    create_table :reminders do |t|
      t.string :type
      t.datetime :date_time
      t.boolean :repeat
      t.string :repeat_pattern, null: false, default: false

      t.timestamps
    end
  end
end
