require 'json'
require 'faker'

cars = []

25.times do
  id = Faker::Internet.uuid
  manufacture = Faker::Vehicle.make
  transmission = Faker::Vehicle.transmission
  model = Faker::Vehicle.model(make_of_model: manufacture)
  type = Faker::Vehicle.car_type
  year = Faker::Vehicle.year
  options = Faker::Vehicle.car_options
  specs = Faker::Vehicle.standard_specs
  plate = Faker::Vehicle.license_plate

  cars.push({
    id: id,
    plate: plate,
    transmission: transmission,
    manufacture:  manufacture,
    model: model,
    available: [true, false].sample,
    type: type,
    year: year,
    options: options,
    specs: specs,
  })
end

File.write "data/cars.json", JSON.pretty_generate(cars)
