class EventsController < ApplicationController
 def index
    data = {
      apikey: ENV['API_KEY'],
      objectType: "events",
      objectAction: "publicSearch",
      search:
      {
          resultStart: "0",
          resultLimit: "1",
          resultSort: "eventID",
          resultOrder: "asc",
          filters:
          [
              {
                  fieldName: "eventID",
                  operation: "greaterthan",
                  criteria: "0"
              }
          ],
          filterProcessing: "1",
          fields: ["eventID","eventOrgID","eventName","eventStart","eventEnd","eventUrl","eventDescription","eventLocationID","eventSpecies","locationName","locationUrl","locationAddress","locationCity","locationState","locationPostalcode","locationCountry","locationPhone","locationPhoneExt","locationEvents"]
      }
    }

    res = HTTParty.get("https://api.rescuegroups.org/http/json/?data=#{data.to_json}")

    if res.body[0] == '('
      res.body[0] = ''
      res.body[res.body.length - 1 ] = ''
    end

    data = JSON.parse(res.body)
    render json: data
  end
end
