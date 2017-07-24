class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name, null:false
      t.string :species, null:false
      t.date :birthday, null:false
      t.references :user, foreign_key: true, null:false

      t.timestamps
    end
  end
end
