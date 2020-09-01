import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Influence: {
            screens: {
              InfluenceScreen: 'Influence',
            },
          },
          Suppression: {
            screens: {
              SuppressionScreen: 'Suppression',
            },
          },
          Election: {
            screens: {
              ElectionScreen: 'Election',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
