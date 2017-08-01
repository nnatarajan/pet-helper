class FixRemindersTypeName < ActiveRecord::Migration[5.1]
  def change
    rename_column :reminders, :type, :reminder_type
  end
end
