const { GraphQLObjectType,GraphQLSchema, GraphQLString, GraphQLFloat } = require('graphql');
var Weather = require('./model/weather');


const WeatherType = new GraphQLObjectType({
    name: 'Weather',
    fields: () => ({
        place: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
        temperature: { type: GraphQLFloat },
        description: { type: GraphQLString },
        icon: { type: GraphQLString },
    }),
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        weather: {
            type: WeatherType,
            args: {
                place: { type: GraphQLString },
            },
           resolve: async (_, { place }) => {
                const weatherData = await Weather.findOne({ place }); 
                return weatherData;
            },
        },
    }),
});

module.exports = new GraphQLSchema({ query: QueryType });